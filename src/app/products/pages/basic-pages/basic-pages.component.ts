import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-pages',
  templateUrl: './basic-pages.component.html',
  styleUrls: ['./basic-pages.component.css']
})
export class BasicPagesComponent implements OnInit {
  nameLower: string='jhoel'
  nameUpper: string='JHOEL'
  fullName: string ='JHoel silVestre';
  customDate: Date = new  Date()


  constructor() { }

  ngOnInit(): void {
  }

}
