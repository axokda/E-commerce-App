import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations'
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { loadingInterceptor } from './core/interceptor/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withHashLocation(), withViewTransitions(), withInMemoryScrolling({ scrollPositionRestoration: 'top' })
  ), provideHttpClient(),
  provideHttpClient(withInterceptors([loadingInterceptor])),
  importProvidersFrom(BrowserAnimationsModule),
  provideAnimations(),
  provideToastr(),
  ],
};





