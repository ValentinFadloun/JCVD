import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';/*
import { PageHome } from './page_home.component';
import { PageSearch } from './page_search.component';*/

const routes: Routes = [{
  path: '', redirectTo: 'home', pathMatch: 'full'
}/*,{
  path: 'home', component:PageHome
},{
  path: 'search', component:PageSearch
}*/];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
