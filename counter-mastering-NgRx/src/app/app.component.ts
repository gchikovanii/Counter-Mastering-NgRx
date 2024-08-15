import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CounterControlsComponent } from "./counter-controls/counter-controls.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CounterOutputComponent, CounterControlsComponent]
})
export class AppComponent {
  title = 'counter-mastering-NgRx';
}
