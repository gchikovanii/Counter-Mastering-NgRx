import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CounterControlsComponent } from "./counter-controls/counter-controls.component";
import { Store } from '@ngrx/store';
import { init } from './store/counter.actions';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CounterOutputComponent, CounterControlsComponent]
})
export class AppComponent implements OnInit{
  constructor(private store: Store){}
  ngOnInit(): void {
    this.store.dispatch(init());
  }
  title = 'counter-mastering-NgRx';
}
