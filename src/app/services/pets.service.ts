import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { from, map, mergeMap, Observable, of, tap, toArray } from 'rxjs';

import { type Pet, type PetResponse } from '../models/pet.model';

@Injectable({
  providedIn: 'root',
})
export class PetsService {
  private _API_URL = 'https://dog.ceo/api';
  private _PETS_STORAGE_NAME = 'RANDOM_PETS';

  constructor(private httpClient: HttpClient) {}

  public getAll(caching = true): Observable<Pet[]> {
    const petsStorage = localStorage.getItem(this._PETS_STORAGE_NAME);
    if (petsStorage) {
      if (caching) return of(JSON.parse(petsStorage));
      localStorage.removeItem(this._PETS_STORAGE_NAME);
    }

    return this.httpClient
      .get<PetResponse>(`${this._API_URL}/breeds/list/all`)
      .pipe(
        mergeMap(({ message }) => {
          const firstHeight = Object.keys(message)
            .slice(0, 8)
            .map((key) => ({ key: key, value: message[key] }));

          return from(firstHeight);
        }),
        mergeMap(({ key }) =>
          this.httpClient
            .get<{ message: string; status: string }>(
              `${this._API_URL}/breed/${key}/images/random`
            )
            .pipe(
              map(({ message }) => ({
                imageURL: message,
                breed: key,
              }))
            )
        ),
        toArray(),
        tap((pets) => {
          if (caching)
            localStorage.setItem(this._PETS_STORAGE_NAME, JSON.stringify(pets));
        })
      );
  }

  public getByBreed(breed: string): Pet | null {
    const petsStorage = localStorage.getItem(this._PETS_STORAGE_NAME);
    if (petsStorage)
      return (
        (JSON.parse(petsStorage) as Pet[]).find(
          (petStorage) => petStorage.breed === breed
        ) || null
      );

    return null;
  }
}
