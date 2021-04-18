import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../interfaces/user.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users$: Observable<IUser[]>;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users$ = this.usersService.getUsers();
  }
}
