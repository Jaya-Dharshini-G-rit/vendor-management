import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userId={
    "id":"3"
  }
  userData:any
  userProData:any
  constructor(private service: CustomerService,private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.SpinnerService.show();
    this.getData()
    var res=JSON.parse(localStorage.getItem('UserData'))
    console.log(res)
    this.userData=res
    
  }

  getData(){    this.SpinnerService.show();
    this.service.getProfileData(this.userId).subscribe((res) => {
      console.log(res)
      this.userProData=res;
      this.SpinnerService.hide();
    })

  }

  logout(){
    
      localStorage.removeItem('UserData')
      localStorage.removeItem('Auth')
      window.location.reload();
    
  }

}
