import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-persona-horizontal',
  templateUrl: './persona-horizontal.component.html',
  styleUrls: ['./persona-horizontal.component.scss'],
})
export class PersonaHorizontalComponent implements OnInit {

  @Input() persona: any;
  @Input() skill: any;
  @Input() index: number;
  constructor() { }

  ngOnInit() {}

  getLearnLevel(){
    if(this.skill.level === 0){
      return '-';
    }else{
      return this.skill.level;
    }
  }
}
