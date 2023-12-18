import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap } from '@angular/router';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customorder',
  templateUrl: './customorder.component.html',
  styleUrls: ['./customorder.component.css']
})
export class CustomorderComponent implements OnInit {
	CustIdOrder:any;
	customerOrders:any;
	orders:any;
  constructor( private router: ActivatedRoute , private service: MyServiceService , private router1:Router ) { }

  ngOnInit(): void {

  	this.CustIdOrder=console.log( this.router.snapshot.params ,'18::id')  	
  	let customOrder = this.service.customData.filter(val => {
  		return val.id.toString() === this.router.snapshot.params.id2;
  	})
  	console.log(customOrder, 'customOrder===');
  	this.customerOrders = customOrder;
  	this.orders=console.log(this.customerOrders[0].orders)
  }

}
