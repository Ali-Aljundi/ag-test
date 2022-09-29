import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'algooru';

  public cards = [
    {
      'author':'Khaled Abdul',
      'date':'Feb 2, 2022',
      'content':'This was the easiest way to get a tutor. I want to personally thank Mr. Ali Abdulrahman for really helping me ace my AP Biology exams',
      'logo':'Google play',
    },
    {
      'author':'Khaled Abdul',
      'date':'Feb 2, 2022',
      'content':'This was the easiest way to get a tutor. I want to personally thank Mr. Ali Abdulrahman for really helping me ace my AP Biology exams',
      'logo':'Vector (5)',
    }
  ]
}
