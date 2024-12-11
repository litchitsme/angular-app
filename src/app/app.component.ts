import { Component } from '@angular/core'; // Class component. Zit alle component logica in
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({ // Decorator. Geeft extra data mee aan class.
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
  name = "Karel";
  xmas = false;
  operatingSystems = [
    { id: 1, name: 'Windows' },
    { id: 2, name: 'Linux' },
    { id: 3, name: 'Mac' }]
}
