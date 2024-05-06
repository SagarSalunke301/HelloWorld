import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addition',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './addition.component.html',
  styleUrl: './addition.component.css'
})
export class AdditionComponent {
  no1:number=10;
  no2:number=20;
  msg:any="";

  answer:number=0;
  constructor(private obj:ActivatedRoute){
    //this.msg=this.obj.snapshot.paramMap.get("msg");
    this.msg=this.obj.snapshot.params["msg"];
    console.log("parameter value is :"+this.msg);
  }

  add(){
    this.answer=this.no1+this.no2;
    console.log("answer is "+this.answer)
  }

}
