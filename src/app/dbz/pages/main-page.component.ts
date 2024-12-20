import { Character } from '../interfaces/character.interfaces';
import { DbzService } from './../services/dbz.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  standalone: false
})

export class MainPageComponent {

  constructor(private dbzService: DbzService) {

   }

   get getCharacters () : Character[] {
      return [...this.dbzService.characters];
   }

   onDeleteCharacter(id: string): void {

    this.dbzService.onDeleteCharacterById(id);

  }

  onNewCharactaer(newCharacter: Character): void {

    this.dbzService.onNewCharacter(newCharacter);

  }

}
