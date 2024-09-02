import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { type Pet } from '../../models/pet.model';
import { PetsService } from '../../services/pets.service';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrl: './pet-detail.component.scss',
})
export class PetDetailComponent implements OnInit {
  public pet!: Pet | null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private petsService: PetsService
  ) {}

  ngOnInit(): void {
    this.pet = this.petsService.getByBreed(
      this.activatedRoute.snapshot.params['id']
    );
  }
}
