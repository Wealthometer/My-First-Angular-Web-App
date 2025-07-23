import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  standalone: true, // ✅ Add this
  imports: [],       // You can leave this empty or add other standalone components if needed
  templateUrl: './example.html',
  styleUrls: ['./example.css'] // ✅ Corrected: 'styleUrls' instead of 'styleUrl'
})
export class Example { }
