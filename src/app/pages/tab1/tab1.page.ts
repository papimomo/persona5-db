import { Component } from '@angular/core';
import { PersonaDb } from '../../data/personaDb';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  personalist: Array<any>;
  searchMode = false;
  searchInput = '';
  showSearchCancelButton = true;
  personalistAll: Array<any>;

  constructor(private router: Router) {
    const persona = new PersonaDb();
    // this.personalist = persona.persona.sort((one, two) => one.name > two.name ? 1 : -1);
    this.personalistAll = persona.persona.sort((one, two) => one.level > two.level ? 1 : -1);
    this.personalist = JSON.parse(JSON.stringify(this.personalistAll));

  }

  onItemClick(persona) {
    console.log("click " + persona.name);

    this.router.navigateByUrl('/persona-info/' + persona.name);
  }

  onInput(input) {
    console.log(input);
    
    if (input.detail === null || input.detail.target.value === '') {
      this.personalist = this.personalistAll;
      return;
    }
    console.log(input.detail.target.value);
    const searchInput = input.detail.target.value;
    this.personalist = this.personalistAll.filter(persona => persona.name.indexOf(searchInput) > -1);

  }
  onCancel(input) {
    console.log('cancel');

  }
}
