import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsernavigationComponent } from "./usernavigation/usernavigation.component";
import { CardsComponent } from "./dashboard-content/cards/cards.component";
import { ChartsComponent } from "./dashboard-content/charts/charts.component";
import { TableComponent } from "./table/table.component";
import { RouterModule } from "@angular/router";
import { OverlayComponent } from "./dashboard-content/overlay/overlay.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BookDetailsComponent } from "./book-details/book-details.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    UsernavigationComponent,
    CardsComponent,
    ChartsComponent,
    TableComponent,
    OverlayComponent,
    BookDetailsComponent,
  ],
  exports: [
    UsernavigationComponent,
    CardsComponent,
    ChartsComponent,
    TableComponent,
    OverlayComponent,
  ],
})
export class HomeModule {}
