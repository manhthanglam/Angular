import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-convert';
  result: any;
  input: any;
  edit(event: any): void {
    this.input = event.target.value;
  }
  convert(inputNumber: any): void {
    this.result = (inputNumber * 1.8) +  32;
    if (this.result > 0) {
      document.getElementById('divId').style.display = "block";
    }

  }
}
