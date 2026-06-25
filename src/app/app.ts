import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoadingSpinnerComponent} from './shared/components/loading-spinner/loading-spinner.component';  
import { Header } from './shared/components/header/header';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoadingSpinnerComponent,Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
 loading = signal(false);



  protected readonly title = signal('courses-academy');
}
