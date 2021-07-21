import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    name: string = 'Ironman';
    age: number = 45;

    getName(): string {
        return `${ this.name } - ${ this.age }`
    }

    get upperCaseName(): string{
        return this.name.toUpperCase();
    }

    changeName(name: string):void {
        this.name = name;
    }

    changeAge(age: number):void {
        this.age = age;
    }
}