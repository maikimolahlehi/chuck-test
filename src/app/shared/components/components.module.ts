import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { LoadingComponent } from "./loading/loading.component";
@NgModule({
  declarations: [HeaderComponent, LoadingComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, LoadingComponent]
})
export class ComponentsModule {}
