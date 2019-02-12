import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cool',
  templateUrl: './cool.component.html',
  styleUrls: ['./cool.component.css']
})
export class CoolComponent implements OnInit {

  @Input()
  x = 0;

  @Output()
  customE = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


  sendData(){
    this.customE.emit({msg: "Coming from earth core"});
  }

}
