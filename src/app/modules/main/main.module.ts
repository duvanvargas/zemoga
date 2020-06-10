import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HeaderComponent } from './../../core/global/components/header/header.component';
import { HeaderCardComponent } from './../../core/global/components/header-card/header-card.component';
import { MessageComponent } from './../../core/global/components/message/message.component';
import { RulingsComponent } from './components/rulings/rulings.component';
@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    HeaderCardComponent,
    MessageComponent,
    RulingsComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
