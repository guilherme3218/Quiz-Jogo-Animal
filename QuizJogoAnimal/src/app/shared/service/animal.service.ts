import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import ApiUrl from './constant';
import {Animal} from '../../components/questions/questions.component';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private httpClient: HttpClient) {
  }

  getAnimals(): Observable<any> {
    return this.httpClient.get(ApiUrl.GET_ANIMALS);
  }

  saveCondition(conditionText: string): Observable<any> {
    const newCondition = {
      id: null,
      condition: conditionText
    };
    return this.httpClient.post(ApiUrl.SAVE_CONDITION, newCondition);
  }

  saveAnimal(animal: Animal): Observable<any> {
    return this.httpClient.post(ApiUrl.SAVE_ANIMAL, animal);
  }
}
