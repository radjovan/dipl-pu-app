import { Component } from '@angular/core';
import { UserService } from './services/user-service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Programirano ucenje';

  constructor(private userService: UserService) {}

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }
}
