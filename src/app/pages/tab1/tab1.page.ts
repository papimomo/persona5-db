import { Component, EventEmitter } from '@angular/core';
import { PersonaDb } from '../../data/personaDb';
import { Router } from '@angular/router';
import { arcana } from '../../data/personaDb';
import { Observable, observable } from 'rxjs';

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
  personaArcanaList: Array<any>;
  personaSkillFilter: Array<any> = [];
  inputEvent = new EventEmitter<string>();

  constructor(private router: Router) {
    const persona = new PersonaDb();
    // this.personalist = persona.persona.sort((one, two) => one.name > two.name ? 1 : -1);
    this.personalistAll = persona.persona.sort((one, two) => one.level > two.level ? 1 : -1);
    this.personaInit();
  }
  personaInit(){
    this.personaArcanaList = JSON.parse(JSON.stringify(this.personalistAll));
    this.personalist = this.personaArcanaList;

  }

  onItemClick(persona) {
    console.log("click " + persona.name);

    this.router.navigateByUrl('/persona-info/' + persona.name);

  }

  change(input) {
    console.log(input);

    if (input === null) {
      this.personalist = this.personaArcanaList;
      return;
    }
    console.log(input.target.value);
    this.searchInput = input.target.value;
    this.personalist = this.search(this.personaArcanaList, this.searchInput);
    this.searchSkill();

  }
  onCancel(input) {
    console.log('cancel');
    this.searchInput = '';
    this.searchMode = false;
    this.personaInit();
  }
  search(personalist, str) {
    if (str === '') {
      return personalist;
    }
    return personalist.filter(persona => persona.name.indexOf(str) > -1);
  }

  segmentChanged(event) {
    const value = event.detail.value;

    if (value === 'all') {
      this.personaArcanaList = this.personalistAll;
      this.personalist = this.search(this.personaArcanaList, this.searchInput);
      this.searchSkill();
      return;
    }

    this.personaArcanaList = this.personalistAll.filter(persona => {
      if (arcana[value] !== undefined) {
        return persona.arcana === arcana[value];
      }
    });

    this.personalist = this.search(this.personaArcanaList, this.searchInput);
    this.searchSkill();

  }


  async searchSkill() {
    this.personaSkillFilter.length = 0;
    if ( this.searchMode === false || this.searchInput === '') {
      return;
    }
    this.personaArcanaList.forEach(persona => {

      for (const skill of persona.skill) {
        if (skill.skill.name.indexOf(this.searchInput) > -1) {

          this.personaSkillFilter.push(persona);
          break;
        }
      }
    })
  }

}
