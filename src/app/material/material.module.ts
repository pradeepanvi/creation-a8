import { NgModule } from '@angular/core';
import { MatInputModule, MatButtonModule, MatExpansionModule, MatIconModule, MatDatepickerModule, MatNativeDateModule } from "@angular/material";

const Material = [
  MatInputModule,
  MatButtonModule,
  MatExpansionModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule
]


@NgModule({
  declarations: [],
  imports: [Material],
  exports: [Material],
  providers: []
})
export class MaterialModule { }
