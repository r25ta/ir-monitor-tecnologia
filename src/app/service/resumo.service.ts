import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ResumoModel } from '../model/resumo-model';

@Injectable({
  providedIn: 'root'
})
export class ResumoService {

  url = "http://localhost:3000/resumo";

  constructor(private httpClient: HttpClient) {
  }

    //headers
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application-json'})
  }

  getResumoTecnologias() : Observable<ResumoModel>{
    return this.httpClient.get<ResumoModel>(this.url)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );

  }

  handleError(error:HttpErrorResponse){
    let errorMessage='';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      errorMessage = `Código do erro: ${error.status},` + `mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
