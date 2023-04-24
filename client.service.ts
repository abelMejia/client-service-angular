import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Options } from '../interfaces/options.interface';

const baseUrl = environment.serverBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class ClientService {
    apiUrl!: string;
    constructor(private http: HttpClient) {}

    private getDefaultHeaders(): any {
        return { headers: new HttpHeaders().set('default', 'default') };
    }

    get<T>(
        serviceEndpoint: string,
        id?: number | undefined,
        options?: Options): Observable<HttpEvent<T>> {

        this.apiUrl = `${baseUrl}`;

        let url = `${this.apiUrl}${serviceEndpoint}`;
        if (id) { url += `/${id}`; }

        return this.http.get<T>(url, options ? options: this.getDefaultHeaders());

    }

    post<T>(serviceEndpoint: any, item?: T, options?: any): Observable<ArrayBuffer> {

        this.apiUrl = `${baseUrl}`;

        const defaultOptions = this.getDefaultHeaders();
        const formData = item instanceof FormData;

        if (!formData) {
            defaultOptions.headers = defaultOptions.headers.append('Content-Type', 'application/json');
        }

        return this.http.post(
            `${this.apiUrl}${serviceEndpoint}`,
            (item instanceof FormData) ? item : JSON.stringify(item),
            options ?? defaultOptions
        );
    }

    delete<T>(
      serviceEndpoint: string,
      id?: number|string,
      options?: any
    ): Observable<HttpEvent<T>> {
        this.apiUrl = `${baseUrl}`;
        const defaultOptions = this.getDefaultHeaders();
        let endpoint = `${this.apiUrl}${serviceEndpoint}`; // apiUrl contains the slash

        if (id) { endpoint = `${endpoint}/${id}`; }

        return this.http.delete<T>(endpoint, options ?? defaultOptions);
    }

    put<T>(
      serviceEndpoint: any,
      item?: T,
      id?: number,
      options?: any
    ): Observable<ArrayBuffer> {
        this.apiUrl = `${baseUrl}`;

        let url = `${this.apiUrl}${serviceEndpoint}`;
        if (id) { url += `/${id}`; }

        const defaultOptions = this.getDefaultHeaders();
        defaultOptions.headers = defaultOptions.headers.append('Content-Type', 'application/json');

        return this.http.put(`${url}`, JSON.stringify(item), options ?? defaultOptions);
    }

}