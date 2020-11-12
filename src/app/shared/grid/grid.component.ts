import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

 public data: Object[]=[

 { a:1,
  b:'aaa',
  c:'fdsfsd'
},{ a:1,
  b:'aaa',
  c:'fdsfsd'
},{ a:1,
  b:'aaa',
  c:'fdsfsd'
},{ a:1,
  b:'aaa',
  c:'fdsfsd'
},{ a:1,
  b:'aaa',
  c:'fdsfsd'
},{ a:1,
  b:'aaa',
  c:'fdsfsd'
},{ a:1,
  b:'aaa',
  c:'fdsfsd'
},{ a:1,
  b:'aaa',
  c:'fdsfsd'
},{ a:1,
  b:'aaa',
  c:'fdsfsd'
},{ a:1,
  b:'aaa',
  c:'fdsfsd'
},{ a:1,
  b:'aaa',
  c:'fdsfsd'
},{ a:1,
  b:'aaa',
  c:'fdsfsd'
},{ a:1,
  b:'aaa',
  c:'fdsfsd'
},{ a:1,
  b:'aaa',
  c:'fdsfsd'
},
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
