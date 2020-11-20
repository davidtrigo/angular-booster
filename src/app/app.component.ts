import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <h1>{{title}}</h1>
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
    <button type="submit" >Go !</button>
    </form>

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
  title = 'angular-booster';
  queryParams={
    searchTerm:'Apollo',
    net:'1961-02-16T13:05:00Z',
    numberOfLaunches:'20',
  };
  launches= [{
    name:'Apollo 13',
    location:'Kennedy Space Center',
    net:'1961-02-16T13:05:00Z',
    pad:'39A',
    status:
    {
      name:'Success'
    }
  },
  {
    name:'Apollo 13 mission 2',
    net:'1964-02-17T13:05:00Z',
    location:'Kennedy Space Center',
    pad:'40A',
    status:{
      name:'Failure'
    }
  }
];
}
