import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  links: any[];

  constructor() {
    this.setLinks();
  }

  private setLinks(): void {
    this.links = [
      { link: '/', label: 'TOP' },
      { link: '/lifecycle', label: 'ライフサイクル' },
      { link: '/collections', label: 'コレクション関数' },
      { link: '/declaration', label: '変数宣言' },
      { link: '/constructorPage', label: 'constructor' },
      { link: '/inOutDecorator', label: '@Input、@Output' },
      { link: '/vChildDecorator', label: '@ViewChild' },
      { link: '/ternaryOperator', label: '三項演算子' },
      { link: '/larningComponent', label: 'コンポーネント' },
      { link: '/funcExpression', label: '無名関数' },
      { link: '/binding', label: 'イベントバインディング' },
      // { link: '/dependencyInjection', label: 'DI（依存性注入）' },
    ];
  }
}
