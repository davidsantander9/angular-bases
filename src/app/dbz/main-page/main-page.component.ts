import { Component } from '@angular/core';

interface Character{
  name: string;
  power: number;
}

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
    name: '',
    power: 0
  }

  add( ){
    
    if( this.character.name.trim().length === 0 ){
      return
    }

    this.characters.push(this.character)

    this.character = {
      name: '',
      power: 0
    }

  }


}
