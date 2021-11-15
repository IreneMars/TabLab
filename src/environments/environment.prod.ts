import { DeviatedValueParams, FricError } from "src/app/models/fricError.model";

const average = [
  'mean',
  'median',
  'mode'
];

export const environment = {
  production: true,
  apiUrl: 'http://localhost:3000/api',
  SOCKET_ENDPOINT: 'http://localhost:3000',
  errors: [
    new FricError('duplicate-row', null),
    new FricError('deviated-value', new DeviatedValueParams('', average, 0))
  ]
};
