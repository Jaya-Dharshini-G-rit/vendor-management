import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delivery-model',
  templateUrl: './delivery-model.component.html',
  styleUrls: ['./delivery-model.component.scss']
})
export class DeliveryModelComponent implements OnInit {

  delivery:any
  
  constructor(
    public dialogRef: MatDialogRef<DeliveryModelComponent>,
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
