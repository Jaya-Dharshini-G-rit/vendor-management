import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'CustomerPortal';
  authenticated=false
  isSideNavCollapsed = false;
  screenWidth = 0;
data:any;
  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.data=localStorage.getItem('Auth');
   
    if(this.data){
      this.authenticated=true;
      this.router.navigate(['/Dashboard'])
    }else{
      this.authenticated=false;
      this.router.navigate(['/Login'])
    }
    console.log(JSON.stringify(localStorage.getItem('UserData')))
  }

}
