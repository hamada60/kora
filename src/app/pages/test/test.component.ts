import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  typetodo = ['type1','type2','type3','type4','type5']

  constructor() { }

  ngOnInit(): void {
  }

  gettodo(todo:any){
    console.log('ay haga');
  }

}
