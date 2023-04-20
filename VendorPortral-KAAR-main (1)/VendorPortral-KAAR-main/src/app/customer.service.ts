import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private registerUrl="http://localhost:3000/Login"
  private salesUrl="http://localhost:3000/RFQ"
  private inquiryUrl="http://localhost:3000/purchaseOrder"
  private deliveryUrl="http://localhost:3000/goodsList"
  private invoiceUrl="http://localhost:3000/vendorInvoice"
  private memoUrl="http://localhost:3000/vendorMemo"
  private paymentUrl="http://localhost:3000/vendorPayments"
  private profileUrl="http://localhost:3000/EmpProfile"

  constructor(private http:HttpClient) { }

  loginUser(user:any){
    return this.http.post<any>(this.registerUrl,user)
  }

  getSalesData(data:any){
    return this.http.post<any>(this.salesUrl,data)
  }

  getInquiryData(data:any){
    return this.http.post<any>(this.inquiryUrl,data)
  }

  getDeliveryData(data:any){
    return this.http.post<any>(this.deliveryUrl,data)
  }

  getInvoiceData(data:any){
    return this.http.post<any>(this.invoiceUrl,data)
  }

  getMemoData(data:any){
    return this.http.post<any>(this.memoUrl,data)
  }

  getPaymentsData(data:any){
    return this.http.post<any>(this.paymentUrl,data)
  }
  getProfileData(data:any){
    return this.http.post<any>(this.profileUrl,data)
  }
}