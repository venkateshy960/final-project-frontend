import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReviewComponent } from "./review/review.component";
import { RegisterComponent } from "./register/register.component";
import { UpdateUserComponent } from "./update-user/update-user.component";

@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    RegisterComponent,
    UpdateUserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
