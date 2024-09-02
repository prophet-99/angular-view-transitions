import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { PagesRoutingModule } from './pages-routing.module';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetsComponent } from './pets/pets.component';

@NgModule({
  declarations: [PetDetailComponent, PetsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
})
export class PagesModule {}
