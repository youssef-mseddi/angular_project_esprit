import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ListSuggestionComponent } from './suggestion/list-suggestion/list-suggestion.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },// path par defaut redirige vers home
  { path: 'products', component: ProductComponent },
  { path: 'suggestion', component: ListSuggestionComponent },
  { path: '**', component: NotFoundComponent } // wildcard route for 404 pages
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
