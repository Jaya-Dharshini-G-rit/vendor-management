import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from '../customer.service';
import jspdf from 'jspdf';
import 'jspdf-autotable';
import { jsPDF } from "jspdf";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { DeliveryModelComponent } from '../modals/delivery-model/delivery-model.component';
@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {


  constructor(public dialog: MatDialog,private service: CustomerService, private router: Router, private SpinnerService: NgxSpinnerService) { }

  docNo:any=""
 
  inquiryData: any
  goodsId = {
    "id": "MOHANRAJ"
  }
  ngOnInit(): void {
    this.delivery()
  }
  delivery() {
    this.SpinnerService.show();
    this.service.getDeliveryData(this.goodsId).subscribe((res) => {
      this.inquiryData = res.T_GOODSVALUE.item
      this.SpinnerService.hide();

    })

  }



  openDialog(data:any): void {
    const dialogRef = this.dialog.open(DeliveryModelComponent, {
     
      data: { pageValue: data }
    });

   
  }

}
