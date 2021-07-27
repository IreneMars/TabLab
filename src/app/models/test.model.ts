export interface Test {
  id: string;
  title: string;
  reportPath: string;
  esquema: string;
  configurations: string[];
  creationMoment: Date;
  updateMoment: Date;
  executionMoment: Date;
  status: string;
  totalErrors: number;
  executable: boolean;
  datafile: string;
}
