import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-fusion',
  templateUrl: './fusion.component.html',
  styleUrls: ['./fusion.component.scss'],
})
export class FusionComponent implements OnInit {

  @Input() fusion: any;
  constructor() { }

  ngOnInit() {}

}
