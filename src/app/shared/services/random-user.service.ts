import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RandomUser } from '../models/random-user.model';

@Injectable({
  providedIn: 'root',
})
export class RandomUserService {
  private readonly randomUserURl: string = 'https://randomuser.me/api/';

  public constructor(private http: HttpClient) {}

  public getRandomUser(): Observable<RandomUser> {
    let result: RandomUser;
    return this.http.get<RandomUser>(this.randomUserURl).pipe(
      // TODO: update this to another type of obj, you know what it is..
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      map((resp: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return resp.results.map((u: any) => {
          return (result = {
            email: u.email,
            firstName: u.name.first,
            gender: u.gender,
            lastName: u.name.first,
            timezone: u.location.timezone.description,
          });
        });
      }),
    );
  }
}

// let result;
// let options;
// result = ruleScriptInputTypes.map(d => {
//   if (isDefined(d.OptionsString)) {
//     options = d.OptionsString.split(',').map((option: string) => {
//       const optionParts = option.split(':');
//       return {
//         name: optionParts[0],
//         value: optionParts[1]
//
//       };
//     });
//   }
//   return {
//     ruleInputType: d.InputType, // sens,dev or variable
//     formLabel: d.Label,
//     inputName: d.Name,
//     description: d.Description,
//     value: d.Value,
//     htmlInputType: d.FormType,
//     ordinal: d.Order,
//     isRequired: d.Required,
//     options: isDefined(options) ? options : undefined,
//     max: isDefined(d.Max) ? d.Max : undefined,
//     min: isDefined(d.Min) ? d.Min : undefined,
//     increment: d.Increment,
//     id: d.Id
//   };
