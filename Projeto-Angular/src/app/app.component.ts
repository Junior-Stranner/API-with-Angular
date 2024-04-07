import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjetoAngularComponent } from "./projeto-angular/projeto-angular.component";
import { Componente12Component } from "./componente-Pipes/componente12.component";
import { ProjetoAngularProdutosComponent } from "./projeto-angular-produtos/projeto-angular-produtos.component";
import { Comonente14Component } from "./comonente14/comonente14.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ProjetoAngularComponent, Componente12Component, ProjetoAngularProdutosComponent, Comonente14Component]
})
export class AppComponent {
  title = 'Projeto-Angular';
}
