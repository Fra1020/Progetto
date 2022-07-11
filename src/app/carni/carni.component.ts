import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-carni',
  templateUrl: './carni.component.html',
  styleUrls: ['./carni.component.scss']
})
export class CarniComponent implements OnInit {
  title:string = 'carne'
  carni:any = []

  constructor(private userService: UserService, private http:HttpClient) { }

  ngOnInit(): void {
    this.getPanino()
  }

  getPanino(){
    this.userService.getpanini(this.title).subscribe((res: any) => {
      this.carni = res
    })
  }
}
