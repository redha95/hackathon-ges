import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MapComponent } from '../app/map/map.component';
import { AppComponent } from './app.component';
import { MentionslegalesComponent } from './mentionslegales/mentionslegales.component';
import { AproposComponent } from './apropos/apropos.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

  { path:'', component: HomeComponent},
  { path: 'map/:nom', component: MapComponent },
  { path: 'map/search/:id', component: MapComponent },
  { path: 'mentionslegales', component: MentionslegalesComponent},
  { path:'apropos', component: AproposComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})


export class AppRoutingModule { }
