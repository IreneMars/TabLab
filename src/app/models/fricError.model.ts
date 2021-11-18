export interface FricError {
  id: string;
  errorCode: string;
  extraParams: object;
}

// export class FricError {
//   errorCode: string;
//   extraParams: object;
//   constructor(errorCode: string, extraParams: object){
//     this.errorCode = errorCode;
//     this.extraParams = extraParams;
//   }
// }

// export class DeviatedValueParams {
//   fieldName: string;
//   average: string[];
//   interval: number;
//   hints: object;
//   constructor(fieldName: string, average: string[], interval: number){
//     this.fieldName = fieldName;
//     this.average = average;
//     this.interval = interval;
//     this.hints = {'fieldName': 'Debe ingresar el nombre de uno de los campos del contenido del fichero.',
//                   'average': '',
//                   'interval': 'Este parámetro es numérico y superior o igual a 0.'};
//   }
//   invalid(paramName: any, value: any){
//     if (paramName === 'interval' && value < 0) {
//       return true;
//     }
//   }
//   getHint(paramName: string){
//     return this.hints[paramName];
//   }
// }
