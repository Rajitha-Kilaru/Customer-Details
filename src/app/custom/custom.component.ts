import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
	customerDetails:any;
  constructor( private service: MyServiceService , private router:Router ) { }

  ngOnInit(): void {
  	this.customerDetails = this.service.customData;
  	this.customerDetails.forEach((val)=>{
  		let count =0
  		val.orders &&val.orders.filter((item)=>{
  			count += item.itemCost
  		})
  		val['totalCount'] = count
  	})
  }
  routeFunc(cust){
  	console.log(cust.id ,'28::')
  	this.router.navigate(['/custInfo', JSON.stringify(cust.id)]);
  }

}
