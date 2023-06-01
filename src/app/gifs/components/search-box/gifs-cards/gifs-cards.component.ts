import { Component, Input, OnInit } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-cards',
  templateUrl: './gifs-cards.component.html',
})
export class GifsCardsComponent {
  @Input()
  public gif!: Gif;
}
