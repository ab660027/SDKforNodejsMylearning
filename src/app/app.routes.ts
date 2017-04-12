import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';

import { TopComponent }from './view/top/top.component'

const appRoutes: Routes = [
  { path: '', component: TopComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);