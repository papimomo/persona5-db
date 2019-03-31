import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-persona-horizontal',
  templateUrl: './persona-horizontal.component.html',
  styleUrls: ['./persona-horizontal.component.scss'],
})
export class PersonaHorizontalComponent implements OnInit {

  @Input() persona: any;
  @Input() skill: any;
  constructor() { }

  ngOnInit() {}

}
