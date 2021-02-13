import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAlbum'
})
export class FilterPipe implements PipeTransform {

  transform(listado: any[], texto: string = ''): any[] {

    if (texto === '') {
      return listado
    }

    if (!listado) {
      return listado
    }

    texto = texto.toLocaleLowerCase();

    return listado.filter(
      item => item.title.toLowerCase().includes(texto)
    );
  }

}
