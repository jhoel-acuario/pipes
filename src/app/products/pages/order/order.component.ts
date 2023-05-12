import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  items: MenuItem[] = [];
  isUpperCase: boolean = false;
  orderBy?:keyof Hero
  public heroes:Hero[]=[
    {
      name:'Superman',
      canFly:true,
      color:Color.blue
    },
    {
      name:'Spiderman',
      canFly:true,
      color:Color.blue
    },
    {
      name:'Black Widow',
      canFly:false,
      color:Color.blue
    },
    {
      name:'Thanos',
      canFly:true,
      color:Color.blue
    },
    {
      name:'Thor',
      canFly:false,
      color:Color.green
    },
    {
      name:'Nebula',
      canFly:true,
      color:Color.red
    },

  ]

  constructor() {}

  ngOnInit(): void {

  }
  togleUpperCase():void{
    this.isUpperCase=!this.isUpperCase
  }
  changeOrder(value:keyof Hero){
    this.orderBy= value

  }
}
