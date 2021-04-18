import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [UserListComponent, UserCardComponent, UserDetailsComponent],
  imports: [CommonModule, UsersRoutingModule],
  providers: [UsersService],
})
export class UsersModule {}
