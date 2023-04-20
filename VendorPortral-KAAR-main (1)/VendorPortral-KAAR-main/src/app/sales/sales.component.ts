
import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CustomerService } from '../customer.service';
import jspdf from 'jspdf';
import 'jspdf-autotable';
import { MatDialog } from '@angular/material/dialog';
import { SalesModelComponent } from '../modals/sales-model/sales-model.component'
import { jsPDF } from "jspdf";


import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor(public dialog: MatDialog, private service: CustomerService, private router: Router, private SpinnerService: NgxSpinnerService) { }

  head = [['ID', 'Country', 'Rank', 'Capital']]


  salesData: any
  salesId = {
    "id": "5"
  }

  docNo:any=""
 
  ngOnInit(): void {
    this.sales()
  }

  percent: any = "Search"

  async onPercentChange(percent: any) {
    this.sales()
    var newArray = await this.salesData.filter(function (el: any) {
      return el.SD_DOC == percent;
    })
    this.salesData = newArray

  }

  sales() {
    this.SpinnerService.show();
    this.service.getSalesData(this.salesId).subscribe((res) => {
      console.log("salesData", res.item)
      this.salesData = res.item
      this.SpinnerService.hide();

    })

  }

  openDialog(data: any): void {
    const dialogRef = this.dialog.open(SalesModelComponent, {

      data: { pageValue: data }
    });


  }




}
