import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage  {

  private btNome:string="ativar";

  btClicou(){
    this.btNome+=" 1";
  }

}


