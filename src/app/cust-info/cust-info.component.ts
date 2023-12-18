import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap } from '@angular/router';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cust-info',
  templateUrl: './cust-info.component.html',
  styleUrls: ['./cust-info.component.css']
})
export class CustInfoComponent implements OnInit {
	selectedPersonrData:any;
	mapped:any;
  constructor( private router: ActivatedRoute , private service2: MyServiceService , private router1:Router ) { }

  ngOnInit(): void {
  	this.mapped=console.log( this.router.snapshot.params ,'15::id')  	
  	let selectedPerson = this.service2.customData.filter(val => {
  		return val.id === JSON.parse(this.router.snapshot.params.id)
  	})
  	console.log(selectedPerson, 'selectedPerson===');
  	this.selectedPersonrData = selectedPerson;
  // this.particularData =JSON.parse(this.router.snapshot.params)
  // console.log(this.particularData ,'19::')
  }
  editRouteFunc(sele) {
  	console.log(sele[0].id);
  	this.router1.navigate(['/editcust', JSON.stringify(sele[0].id)]);
  }
  custOrder(parOrder) {
  	console.log(parOrder[0].id);
  	this.router1.navigate(['/custorder', JSON.stringify(parOrder[0].id)]);
  }
}
