import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonUtility {
  /**
   * オブジェクトをシャローコピーする
   */
  public ShallowCopy(ob: any): any {
    return JSON.parse(JSON.stringify(ob));
  }
}
