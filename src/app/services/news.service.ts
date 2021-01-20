import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  News = [
      {
        title:'All to play for in wide-open title race',
        status:true,
        type:'t 1',
        content:'Only four points separate seven teams ahead of some mouthwatering top-of-the-table showdowns'
      },
      {
        title:'All to play for in wide-open title race',
        status:true,
        type:'t 1',
        content:'Only four points separate seven teams ahead of some mouthwatering top-of-the-table showdowns'
      }
  ]

  constructor(private _http:HttpClient) { }

  allNews(){
    return this.News;
  }

}
