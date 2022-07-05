import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-birra',
  templateUrl: './birra.component.html',
  styleUrls: ['./birra.component.scss']
})
export class BirraComponent implements OnInit {

  constructor(private userService: UserService, private http:HttpClient) { }

  title:string = 'birra'
  birre:any = []

  ngOnInit(): void {
    this.getPanino()
  }

  getPanino(){
    this.userService.getpanini(this.title).subscribe(res => {
      this.birre = res
    })
  }
}
