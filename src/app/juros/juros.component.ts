import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros',
  templateUrl: './juros.component.html',
  styleUrls: ['./juros.component.css'],
})
export class JurosComponent implements OnInit {
  vp: number;
  j: number;
  n: number;

  constructor() {
    this.vp = 100;
    this.j = 2.5;
    this.n = 3;
  }

  ngOnInit() {}

  getJuros() {

    const body = document.body,
    tbl = document.createElement('table');

    for (let i = 1; i <= 2; i++) {
      const tr = tbl.insertRow();
      for (let k = 1; k <= 1; k++) {
        const td = tr.insertCell();
        td.appendChild(document.createTextNode(`Cell I${i}/J${k}`));
      }  
    }
    body.appendChild(tbl);
  }
}
