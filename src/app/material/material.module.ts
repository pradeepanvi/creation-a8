import { NgModule } from '@angular/core';
import { MatInputModule, MatButtonModule, MatExpansionModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, MatTabsModule } from "@angular/material";

const Material = [
  MatInputModule,
  MatButtonModule,
  MatExpansionModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTabsModule
]


@NgModule({
  declarations: [],
  imports: [Material],
  exports: [Material],
  providers: []
})
export class MaterialModule { }
