import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainpanelComponent } from './components/mainpanel/mainpanel.component';
import { ProjectsService } from "./services/projects/projects.service";
import { HttpClientModule } from "@angular/common/http";
import { SharedData } from "./common/shared-data";
import { ProjectitemComponent } from './components/sidebar/projectitem/projectitem.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainpanelComponent,
    ProjectitemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    SharedData,
    {
        provide: APP_INITIALIZER,
        useFactory: startupServiceFactory,
        deps: [ProjectsService],
        multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function startupServiceFactory(startupService: ProjectsService) {
   return () => startupService.load();
}
