import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = 'bbboy lyan';
  public age:number = 18;

  constructor() {}

  get capitalizeName ():string {

    return this.name.toUpperCase();

  }

  public getHeroDescription (): string {

    return `${ this.capitalizeName } - ${ this.age }`;

  }

  changeHero (): void {
    this.name = 'Spiderman';
  }

  changeAge () : void {
    this.age = 20;
  }

  resetHero (): void {
    this.name = 'bboy lyan';
    this.age = 18;
  }

}
