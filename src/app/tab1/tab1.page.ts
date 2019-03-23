import { Component } from '@angular/core';
import { PersonaDb } from '../personaDb';
import { NavController } from '@ionic/angular';
import { PersonaInfoPage } from '../persona-info/persona-info.page';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  personalist: Array<any>;
  constructor(private router: Router) {
    const persona = new PersonaDb();
    this.personalist = persona.persona.sort((one, two) => one.name > two.name ? 1 : -1);
  }

  onItemClick(persona) {
    console.log("click " + persona.name);
    
    this.router.navigateByUrl('/persona-info/' + persona.name);
  }
}
