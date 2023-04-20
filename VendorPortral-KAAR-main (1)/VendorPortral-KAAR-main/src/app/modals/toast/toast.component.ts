import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  styles: [
    `
    .example-pizza-party {
      color: white;
   
    }
  `,
  ]
})
export class ToastComponent implements OnInit {

  message:any

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { 
    this.message=data.value
  }

  ngOnInit(): void {
  }

}
