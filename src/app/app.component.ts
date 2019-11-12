import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simulated Operating System';
  testdata : String
  constructor(private http: HttpClient) {}
  testget() : void {
  this.http.get<String>('http://localhost:8080/test/8')
  .subscribe(data => {
      this.testdata = data;
      console.log(data);
  }
  );
  }
}
