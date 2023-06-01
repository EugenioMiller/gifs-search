import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/search-box/card-list/card-list.component';
import { GifsCardsComponent } from './components/search-box/gifs-cards/gifs-cards.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    SearchBoxComponent,
    CardListComponent,
    CardListComponent,
    GifsCardsComponent,
    GifsCardsComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
