import { Component } from '@angular/core';
import { GifsService } from '../../service/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-page-home',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private gifService: GifsService) {}

  get gifs(): Gif[] {
    return this.gifService.gifsList;
  }
}
