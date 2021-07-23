import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  characters: Character [] = [
    { 
      name: 'Goku',
      power: 1500001,
    },{
      name: 'Vegeta',
      power: 1500000
    }
  ]

  character: Character = {
    name: 'Trunks',
    power: 1500
  }

  addNewCharacter(arg: Character){
    this.characters.push(arg);
  }


}
