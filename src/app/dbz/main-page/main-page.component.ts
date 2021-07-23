import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  characters: Character[] = []

  constructor( private dbzService: DbzService) {
    this.characters = this.dbzService.characters;
  }

  

  character: Character = {
    name: 'Trunks',
    power: 1500
  }

  addNewCharacter(arg: Character){
    this.characters.push(arg);
  }


}
