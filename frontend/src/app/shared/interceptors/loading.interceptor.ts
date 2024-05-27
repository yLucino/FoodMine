import { Injectable } from '@angular/core'
import { 
  HttpEvent, 
  HttpEventType, 
  HttpHandler, 
  HttpInterceptor, 
  HttpRequest 
} from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { LoadingService } from '../../services/loading.service';

var pendingRequests = 0;

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingService.showLoading();
    pendingRequests = pendingRequests + 1;

    return next.handle(req).pipe(
      tap({
        next: (event) => {
          if (event.type === HttpEventType.Response) {
            this.handleHideLoading();
          }
        },
        error: (_) => {
          this.handleHideLoading();
        }
      })
    );
  }

  handleHideLoading() {
    pendingRequests = pendingRequests - 1;
    if (pendingRequests === 0) {
      this.loadingService.hideLoading();
    }
  }

}