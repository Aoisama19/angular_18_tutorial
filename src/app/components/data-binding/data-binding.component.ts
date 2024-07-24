import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
courseName: string="Angular 18";
inputType="radio";
rollNo: number=123;
isIndian:boolean=true;
currentDate: Date= new Date();
stateName:string="Islamabad";
constructor(){

}
changeCourseName(){
  this.courseName="Reactjs";
}
showAlert(message:string){
  alert(message)
}



}
