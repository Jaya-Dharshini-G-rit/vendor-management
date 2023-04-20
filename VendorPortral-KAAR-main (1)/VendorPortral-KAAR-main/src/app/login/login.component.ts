import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { NgxSpinnerService } from "ngx-spinner";
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastComponent } from '../modals/toast/toast.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: CustomerService, private router: Router,private SpinnerService: NgxSpinnerService,private _snackBar: MatSnackBar) { }

  loginData = {
    email: '',
    password: ''
  }
  ngOnInit(): void {

  }
  Login() {
    this.SpinnerService.show();
    this.auth.loginUser(this.loginData).subscribe((res) => {
     
      console.log(res)
      if (res.RESULT == '') {

        console.log(res)
        this.SpinnerService.hide();
       this.openSnackBar(res.MESSAGE)
      } else {
        localStorage.setItem('Auth', 'true');
        localStorage.setItem('UserData', res.MESSAGE);
        this.SpinnerService.hide();
        this.openSnackBar("Logged in Successfuly....!!!")
        localStorage.setItem('UserData', JSON.stringify(res.RESULT.item));
        window.location.reload();
        this.router.navigate(['/Dashboard'])
      }
    })
    console.log(this.loginData)
  }


  openSnackBar(data:any) {
    this._snackBar.openFromComponent(ToastComponent, {
      duration: 3 * 1000,
      panelClass: ['blue-snackbar'],
      data:{value:data}
    });
    // this._snackBar.open("LDfdf")
  }

}
