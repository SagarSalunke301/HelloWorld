import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MathsService } from '../maths.service';

@Component({
  selector: 'app-arrayex',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './arrayex.component.html',
  styleUrl: './arrayex.component.css'
})
export class ArrayexComponent {
  employee1:Employee = new Employee(1,"sagar",10000);
  employee2:Employee = new Employee(2,"Abhi",10000);
  employee3:Employee = new Employee(3,"urmi",10000);

  employees:Employee[]=[this.employee1,this.employee2,this.employee3];
  constructor(private obj:MathsService){

  }
  calculateCube(){
    
  }
}
class Employee{
  eid:number;
  ename:string;
  esalary:number;
  constructor(id:number,name:string,salary:number){
    this.eid=id;
    this.ename=name;
    this.esalary=salary;
  }
  
}
