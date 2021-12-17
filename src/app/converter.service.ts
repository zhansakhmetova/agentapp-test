import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  distanceTotal = 0;
  weightTotal = 0;
  ageTotal = 0;
  totalArr: any = [];
  notAvailable = 'Не доступно';

  calculateRzdEconom(distance, age, weight): Array<any> {
    if (weight <= 50) {
      this.distanceTotal = distance * 0.5;
      this.weightTotal = weight <= 15 ? 0 : (weight - 15) * 50;
      this.ageTotal = age > 5 ? 0 : 0.5;
      const total =  this.distanceTotal - (this.distanceTotal * this.ageTotal) + this.weightTotal;
      this.totalArr.push(total);
      return this.totalArr;
    } else {
      return this.totalArr.push(this.notAvailable);
    }
  }

  calculateAeroFlotEconom(distance, age, weight): Array<any> {
    if (weight <= 20) {
      this.distanceTotal = distance * 4;
      this.weightTotal = weight <= 5 ? 0 : 4000;
      const total = this.distanceTotal + this.weightTotal;
      this.totalArr.push(total);
      return this.totalArr;
    } else {
      return this.totalArr.push(this.notAvailable);
    }
  }

  calculateRzdMedium(distance, age, weight): Array<any> {
    if (weight <= 60) {
      this.distanceTotal = distance * 2;
      this.weightTotal = weight <= 20 ? 0 : (weight - 20) * 50;
      this.ageTotal = age > 8 ? 0 : 0.3;
      const total = this.distanceTotal - (this.ageTotal * this.distanceTotal) + this.weightTotal;
      this.totalArr.push(total);
      return this.totalArr;
    } else {
      return this.totalArr.push(this.notAvailable);
    }
  }

  calculateAeroFlotMedium(distance, age , weight): Array<any> {
    if (weight <= 50) {
      this.distanceTotal = distance * 8;
      this.weightTotal = weight <= 20 ? 0 : 5000;
      this.ageTotal = age > 7 ? 0 : 0.3;
      const total = this.distanceTotal - (this.distanceTotal * this.ageTotal) + this.weightTotal;
      this.totalArr.push(total);
      return this.totalArr;
    } else {
      return this.totalArr.push(this.notAvailable);
    }
  }

  calculateRzdLuxe(distance, age, weight): Array<any> {
    if (weight <= 60) {
      this.distanceTotal = distance * 4;
      this.weightTotal = 0;
      this.ageTotal = age > 16 ? 0 : 0.2;
      const total = this.distanceTotal - (this.distanceTotal * this.ageTotal) + this.weightTotal;
      this.totalArr.push(total);
      return this.totalArr;
    } else {
      return this.totalArr.push(this.notAvailable);
    }
  }

  calculateAeroFlotLuxe(distance, age , weight): Array<any> {
    if (weight <= 50) {
      this.distanceTotal = distance * 15;
      this.ageTotal = age > 16 ? 0 : 0.3;
      const total = this.distanceTotal - (this.distanceTotal * this.ageTotal);
      if (total === undefined) {
        this.totalArr.value = 0;
      }
      this.totalArr.push(total);
      return this.totalArr;
    } else {
      return this.totalArr.push(this.notAvailable);
    }
  }

  calculateTariffs(distance, age, weight): Array<any> {
    this.totalArr = [];
    this.calculateAeroFlotEconom(distance, age, weight);
    this.calculateAeroFlotMedium(distance, age, weight);
    this.calculateAeroFlotLuxe(distance, age, weight);
    this.calculateRzdEconom(distance, age, weight);
    this.calculateRzdMedium(distance, age, weight);
    this.calculateRzdLuxe(distance, age, weight);
    return this.totalArr;
  }

}
