
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
salesL:any
inquiryL:any
deliveryL:any

  constructor(private service: CustomerService,private router:Router) { }

  ngOnInit(): void {
  
    this.service.getSalesData({"id":"12"}).subscribe((res) => {
      this.salesL= res.item.length
    })
      this.service.getInquiryData({"id":"12"}).subscribe((res) => {
        this.inquiryL=res.item.length
 
      })
      this.service.getDeliveryData({"id":"12"}).subscribe((res) => {
        this.deliveryL = res.item.length
  
  })}
 
  
  sales(){
    this.router.navigate(['/Sales'])
  }

  user(){
    localStorage.removeItem('UserData')
    localStorage.removeItem('Auth')
    window.location.reload();
  }

}
