import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[]=[];
  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      {
        label:'Pipes de Angular',
        icon:'pi pi-desktop',
        items:[
          {
            label:'Texto y Fechas',
            icon:'pi pi-aling-left',
            routerLink:'/'

          },
          {
            label:'Numeros',
            icon:'pi pi-dollar',
            routerLink:'numbers'
          },
          {
            label:'No comunes',
            icon:'pi pi-globe',
            routerLink:'common'
          }
        ]
      },
      {label: 'Pipes Personalizados', icon: 'pi pi-cog', items:[
        {
          label:' Otro elemento',
          icon:'pi pi-cog',
          routerLink:'custom'
        }
      ]},

  ];
  }

}
