import { BlogViewComponent } from './views/blog-view/blog-view.component';
import { BlogListComponent } from './views/blog-list/blog-list.component';
import { DescriptionComponent } from './views/description/description.component';
import { AboutComponent } from './views/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'blog', component: BlogListComponent },
  { path: 'blog/:id', component: BlogViewComponent },
  { path: 'about', component: AboutComponent },
  { path: 'description', component: DescriptionComponent },
  { path: '', redirectTo: '/blog', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
