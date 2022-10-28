import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonUtility {
  /**
   * オブジェクトをシャローコピーする
   */
  public ShallowCopy(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }
}
