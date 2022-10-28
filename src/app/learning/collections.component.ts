import { Component, Input } from '@angular/core';
import { DataModel } from './collections.model';

@Component({
  selector: 'collections',
  templateUrl: './collections.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class CollectionsComponent {
  // 元データ
  public data: DataModel[];
  // Map格納用
  public dataMap: DataModel[];

  constructor() {
    this.data = [
      { id: 1, code: 'A001', name: 'データ1', score: 100, dataType: 0 },
      { id: 2, code: 'A002', name: 'データ2', score: 100, dataType: 0 },
      { id: 3, code: 'A003', name: 'データ3', score: 100, dataType: 0 },
      { id: 4, code: 'B001', name: 'データ4', score: 100, dataType: 1 },
      { id: 5, code: 'B002', name: 'データ5', score: 100, dataType: 1 },
      { id: 6, code: 'C001', name: 'データ6', score: 100, dataType: 2 },
      { id: 7, code: 'C002', name: 'データ7', score: 100, dataType: 2 },
      { id: 8, code: 'C003', name: 'データ8', score: 100, dataType: 2 },
      { id: 9, code: 'C004', name: 'データ9', score: 100, dataType: 2 },
      { id: 10, code: 'D001', name: 'データ10', score: 100, dataType: 3 },
    ];
  }

  ngAfterViewInit() {
    this.setDataMap();99
  }

  /** 元データ取得メソッド */
  private getData(): DataModel[] {
    return JSON.parse(JSON.stringify(this.data));
  }

  private setDataMap(): void {
    this.dataMap = this.getData().map((item: DataModel) => {
      const setName: string = '★' + item.name + '★';
      item.name = setName;
      return item;
    });
  }
}
