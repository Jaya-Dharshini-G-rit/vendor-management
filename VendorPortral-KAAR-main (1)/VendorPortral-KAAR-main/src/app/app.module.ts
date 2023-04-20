import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {MatTableModule} from '@angular/material/table';
import { AppComponent } from './app.component';
import {MatTabsModule} from '@angular/material/tabs';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import { LoginComponent } from './login/login.component';
import { BodyComponent } from './body/body.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxSpinnerModule } from "ngx-spinner";  
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { SalesComponent } from './sales/sales.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { InvoiceComponent } from './invoice/invoice.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MemoComponent } from './memo/memo.component';
import { PaymentsComponent } from './payments/payments.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SalesModelComponent } from './modals/sales-model/sales-model.component';
import { InquiryModelComponent } from './modals/inquiry-model/inquiry-model.component';
import { DeliveryModelComponent } from './modals/delivery-model/delivery-model.component';
import { InvoiceModelComponent } from './modals/invoice-model/invoice-model.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ToastComponent } from './modals/toast/toast.component';
import { SearchFilterPipe } from './search-filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BodyComponent,
    DashboardComponent,
    HomeComponent,
    SidenavComponent,
    ProfileComponent,
    SalesComponent,
    InquiryComponent,
    DeliveryComponent,
    InvoiceComponent,
    MemoComponent,
    PaymentsComponent,
    SalesModelComponent,
    InquiryModelComponent,
    DeliveryModelComponent,
    InvoiceModelComponent,
    ToastComponent,
    SearchFilterPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    NgxSpinnerModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    NgbModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
