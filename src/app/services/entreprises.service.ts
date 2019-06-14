import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Entreprise } from '../models/entreprise.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods':  'GET, POST, PUT, DELETE, OPTIONS',
  })
};
 
const root = 'http://localhost:9000/entreprises';

@Injectable({
  providedIn: 'root'
})
export class EntreprisesService {
  entreprisesSubject = new Subject<Entreprise[]>();
  private entrepriselists: any= [];
  constructor(
    private http: HttpClient//,
    //private authService: AuthService
  ) {
    
  }

  getAllEntreprises() {
    this.http.get(`${root}/all`).subscribe(
      tab => {
        this.entrepriselists = tab;
        this.emitEntrepriseSubject();
      }
    );
  }

  getByIdEntreprise(id: number) {
    this.http.get(`$root/${id}`).subscribe(
      tab => {
        this.entrepriselists = tab;
        this.emitEntrepriseSubject();
      }
    )
  }

  addEntreprise(entreprise : Entreprise): Observable<Entreprise> {
    return this.http.post<Entreprise>(`${root}`, entreprise, httpOptions)
    .pipe(
      catchError(this.handleError<Entreprise>('insertEntreprise'))
    );
  }

  updateEntreprise(entreprise: Entreprise): Observable<Entreprise> {
    return this.http.put<Entreprise>(`${root}`, entreprise, httpOptions)
    .pipe(
      catchError(this.handleError<Entreprise>('updateEntreprise'))
    );
  }

  deleteEntreprise(id: number): Observable<{}> {
    return this.http.delete(`${root}/${id}`, httpOptions)
    .pipe(
      catchError(this.handleError('deleteBooking'))
    );
  }

  emitEntrepriseSubject(){
    this.entreprisesSubject.next(this.entrepriselists);
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
