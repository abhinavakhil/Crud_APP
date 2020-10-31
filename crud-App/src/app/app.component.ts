import { Component, OnInit } from '@angular/core';
import { CrudService } from './shared/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user = {
    name:'',
    email:'',
    phone:''
  }
  currentUsers:any[] = [];

  constructor(private crudService:CrudService){}

  ngOnInit(){
    this.getAllUsers();
  }

  createUser(){
   const userData = {
     Name:this.user.name,
     email:this.user.email,
     phone:this.user.phone
   }

   this.crudService.create(userData).subscribe(res=>{
     this.currentUsers.push(res);
   },error=>{
     console.log(error);
   })

   // reset the form
   this.user = {
    name:'',
    email:'',
    phone:''
  }

 }

  getAllUsers(){
    this.crudService.getAll().subscribe(res=>{
      this.currentUsers = res;
    },error=>{
      console.log(error);
    })
  }

  updateUser(userId,userData){
    console.log(userData);
    this.crudService.update(userId,userData).subscribe(res=>{
      console.log('User updated Successfully!');
    },error=>{
      console.log('An Error occurred',error);
    })
  }

  deleteUser(userID){
    //this.currentUsers.slice(this.currentUsers[userID],1);
    this.currentUsers = this.currentUsers.filter(user => {
      return user.id !== userID;
    })

    this.crudService.delete(userID).subscribe(res=>{
      console.log("user deleted successfully!",res);
    },error=>{
      console.log("An Error Occurred",error);
    })
  }


}
