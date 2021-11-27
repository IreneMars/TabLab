import { Pipe, PipeTransform } from "@angular/core";
import { sequenceEqual } from "rxjs/operators";

export class TranslationSet {
    public languange: string
    public values: { [key: string]: string } = {}
  }

  @Pipe({
    name: 'translate',
})
export class TranslatePipe implements PipeTransform {
    public languages   : string[] = ['esp', 'eng']
    
    public language    : string = 'esp'
    
    private dictionary : { [key: string]: TranslationSet } = {
      eng: {
        languange: 'eng',
        values: {
          owner: 'Owner',
          admin: 'Admin',
          member: 'Member',
          user: 'User',
          pending: 'Pending',
          failed: 'Failed',
          passed: 'Passed',
          true: 'True',
          false: 'False',
          active: 'Active',
          inactive: 'Inactive',
          seen: 'Seen',
          rejected: 'Rejected',
          accepted: 'Accepted'
        },
      },
      esp: {
        languange: 'esp',
        values: {
          owner: 'Propietario',
          admin: 'Admin',
          member: 'Miembro',
          user: 'Usuario',
          pending: 'Pendiente',
          failed: 'Fallido',
          passed: 'Aprobado',
          true: 'Sí',
          false: 'No',
          active: 'Activa',
          inactive: 'Inactiva',
          seen: 'Vista',
          rejected: 'Rechazada',
          accepted: 'Aceptada'
        },
      },
    }
    
    translate(key: string): string {
      if (this.dictionary[this.language] != null) {
        return this.dictionary[this.language].values[key]
      }
    }

    transform(value: string, args?: any): any {
        value = value.toLowerCase();
        return this.translate(value)
    }
}

