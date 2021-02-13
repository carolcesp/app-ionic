import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter'
})
export class FilterPipe implements PipeTransform {

  transform(listado: any[], texto: string = '', columna: string = 'title'): any[] {
    if (texto === '') {
      return listado
    }
    
    if (!listado) {
      return listado
    }
    
    texto = texto.toLocaleLowerCase();

    return listado.filter(
      item => item[columna].toLowerCase().includes(texto)
    );
  }

}
