import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selecDoubletCount, selectCount } from '../store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent {
  counter$: Observable<number>;
  doubleCount$: Observable<number>;

  constructor(store: Store<{counter:number}>){
    // this.counter$ = store.select('counter');
    this.counter$ = store.select(selectCount);
    this.doubleCount$ = store.select(selecDoubletCount);
  }

}
