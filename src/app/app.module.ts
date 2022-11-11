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
import { VChildDecoratorComponent } from './learning/vChildDecorator/vChildDecorator.component';
import { VChildDecoratorChildComponent } from './learning/vChildDecorator/vChildDecoratorChild.component';
import { TernaryOperatorComponent } from './learning/ternaryOperator/ternaryOperator.component';
import { LarningComponentComponent } from './learning/larningComponent/larningComponent.component';
import { LarningModelComponent } from './learning/larningModel/larning-model.component';
import { FuncExpressionComponent } from './learning/funcExpression/funcExpression.component';
import { BindingComponent } from './learning/binding/binding.component';
import { DependencyInjectionComponent } from './learning/dependencyInjection/dependencyInjection.component';

const routes: Routes = [
  // 更新
  { path: '', component: TopComponent },
  { path: 'collections', component: CollectionsComponent },
  { path: 'lifecycle', component: LifecycleComponent },
  { path: 'declaration', component: DeclarationComponent },
  { path: 'constructorPage', component: ConstructorPageComponent },
  { path: 'inOutDecorator', component: InOutDecoratorComponent },
  { path: 'vChildDecorator', component: VChildDecoratorComponent },
  { path: 'ternaryOperator', component: TernaryOperatorComponent },
  { path: 'larningComponent', component: LarningComponentComponent },
  { path: 'larningModel', component: LarningModelComponent },
  { path: 'funcExpression', component: FuncExpressionComponent },
  { path: 'dependencyInjection', component: DependencyInjectionComponent },
  { path: 'binding', component: BindingComponent },
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
    VChildDecoratorComponent,
    VChildDecoratorChildComponent,
    TernaryOperatorComponent,
    LarningComponentComponent,
    LarningModelComponent,
    FuncExpressionComponent,
    DependencyInjectionComponent,
    BindingComponent,
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
