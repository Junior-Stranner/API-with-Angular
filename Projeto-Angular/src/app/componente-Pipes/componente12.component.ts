import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente12',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente12.component.html',
  styleUrl: './componente12.component.css'
})
export class Componente12Component {

  //Texto
  nome:string = 'Junior';

  //objeto
  obj:any = {'nome':'Junior', 'idade':23}
}
