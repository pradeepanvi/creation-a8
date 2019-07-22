import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  fixed_inner: boolean = true;
  constructor() { }
}
