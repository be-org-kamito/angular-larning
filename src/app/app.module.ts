import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopComponent } from './top.component';
import { CollectionsComponent } from './learning/collections/collections.component';
import { LifecycleComponent } from './learning/lifecycle/lifecycle.component';
import { DeclarationComponent } from './learning/declaration/declaration.component';
import { ConstructorPageComponent } from './learning/constructorPage/constructorPage.component';
import { InOutDecoratorComponent } from './learning/inOutDecorator/inOutDecorator.component';
import { InOutDecoratorChildComponent } from './learning/inOutDecorator/inOutDecoratorChild.component';

const routes: Routes = [
  // 更新
  { path: '', component: TopComponent },
  { path: 'collections', component: CollectionsComponent },
  { path: 'lifecycle', component: LifecycleComponent },
  { path: 'declaration', component: DeclarationComponent },
  { path: 'constructorPage', component: ConstructorPageComponent },
  { path: 'inOutDecorator', component: InOutDecoratorComponent },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    TopComponent,
    LifecycleComponent,
    CollectionsComponent,
    DeclarationComponent,
    ConstructorPageComponent,
    InOutDecoratorComponent,
    InOutDecoratorChildComponent,
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
