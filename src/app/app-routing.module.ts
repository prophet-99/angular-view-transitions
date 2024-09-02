import { NgModule } from '@angular/core';
import { RouterModule, Routes, withViewTransitions } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableViewTransitions: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// withViewTransitions() -> STANDALONE
