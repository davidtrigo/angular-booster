import { QueryParams } from './query-params';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <header>
    <h1>{{title}}</h1>
    <p>Angular application example</p>
  </header>
    <form>
    <legend>
          Searching {{ queryParams.numberOfLaunches }} launches related to
          {{ queryParams.searchTerm }}
        </legend>
      <div>
        <label for="searchTerm">Search term</label>
        <input name="searchTerm" type="text" [(ngModel)] ="queryParams.searchTerm" />
      </div>
      <div>
        <label for="numberOfLaunches">Number of launches </label>
        <input name="numberOfLaunches" type="number" [(ngModel)] ="queryParams.numberOfLaunches"/>
      </div>
    <button type="submit" (click)="getSpaceData()">Go !</button>
    </form>

    <section *ngIf="launches.length > 0">
    <header>
        <h2>Found {{ launches.length }} launches</h2>
    </header>
    
    <aside *ngFor="let launch of launches" class="{{ launch.status.name | lowercase }}">
      <h3>
      {{ launch.name }}
      </h3>
      <p>
        <b>on {{ launch.net | date: 'dd/MM/yyyy HH:mm:ss' }}</b>
      </p>
      <p>
        <i> at {{ launch.location }}</i>
      </p>
        <i> pad: {{ launch.pad }}</i>
    </aside>
    </section>

    <aside *ngIf="launches.length == 0">
      <header>
        <h4>📡 Waiting... No data yet 📡</h4>
      </header>
    </aside>
    
  `,
  styles: [
    `
     h1{
       color:#28aaff
    }
    .success{
      color: #3ad29f
    }
    
    .failure{
      color: #f73454
    }
    `
  ]
})
export class AppComponent {
  title = 'Angular booster';
  queryParams: QueryParams ={
    searchTerm:'Apollo',
    numberOfLaunches:20,
  };
  
    launches= [];
    weHaveAproblem= '';
   // launches: any[]=[];
  /*
  http: HttpClient;
  constructor( http:HttpClient){
    this.http = http;
  }*/

  // Sugar Syntax
 constructor(private http:HttpClient){}
   
  getSpaceData(){
    const rootUrl = 'https://lldev.thespacedevs.com/2.0.0/launch/?mode=list&';
    const launchesUrl = `${rootUrl}limit=${this.queryParams.numberOfLaunches}&search=${this.queryParams.searchTerm}`;
      
    this.http.get<any>(launchesUrl).subscribe({
        next: data => (this.launches = data.results),  //ok
      });
    }
  

}
