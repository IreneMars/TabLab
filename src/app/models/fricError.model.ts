// export interface FricError {
//   errorCode: string;
//   extraParams: Map<any, any>;
// }

export class FricError {
  errorCode: string;
  extraParams: object;
  constructor(errorCode: string, extraParams: object){
    this.errorCode = errorCode;
    this.extraParams = extraParams;
  }
}

export class DeviatedValueParams {
  fieldName: string;
  average: string[];
  interval: number;
  hints: object;
  constructor(fieldName: string, average: string[], interval: number){
    this.fieldName = fieldName;
    this.average = average;
    this.interval = interval;
    this.hints = {'fieldName': 'Debe ingresar el nombre de uno de los campos del contenido del fichero.',
                  'average': '',
                  'interval': 'Este parámetro es numérico y superior o igual a 0.'};
  }
  invalid(paramName: any, value: any){
    if (paramName === 'fieldName') {
      return false;
    }else if (paramName === 'average') {
      return false;
    }else if (paramName === 'interval' && value < 0) {
      return true;
    } else {
      return false;
    }
  }
  getHint(paramName: string){
    if (paramName === 'fieldName') {
      return 'Debe ingresar el nombre de uno de los campos del contenido del fichero.';
    }else if (paramName === 'average') {
      return '';
    }else if (paramName === 'interval') {
      return 'Este parámetro es numérico y superior o igual a 0.';
    }else {
      return '';
    }
  }
}
