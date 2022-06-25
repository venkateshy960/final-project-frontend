import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReviewComponent } from "./review/review.component";
import { RegisterComponent } from "./register/register.component";
import { UpdateUserComponent } from "./update-user/update-user.component";

const routes: Routes = [
  { path: "", redirectTo: "review", pathMatch: "full" },
  { path: "review", component: ReviewComponent },
  { path: "register", component: RegisterComponent },
  { path: "updateUser", component: UpdateUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
