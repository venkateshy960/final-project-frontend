import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-review",
  templateUrl: "./review.component.html",
  styleUrls: ["./review.component.css"],
})
export class ReviewComponent implements OnInit {
  data: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getAllData();
  }
  getAllData() {
    this.dataService.getAllUserData().subscribe((response: any) => {
      this.data = response?.response;
      console.log("mhgch", this.data);
    });
  }
  addHobbies(data) {
    this.dataService.addHobbie(data).subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  updateHobbies(data) {
    this.dataService.updateHobbie(data).subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  findUser() {
    this.dataService.findUser().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  deleteUser(data: string) {
    this.dataService.deleteApi(data).subscribe((response: any) => {
      this.data = response?.response;
    });
  }
}
