import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  spacing: string;
  number: string;

  getData(message: any){
      this.spacing = message.Spacing;
      this.number = message.DLarge;
  }
}
