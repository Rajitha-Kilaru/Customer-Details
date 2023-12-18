import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomComponent } from './custom/custom.component';
import { MyServiceService } from './my-service.service';
import { OrdersComponent } from './orders/orders.component';
import { CustInfoComponent } from './cust-info/cust-info.component';
import { EditcustComponent } from './editcust/editcust.component';
import { CustomorderComponent } from './customorder/customorder.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomComponent,
    OrdersComponent,
    CustInfoComponent,
    EditcustComponent,
    CustomorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
