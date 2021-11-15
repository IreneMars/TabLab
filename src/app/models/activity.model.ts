export interface Activity {
    id: string;
    message: string;
    workspace: Map<string, string>;
    author: Map<string, string>;
    coleccion: Map<string, string>;
    datafile: Map<string, string>;
    creationMoment: string;
  }
  