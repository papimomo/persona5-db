import { Component, OnInit, Input } from '@angular/core';
import { arcana } from '../../personaDb';

@Component({
  selector: 'app-persona-row',
  templateUrl: './persona-row.component.html',
  styleUrls: ['./persona-row.component.scss'],
})
export class PersonaRowComponent implements OnInit {

  @Input() persona: any;
  color
  constructor() {
  }

  ngOnInit() { }


  // getBackgroundColor(arc: string) {
  //   this.color = "#2662F733";
  //   switch (arc) {
  //     case arcana.gusha:
  //       this.color = "#FD4B4B33";
  //       break;
  //     case arcana.hoshi:
  //       this.color = "#FFE50633";
  //       break;
  //     case arcana.houou:
  //       this.color = "#E87E0C33";
  //       break;
  //     case arcana.inja:
  //       this.color = "#FFFFFF33";
  //       break;
  //     case arcana.jotei:
  //     this.color = "#33";
  //       break;
  //     case arcana.keishisya:
  //     this.color = "#A39E9333";
  //       break;
  //     case arcana.koutei:
  //     this.color = "#19FF0033";
  //       break;
  //     case arcana.majutushi:
  //     this.color = "#8B0CE833";
  //       break;
  //     case arcana.renai:
  //     this.color = "#FF000033";
  //       break;
  //     case arcana.seigi:
  //     this.color = "#0DFFA933";
  //       break;
  //     case arcana.sensya:
  //     this.color = "#FF730233";
  //       break;
  //     case arcana.shinigami:
  //     this.color = "#21201E33";
  //       break;
  //     case arcana.sinpan:
  //     this.color = "#FCE8BB33";
  //       break;
  //     case arcana.taiyou:
  //     this.color = "#FCCF5933";
  //       break;
  //     case arcana.tou:
  //     this.color = "#D2E80A33";
  //       break;
  //     case arcana.tuki:
  //     this.color = "#005CFF33";
  //       break;
  //     case arcana.unmei:
  //     this.color = "#E810BB33";
  //       break;
  //   }
  //   return this.color
  // }
}
