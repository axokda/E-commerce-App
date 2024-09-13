import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations'
import { routes } from './app.routes';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { loadingInterceptor } from './core/interceptor/loading.interceptor';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, /*withHashLocation(),*/ withViewTransitions(), withInMemoryScrolling({ scrollPositionRestoration: 'top' })
  ), provideHttpClient(),
  provideHttpClient(withInterceptors([loadingInterceptor])),
  importProvidersFrom(BrowserAnimationsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  

  ),
  provideAnimations(),
  provideToastr(),
  ],
};





