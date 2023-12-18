import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
	ordersData:any;
  constructor( private service1: MyServiceService) { }

  ngOnInit(): void {
  		this.ordersData = this.service1.customData;
  	this.ordersData.forEach((val)=>{
  		let count =0
  		val.orders &&val.orders.filter((item)=>{
  			count += item.itemCost
  		})
  		val['totalCount'] = count
  	})
  	console.log(this.ordersData);
  }

}
