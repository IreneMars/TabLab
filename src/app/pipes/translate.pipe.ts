import { Pipe, PipeTransform } from "@angular/core";

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
        },
      },
      esp: {
        languange: 'esp',
        values: {
          owner: 'Propietario',
          admin: 'Admin',
          member: 'Miembro',
        },
      },
    }
    
    translate(key: string): string {
      if (this.dictionary[this.language] != null) {
        return this.dictionary[this.language].values[key]
      }
    }

    transform(value: any, args?: any): any {
        return this.translate(value)
    }
}

