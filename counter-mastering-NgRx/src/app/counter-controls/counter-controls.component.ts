import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement } from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  standalone: true,
  imports: [],
  templateUrl: './counter-controls.component.html',
  styleUrl: './counter-controls.component.css'
})
export class CounterControlsComponent {
  constructor(private store : Store) {}
  changeValueBy = 1;
  increment() {
    //dispach an action, it is executed when we dispatch
    this.store.dispatch(increment({value: this.changeValueBy}));
  }

  decrement() {
    this.store.dispatch(decrement({value: this.changeValueBy}));
  }
}
