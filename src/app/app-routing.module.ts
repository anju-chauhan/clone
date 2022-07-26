import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
// {
//   path: 'about',
//   component:AboutComponent
// },
// {
//   path: 'contact',
//   component:ContactComponent
// },
// {
//   path: 'Portfolio',
//   component: PortfolioComponent
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
