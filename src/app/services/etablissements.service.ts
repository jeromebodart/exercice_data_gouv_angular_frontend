import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Etablissement } from '../models/etablissements/etablissement.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods':  'GET, POST, PUT, DELETE, OPTIONS',
  })
};
 
const root = 'http://localhost:9000/etablissements';

@Injectable({
  providedIn: 'root'
})
export class EtablissementsService {
 
  private etablissementlists: any= [];
  etablissementsSubject = new Subject<Etablissement[]>();
  constructor(
    private http: HttpClient//,
    //private authService: AuthService
  ) {
  }

  emitEtablissementsSubject() {
    this.etablissementsSubject.next(this.etablissementlists);
  }

  
  getAllEtablissement() {
    this.http.get(`${root}/all`).subscribe(
      tab => {
        this.etablissementlists = tab;
      }
    );
    this.emitEtablissementsSubject();
  }
  getByIdEtablissement(id: number) {
    this.http.get(`${root}/${id}`).subscribe(
      tab => {
        this.etablissementlists = tab;
      }
    );
    this.emitEtablissementsSubject();
  }


  addEntreprise(entreprise : Etablissement): Observable<Etablissement> {
    return this.http.post<Etablissement>(`${root}`, entreprise, httpOptions)
    .pipe(
      catchError(this.handleError<Etablissement>('insertEntreprise'))
    );
  }

  updateEntreprise(entreprise: Etablissement): Observable<Etablissement> {
    return this.http.put<Etablissement>(`${root}`, entreprise, httpOptions)
    .pipe(
      catchError(this.handleError<Etablissement>('updateEntreprise'))
    );
  }

  deleteEntreprise(id: number): Observable<{}> {
    return this.http.delete(`${root}/${id}`, httpOptions)
    .pipe(
      catchError(this.handleError('deleteBooking'))
    );
  }
  
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
