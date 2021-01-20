import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news:any;
  constructor(private _news:NewsService) { }

  ngOnInit(): void {
    this.news = this._news.allNews();
  }

}
