import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookDetailsComponent } from "./components/home/book-details/book-details.component";
import { ChartsComponent } from "./components/home/dashboard-content/charts/charts.component";
import { DashboardContentComponent } from "./components/home/dashboard-content/dashboard-content.component";
import { OverlayComponent } from "./components/home/dashboard-content/overlay/overlay.component";
import { HomeComponent } from "./components/home/home.component";
import { TableComponent } from "./components/home/table/table.component";
import { LandingComponent } from "./components/landing/landing.component";
import { ErrorPageComponent } from "./components/shared/error-page/error-page.component";
import { SigninComponent } from "./components/signin/signin.component";
import { SignupComponent } from "./components/signup/signup.component";

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent },
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardContentComponent,
      },
      {
        path: "charts",
        component: ChartsComponent,
      },
      {
        path: "book-details/:id",
        component: BookDetailsComponent,
      },

      {
        path: "table",
        component: TableComponent,
        children: [
          {
            path: "create",
            component: OverlayComponent,
          },
          {
            path: "edit",
            component: OverlayComponent,
          },
        ],
      },
    ],
  },
  {
    path: "**",
    component: ErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  LandingComponent,
  SigninComponent,
  SignupComponent,
  HomeComponent,
  DashboardContentComponent,
  ErrorPageComponent,
];
