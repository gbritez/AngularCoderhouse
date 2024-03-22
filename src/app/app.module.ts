import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PageLayoutComponent,
    ToolbarComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
