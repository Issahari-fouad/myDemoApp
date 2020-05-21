import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { MyDemoAppSharedModule } from 'app/shared/shared.module';
import { MyDemoAppCoreModule } from 'app/core/core.module';
import { MyDemoAppAppRoutingModule } from './app-routing.module';
import { MyDemoAppHomeModule } from './home/home.module';
import { MyDemoAppEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    MyDemoAppSharedModule,
    MyDemoAppCoreModule,
    MyDemoAppHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    MyDemoAppEntityModule,
    MyDemoAppAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class MyDemoAppAppModule {}
