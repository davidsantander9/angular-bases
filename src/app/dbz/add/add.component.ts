import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {

  @Input() character: Character = {
    name: '',
    power: 0
  };

  @Input() characters: Character[] = [];

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
