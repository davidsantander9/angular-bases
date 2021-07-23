import { Injectable } from "@angular/core";
import { Character } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {
    constructor() {
        console.log('Init service');
    }

    characters: Character [] = [
        { 
          name: 'Goku',
          power: 1500001,
        },{
          name: 'Vegeta',
          power: 1500000
        }
    ]
}