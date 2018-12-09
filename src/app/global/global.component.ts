import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {

  title = 'SingTest';
  players = ['John','Martin','Gary','Vincent','Pierre'];
  songs = ['Heaven','Highway','Queen','Offspring','Vald','Columbine'];
  onomatopee = ['Aah','Eeh','Ooh','Uuh'];
  points = ['0','1','2','3','4','5','6','7','8','9','10'];

  
  constructor() { }

  ngOnInit() {
  }

}
