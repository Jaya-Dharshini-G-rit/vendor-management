import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { CustomerService } from '../customer.service';
import jspdf from 'jspdf';
import 'jspdf-autotable';
import { jsPDF } from "jspdf";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceModelComponent } from '../modals/invoice-model/invoice-model.component';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(public dialog: MatDialog,private service: CustomerService,private router:Router,private SpinnerService: NgxSpinnerService) { }

  head = [['Document Number', 'Fiscal Year', 'Gross Amount', 'Reference Documnet','Invoice Status','Currency','Invoice Party','Date']]
  docNo:any=""
 
  data:any = []
  inquiryData:any
  inquiryId= {
    "id": "MOHANRAJ"
  }
  ngOnInit(): void {
    this.inquiry()
   
  }
  inquiry() {
    this.SpinnerService.show();
    this.service.getInvoiceData(this.inquiryId).subscribe((res) => {
      this.inquiryData=res.item
      for(var i=0;i<this.inquiryData.length;i++){
        this.data.push([this.inquiryData[i].INV_DOC_NO,this.inquiryData[i].FISC_YEAR,this.inquiryData[i].GROSS_AMNT,this.inquiryData[i].REF_DOC_NO,this.inquiryData[i].INVOICE_STATUS,this.inquiryData[i].CURRENCY,this.inquiryData[i].DIFF_INV,this.inquiryData[i].DOC_DATE])
      }
      console.log(this.data)
      this.SpinnerService.hide();
      
    })      
  }

  createPdf() {
    var doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Invoice', 11, 8);
    doc.setFontSize(11);
    doc.setTextColor(100);
    (doc as any).autoTable({
      head: this.head,
      body: this.data,
      theme: 'plain',
      didDrawCell:( data:any) => {
        console.log(data)
      }
    })
    doc.save("Invoice")
  }

  openDialog(data:any): void {
    const dialogRef = this.dialog.open(InvoiceModelComponent, {
     
      data: { pageValue: data }
    });

   
  }

}
