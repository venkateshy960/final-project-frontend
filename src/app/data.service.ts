import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private API_URL = "http://localhost:3000";

  constructor(private httpClient: HttpClient) {}

  public getAllUserData() {
    return this.httpClient.get(`${this.API_URL}/list-all-users`);
  }

  public addHobbie(data) {
    return this.httpClient.post(`${this.API_URL}/add-hobbie`, data);
  }
  public updateHobbie(data) {
    return this.httpClient.post(`${this.API_URL}/update-hobbie`, data);
  }
  public findUser() {
    return this.httpClient.get(`${this.API_URL}/find-user`);
  }
  public deleteApi(data) {
    // console.log("jhgfchgchjk", data);

    return this.httpClient.delete(`${this.API_URL}/delete-user`, data);
  }
}
