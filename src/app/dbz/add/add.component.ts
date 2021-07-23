import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {

  @Input() character: Character = {
    name: '',
    power: 0
  };

//  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  constructor(private dbzService: DbzService) { }

  add( ){
    
    if( this.character.name.trim().length === 0 ){
      return
    }

    this.dbzService.addCharacter( this.character )

    this.character = {
      name: '',
      power: 0
    }

  }

}
