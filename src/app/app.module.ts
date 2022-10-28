import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopComponent } from './top.component';
import { CollectionsComponent } from './learning/collections/collections.component';
import { LifecycleComponent } from './learning/lifecycle/lifecycle.component';
const routes: Routes = [
  // 更新
  { path: '', component: TopComponent },
  { path: 'collections', component: CollectionsComponent },
  { path: 'lifecycle', component: LifecycleComponent },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    TopComponent,
    LifecycleComponent,
    CollectionsComponent,
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
