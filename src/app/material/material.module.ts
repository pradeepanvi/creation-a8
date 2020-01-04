import { NgModule } from '@angular/core';
import { MatInputModule, MatButtonModule, MatExpansionModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, MatTabsModule, MatSliderModule, MatRadioModule } from "@angular/material";

const Material = [
  MatInputModule,
  MatButtonModule,
  MatExpansionModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTabsModule,
  MatSliderModule,
  MatRadioModule
]


@NgModule({
  declarations: [],
  imports: [Material],
  exports: [Material],
  providers: []
})
export class MaterialModule { }
