import { Injectable } from "@angular/core";
import { Character } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
    constructor() {}

    private _characters: Character [] = [
        { 
          name: 'Goku',
          power: 1500001,
        },{
          name: 'Vegeta',
          power: 1500000
        }
    ]

    get characters(): Character[]{
        return [...this._characters];
    }

    addCharacter( arg: Character){
        this._characters.push(arg);
    }

}