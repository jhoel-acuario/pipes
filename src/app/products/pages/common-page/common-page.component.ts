import { Component, OnInit } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-common-page',
  templateUrl: './common-page.component.html',
  styleUrls: ['./common-page.component.css'],
})
export class CommonPageComponent {
  //i18n Select
  public name: string = 'Jhoel';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };
  changeClient(): void {
    this.name = 'nat';
    this.gender = 'female';
  }
  //i18n Plural

  public clients : string[]=['Maria', 'Pedro', 'juan','Eduardo', 'Carol'];
  public clientMap={
    '=0':'No tenemos ningun cliente esperando',
    '=1':'Tenemos un cliente esperando',
    'other':' tenemos # clientes esperando'
  }

  deleteClient(){
    this.clients.shift()
  }
  //JSON PIPE
  public person={
    name: 'Jhoel',
    age:23,
    adress:'hyo-junin'
  }

  //Async pipe
  public myObservableTimer:Observable<number> = interval(2000).pipe(
    tap(value=>console.log('tap', value))
  )


  public promiseValue: Promise<string> = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data en la promesa')
      console.log('Tenemos data en la promesa')
    }, 3500)
  })
}
