import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjetoAngularComponent } from "./projeto-angular/projeto-angular.component";
import { ProjetoAngularProdutosComponent } from "./projeto-angular-produtos/projeto-angular-produtos.component";
import { Componente15Component } from "./componente15/componente15.component";
import { Componente16Component } from "./componente16-ROTAS/componente16.component";
import { Componente17Component } from "./componente17/componente17.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ProjetoAngularComponent, ProjetoAngularProdutosComponent, Componente15Component, Componente16Component, Componente17Component]
})
export class AppComponent {
  title = 'Projeto-Angular';
}
