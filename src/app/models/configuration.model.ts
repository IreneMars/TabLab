export interface Configuration {
  id: string;
  title: string;
  creationMoment: Date;
  errorCode: string;
  extraParams: Map<string, string>;
  datafile: string;
}
