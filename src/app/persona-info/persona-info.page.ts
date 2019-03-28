import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PersonaDb } from '../personaDb';
import { arcana } from "../personaDb";

@Component({
  selector: 'app-persona-info',
  templateUrl: './persona-info.page.html',
  styleUrls: ['./persona-info.page.scss'],
})
export class PersonaInfoPage implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute) {

  }

  title: string;
  persona: any;
  personaList = new PersonaDb().persona;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.title = params.get('name');
      console.log(name);
      this.persona = this.personaList.find(persona => persona.name === this.title);
    });
  }

  isBigWidesize() {
    const width = window.parent.screen.width;
    return width > 700;
  }

  isPortrait() {
    const ori = screen.orientation;
    return (ori.type === 'portrait-primary' || ori.type === 'portrait-secondary');
  }

  fusion(){
    this.router.navigateByUrl('/fusion-list/' + this.persona.name);
  }

}
