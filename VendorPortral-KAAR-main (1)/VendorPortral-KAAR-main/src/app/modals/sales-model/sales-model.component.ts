import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sales-model',
  templateUrl: './sales-model.component.html',
  styleUrls: ['./sales-model.component.scss']
})
export class SalesModelComponent implements OnInit {

  sales:any
  
  constructor(
    public dialogRef: MatDialogRef<SalesModelComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.sales = data.pageValue;
  }

  ngOnInit(): void {
  }
  closeDialog() {
    this.dialogRef.close({ event: 'close' });
  }
}
