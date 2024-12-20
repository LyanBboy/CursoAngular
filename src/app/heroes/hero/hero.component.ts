import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = 'Javier Yugcha';
  public age:number = 33;

  constructor() {}

  get capitalizeName ():string {

    return this.name.toUpperCase();

  }

  public getHeroDescription (): string {

    return `${ this.capitalizeName } - ${ this.age }`;

  }

  changeHero (): void {
    this.name = 'Batman';
  }

  changeAge () : void {
    this.age = 20;
  }

  resetHero (): void {
    this.name = 'Javier Yugcha';
    this.age = 33;
  }

}
