import { CanActivateFn, Router } from '@angular/router';

export const rotaGuard: CanActivateFn = (route, state) => {

  //Consnstante
  const rota = new Router;

  //Redirecionamento
  if(localStorage.getItem('nome') === 'Junior'){
    return true;
  }else{
    rota.navigateByUrl('/pagina1');
    return false;
  }
};
