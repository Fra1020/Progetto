import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-panini',
  templateUrl: './panini.component.html',
  styleUrls: ['./panini.component.scss']
})
export class PaniniComponent implements OnInit {

  constructor(private userService: UserService, private http:HttpClient) { }

  title:string = 'panino'
  panini:any = []

  ngOnInit(): void {
    this.getPanino()
  }

  getPanino(){
    this.userService.getpanini(this.title).subscribe(res => {
      this.panini = res
    })
  }
}
