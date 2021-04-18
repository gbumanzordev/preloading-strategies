import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() user: IUser;

  getCity(): string {
    const { city, street, zipcode } = this.user.address;
    return `${city}, ${street}, ${zipcode}`;
  }
}
