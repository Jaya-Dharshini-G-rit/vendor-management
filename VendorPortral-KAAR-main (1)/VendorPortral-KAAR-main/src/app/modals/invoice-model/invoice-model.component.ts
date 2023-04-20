import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-invoice-model',
  templateUrl: './invoice-model.component.html',
  styleUrls: ['./invoice-model.component.scss']
})
export class InvoiceModelComponent implements OnInit {

  delivery:any
  
  constructor(
    public dialogRef: MatDialogRef<InvoiceModelComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.delivery = data.pageValue;
  }

  ngOnInit(): void {
  }
  closeDialog() {
    this.dialogRef.close({ event: 'close' });
  }
}
