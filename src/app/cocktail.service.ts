import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor() {} 
 public  cocktails = [
    { name: 'cockchamp', price: '19', image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'cockrhum', price: '17', image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'cocksky', price: '12', image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=100' },
  ];

  getCocktails() {
  return this.cocktails
}}
class Cocktail {
  constructor(
    public name: string,
    public price: number,
    public image: string
  ) {}
}
