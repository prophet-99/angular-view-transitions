import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { type Pet } from '../../models/pet.model';
import { PetsService } from '../../services/pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.scss',
})
export class PetsComponent implements OnInit {
  public pets$!: Observable<Pet[]>;

  constructor(private petsService: PetsService) {}

  ngOnInit(): void {
    this.pets$ = this.petsService.getAll();
  }
}
