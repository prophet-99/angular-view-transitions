import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from './pets/pets.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pets',
    pathMatch: 'full',
  },
  {
    path: 'pets',
    component: PetsComponent,
  },
  {
    path: 'pets/:id',
    component: PetDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
