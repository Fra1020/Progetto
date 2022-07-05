import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
  }

  authData = {
    nome: '',
    cognome:'',
    email : '',
    password : ''
  }

  register(){
    this.userservice.registerUser(this.authData)
    .subscribe(data => {
      console.log(data)


    })

  }

}
