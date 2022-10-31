import { Component } from '@angular/core';

@Component({
  selector: '',
  templateUrl: './funcExpression.component.html',
  styles: [],
})
export class FuncExpressionComponent {
  public example: string;

  ngOnInit() {
    this.exampleFunc();
  }

  /**
   * 無名関数にてexampleに文字列をセット
   */
  private exampleFunc(): void {
    const str = () => {
      return 'example';
    };
    console.log(str());
    this.example = str();
  }
}
