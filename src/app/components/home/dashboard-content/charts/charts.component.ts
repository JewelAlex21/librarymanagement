import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserInfo } from "src/app/model/user-info";
import { CrudService } from 'src/app/service/crud.service';
import { FormFetcherService } from "src/app/service/form-fetcher.service";


@Component({
  selector: "app-charts",
  templateUrl: "./charts.component.html",
})
export class ChartsComponent implements OnInit {
  
  //model of the User Information
  userInfoObj: UserInfo = new UserInfo();

  //used to store all the BookInfo from the server
  userInfoArr: UserInfo[] = [];

  

  constructor(private route: ActivatedRoute,private router: Router,private crudService: CrudService,private formData: FormFetcherService) {}

  ngOnInit(): void {
    
    
  }
}
