import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HeaderComponent } from './../../core/global/components/header/header.component';
import { HeaderCardComponent } from './../../core/global/components/header-card/header-card.component';
import { MessageComponent } from './../../core/global/components/message/message.component';
import { RulingsComponent } from './components/rulings/rulings.component';
import { CardComponent } from './components/card/card.component';
import { SubmitComponent } from './components/submit/submit.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    HeaderCardComponent,
    MessageComponent,
    RulingsComponent,
    CardComponent,
    SubmitComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
