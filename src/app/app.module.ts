import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { CoreStoreModule } from '../../src/app/shared/store';

import { i18nMultiModuleLoaderFactory } from '@app/core/i18n';
import { AppLayoutModule } from '@app/layout';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './components/home/home.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: i18nMultiModuleLoaderFactory,
        deps: [HttpClient]
      }
    }),

    AppRoutingModule,
    CoreModule.forRoot(),
    CoreStoreModule,
    AppLayoutModule,
    HomeModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
