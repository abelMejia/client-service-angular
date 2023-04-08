import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

    constructor() { }

    subscribe(email: string): void {
        console.log('suscribe email', email); 
    }
}
