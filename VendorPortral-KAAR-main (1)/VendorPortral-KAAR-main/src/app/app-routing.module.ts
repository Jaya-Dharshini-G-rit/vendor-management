import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { HomeComponent } from './home/home.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { LoginComponent } from './login/login.component';
import { MemoComponent } from './memo/memo.component';
import { PaymentsComponent } from './payments/payments.component';
import { ProfileComponent } from './profile/profile.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [{
  path: '', redirectTo: 'login', pathMatch: 'full'}, 
{ path: 'Login', component: LoginComponent },
{ path: 'Dashboard', component: HomeComponent },
{ path: 'Profile', component: ProfileComponent },
{ path: 'Sales', component: SalesComponent },
{ path: 'Inquiry', component: InquiryComponent }, 
{ path: 'Delivery', component: DeliveryComponent }, 
{ path: 'Invoice', component: InvoiceComponent },
{ path: 'Memo', component: MemoComponent },
{ path: 'Payments', component: PaymentsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
