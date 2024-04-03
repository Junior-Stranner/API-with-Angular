import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjetoAngularComponent } from "./projeto-angular/projeto-angular.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ProjetoAngularComponent]
})
export class AppComponent {
  title = 'Projeto-Angular';
}
