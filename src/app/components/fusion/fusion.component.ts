import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-fusion',
  templateUrl: './fusion.component.html',
  styleUrls: ['./fusion.component.scss'],
})
export class FusionComponent implements OnInit {

  @Input() fusion: any;
  @Output() personaClicked = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  isBigWidesize() {
    const width = window.innerWidth;
    return width > 800;
  }
  onClickPersona(persona){
    this.personaClicked.emit(persona.name);
  }
}
