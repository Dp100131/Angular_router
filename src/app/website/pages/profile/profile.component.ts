import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  user: User | null = null;

  constructor(
    private auth: AuthService
  ){}

  ngOnInit(): void {
      this.auth.user$.subscribe(data =>{
        this.user = data;
      })
  }

}
