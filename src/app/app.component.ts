import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient){
  }
  title = 'Simulated Operating System';
  memorytable: string[] = ['', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', ];
  instructiontable: string[] = ['!', '!', '!', '!', '!', '!', '!', '!', '!', '!',
    '!', '!', '!', '!', '!', '!', '!', '!', '!',
    '!', '!', '!', '!', '!', ];
  outputdisplay: string = '';
  clear() {
    this.instructiontable = ['!', '!', '!', '!', '!', '!', '!', '!', '!', '!',
      '!', '!', '!', '!', '!', '!', '!', '!', '!',
      '!', '!', '!', '!', '!', ];
  }
  load() {
    this.http.post<string>('  http://localhost:8080/memorymanager/newjob',
      {
        "instructions" : [
          this.instructiontable[0], this.instructiontable[1], this.instructiontable[2], this.instructiontable[3], this.instructiontable[4],
          this.instructiontable[5], this.instructiontable[6], this.instructiontable[7], this.instructiontable[8], this.instructiontable[9],
          this.instructiontable[10], this.instructiontable[11], this.instructiontable[12], this.instructiontable[13], this.instructiontable[14],
          this.instructiontable[15], this.instructiontable[16], this.instructiontable[17], this.instructiontable[18], this.instructiontable[19],
          this.instructiontable[20], this.instructiontable[12], this.instructiontable[22], this.instructiontable[23], this.instructiontable[24]
        ]
      }).
    subscribe(data => {
        console.log(data);
      }
    );
  }
  run() {
    this.http.put<string>(' http://localhost:8080/processmanager/run', {responseType: 'text' as 'json'})
      .subscribe(data => {
        console.log(data);
      }
      );
  }
  addInput(instruction: string, index: number) {
    this.instructiontable[index] = instruction;
  }
  getOutPutMemory(){
    this.http.get<string>(' http://localhost:8080/memorymanager/getoutput', {responseType: 'text' as 'json'})
      .subscribe(data => {
          this.outputdisplay = data;
          console.log(data);
        }
      );
  }
  getOutPutProcessor(){
    this.http.get<string>('  http://localhost:8080/processmanager/getoutput', {responseType: 'text' as 'json'})
      .subscribe(data => {
          this.outputdisplay = data;
          console.log(data);
        }
      );
  }
  getMemoryTable(){
    this.http.get<string[]>('   http://localhost:8080/memorymanager/getmemorytable')
      .subscribe(data => {
        for (let i = 0; i < 100; i++) {
          this.memorytable[i] = data[i];
        }
        }
      );
  }
  upDate(){
    this.getMemoryTable();
    this.getOutPutMemory();
  }
}


