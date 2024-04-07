import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Componente01Component } from "./componente01/componente01.component";
import { Componente02Component } from "./componente02-Event-Binding/componente02.component";
import { Componente03Component } from "./componente03-Property-Binding-imagem/componente03.component";
import { Componente04Component } from "./componente04-Diretiva-ngIf/componente04.component";
import { Componente05Component } from "./componente05/componente05.component";
import { Componente06Component } from "./componente06-Diretiva-ngSwitch/componente06.component";
import { Componente07Component } from "./componente07-Diretiva-ngStyle-ngClass/componente07.component";
import { Componente08Component } from "./componente08-Control-Flow-Condicional-For-switch/componente08.component";
import { Componente09Component } from "./componente09-FormsModule/componente09.component";
import { Componente10Component } from "./componente10-Reactive-Forms/componente10.component";
import { Componente12Component } from "./componente12-Pipes/componente12.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, Componente01Component, Componente02Component, Componente03Component, Componente04Component, Componente05Component, Componente06Component, Componente07Component, Componente08Component, Componente09Component, Componente10Component, Componente12Component]
})
export class AppComponent {
  title = 'angular-basico';
}
