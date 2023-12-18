import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap } from '@angular/router';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editcust',
  templateUrl: './editcust.component.html',
  styleUrls: ['./editcust.component.css']
})
export class EditcustComponent implements OnInit {
	editCustId:any;
	selectData:any;
  constructor( private router: ActivatedRoute , private service: MyServiceService , private router1:Router ) { }

  ngOnInit() {

  	this.editCustId=console.log( this.router.snapshot.params ,'26::id')  	
  	let editPerson = this.service.customData.filter(val => {
  		return val.id.toString() === this.router.snapshot.params.id1;
  	})
  	console.log(editPerson, 'editPerson===');
  	this.selectData = editPerson;
  }

  // editData() {
  	
  // }
}
