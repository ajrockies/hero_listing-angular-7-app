import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent} from './shared/pages/home-page/home-page.component';
import { AppConfig } from './configs/app.config';
import { from } from 'rxjs';

const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: AppConfig.routes.error404, component: HomePageComponent},

  // otherwise redirect to 404
  {path: '**', redirectTo: '/' + AppConfig.routes.error404}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
