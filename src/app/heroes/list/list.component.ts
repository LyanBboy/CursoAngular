import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesName: string[] = ['Deepoll', 'Malefica', 'Spiderman'];
  public deletedHero?: string;


  removeLastHero (): void {
    this.deletedHero = this.heroesName.pop();
  }

}
