
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { CustomerService } from '../customer.service';
import jspdf from 'jspdf';
import 'jspdf-autotable';
import { jsPDF } from "jspdf";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
import { SalesModelComponent } from '../modals/sales-model/sales-model.component';
import { MatDialog } from '@angular/material/dialog';
import { InquiryModelComponent } from '../modals/inquiry-model/inquiry-model.component';
@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  constructor(public dialog: MatDialog,private service: CustomerService,private router:Router,private SpinnerService: NgxSpinnerService) { }
  docNo:any=""
 
  purchaseData:any
 purchaseId= {
    "id": "MOHANRAJ"
  }
  ngOnInit(): void {
    this.inquiry()
  }
  inquiry() {
    this.SpinnerService.show();
    this.service.getInquiryData(this.purchaseId).subscribe((res) => {
      this.purchaseData=res.item
      this.SpinnerService.hide();
      
    })
    
  }

  

  openDialog(data:any): void {
    const dialogRef = this.dialog.open(InquiryModelComponent, {
     
      data: { pageValue: data }
    });

   
  }


}
