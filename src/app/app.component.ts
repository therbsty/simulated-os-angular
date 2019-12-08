import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
/*memorytable[1]="bb";*/
  instructiontable: string[] = ['', '', '', '', '', '', '', '', ``, '',
    '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', ];
  outputdisplay: string = 'test output';
  clear() {
    this.outputdisplay = 'Clear Was Clicked';
    this.instructiontable = ['', '', '', '', '', '', '', '', ``, '',
      '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', ];
    this.memorytable[0] = 'clear';
  }
  load() {
    this.outputdisplay = 'Load Was Clicked';
    this.memorytable[0] = 'load';
  }
  run() {
    this.outputdisplay = 'Run Was Clicked';
    this.memorytable[0] = 'run';
  }
  addInput(instruction: string, index: number) {
    this.instructiontable[index] = instruction;
  }
}


