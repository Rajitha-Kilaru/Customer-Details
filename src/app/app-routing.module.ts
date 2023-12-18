import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomComponent } from './custom/custom.component';
import { OrdersComponent } from './orders/orders.component';
import { CustInfoComponent } from './cust-info/cust-info.component';
import { EditcustComponent } from './editcust/editcust.component';
import { CustomorderComponent } from './customorder/customorder.component';

const routes: Routes = [
	{ path: '' , redirectTo: 'custom' , pathMatch: 'full' },
	{ path: 'custom' , component: CustomComponent },
	{ path: 'orders' , component: OrdersComponent },
	{ path: 'custInfo/:id' , component: CustInfoComponent},
	{ path: 'editcust/:id1' , component: EditcustComponent },
	{ path: 'custorder/:id2' , component: CustomorderComponent }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
