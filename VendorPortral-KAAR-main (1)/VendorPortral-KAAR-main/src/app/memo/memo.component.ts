import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { CustomerService } from '../customer.service';
import jspdf from 'jspdf';
import 'jspdf-autotable';
import { jsPDF } from "jspdf";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})
export class MemoComponent implements OnInit {

  constructor(private service: CustomerService,private router:Router,private SpinnerService: NgxSpinnerService) { }

  docNo:any=""
 
  creditData:any
  debitData:any
  inquiryId= {
    "id": "MOHANRAJ"
  }
  ngOnInit(): void {
    this.inquiry()
  }
  inquiry() {
    this.SpinnerService.show();
    this.service.getMemoData(this.inquiryId).subscribe((res) => {
      this.creditData=res.CREDIT.item;
      this.debitData=res.DEBIT.item
      this.SpinnerService.hide();
      
    })
    
  }

 

}
