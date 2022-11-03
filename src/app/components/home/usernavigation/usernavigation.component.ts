import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-usernavigation",
  templateUrl: "./usernavigation.component.html",
})
export class UsernavigationComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
  }

  showDashboard() {
    this.router.navigate(["dashboard"], { relativeTo: this.route });
  }
  showTable() {
    this.router.navigate(["table"], { relativeTo: this.route });
  }
  signOut() {
    this.router.navigate([""]);
  }
}
