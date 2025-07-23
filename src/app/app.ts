import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Example } from './example/example'; // ✅ Import your component

@Component({
  selector: 'app-root',
  standalone: true, // ✅ (optional but recommended for clarity)
  imports: [RouterOutlet, Example], // ✅ Add it here
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // ✅ 'styleUrls' not 'styleUrl'
})
export class App {
  protected readonly title = signal('my-angular-app');
}