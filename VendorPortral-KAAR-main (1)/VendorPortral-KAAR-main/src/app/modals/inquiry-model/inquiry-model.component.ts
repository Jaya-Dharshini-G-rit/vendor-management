import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-inquiry-model',
  templateUrl: './inquiry-model.component.html',
  styleUrls: ['./inquiry-model.component.scss']
})
export class InquiryModelComponent implements OnInit {

  purchaseOrder:any

  constructor(
    public dialogRef: MatDialogRef<InquiryModelComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.purchaseOrder = data.pageValue;
  }

  ngOnInit(): void {
  }
  closeDialog() {
    this.dialogRef.close({ event: 'close' });
  }
}