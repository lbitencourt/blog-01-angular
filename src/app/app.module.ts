import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ApresentacaoComponent } from './components/apresentacao/apresentacao.component';
import { LogoComponent } from './components/logo/logo.component';
import { AboutComponent } from './views/about/about.component';
import { DescriptionComponent } from './views/description/description.component';
import { BlogListComponent } from './views/blog-list/blog-list.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogViewComponent } from './views/blog-view/blog-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent,
    ApresentacaoComponent,
    LogoComponent,
    BlogListComponent,
    AboutComponent,
    DescriptionComponent,
    BlogDetailComponent,
    BlogItemComponent,
    BlogViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
