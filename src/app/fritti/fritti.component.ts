import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-fritti',
  templateUrl: './fritti.component.html',
  styleUrls: ['./fritti.component.scss']
})
export class FrittiComponent implements OnInit {

  constructor(private userService: UserService, private http:HttpClient) { }

  title:string = 'fritti'
  fritti:any = []

  ngOnInit(): void {
    this.getPanino()
  }
  getPanino(){
    this.userService.getpanini(this.title).subscribe(res => {
      this.fritti = res
    })
  }
}
