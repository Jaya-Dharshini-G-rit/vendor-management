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
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {


  constructor(public dialog: MatDialog,private service: CustomerService, private router: Router, private SpinnerService: NgxSpinnerService) { }

  docNo:any=""
 
  inquiryData: any
  paymentId = {
    "id": "MOHANRAJ"
  }
  ngOnInit(): void {
    this.delivery()
  }
  delivery() {
    this.SpinnerService.show();
    this.service.getPaymentsData(this.paymentId).subscribe((res) => {
      this.inquiryData = res.item
      this.SpinnerService.hide();

    })

  }



  openDialog(data:any): void {
    const dialogRef = this.dialog.open(DeliveryModelComponent, {
     
      data: { pageValue: data }
    });

   
  }

}
