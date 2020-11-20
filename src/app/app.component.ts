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
        <label for="numberOfLaunches">Number of launches</label>
        <input name="numberOfLaunches" type="number" [(ngModel)] ="queryParams.numberOfLaunches"/>
      </div>
    <button type="submit" >Go !</button>
    </form>
  `,
  styles: [
    `
     h1{
       color:#28aaff
    }
    `
  ]
})
export class AppComponent {
  title = 'angular-booster';
  queryParams={
    searchTerm:'Apollo',
    numberOfLaunches:'20',
  }
}
