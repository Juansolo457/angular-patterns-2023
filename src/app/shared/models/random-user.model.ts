import { TimeZone } from './timezone.enum';

export interface RandomUser {
  email: string;
  firstName: string;
  gender: string;
  lastName: string;
  timezone: TimeZone | string;
}
//
//
// "gender": "female",
//   "name": {
//   "title": "Mrs",
//     "first": "Marlene",
//     "last": "Bitzer"
// },
// "location": {
//   "street": {
//     "number": 4934,
//       "name": "Kirchweg"
//   },
//   "city": "Bad Liebenzell",
//     "state": "Rheinland-Pfalz",
//     "country": "Germany",
//     "postcode": 99347,
//     "coordinates": {
//     "latitude": "-49.4069",
//       "longitude": "121.8508"
//   },
//   "timezone": {
//     "offset": "+7:00",
//       "description": "Bangkok, Hanoi, Jakarta"
//   }
