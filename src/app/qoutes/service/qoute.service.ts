import { Injectable } from "@angular/core";
import { QouteModel } from "../model/QouteModel";

@Injectable({
  providedIn: "root"
})
export class QouteService {
  public qouteList: QouteModel[] = [];

  private daysOfTheWeeks = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

  constructor() {}

  addNewQoute(qoute: String) {
    const date = new Date();
    const dayOfTheWeek = this.daysOfTheWeeks[date.getDate()];
    const day = date.getDay();
    const year = date.getFullYear();
    this.qouteList.push(
      new QouteModel(qoute, `${dayOfTheWeek} ${day}, ${year}`)
    );
  }

  getQoute() {
    return this.qouteList;
  }

  removeQoute(index: number) {
    this.qouteList.splice(index, 1);
  }

  fetchQoutesFromServer(): Promise<QouteModel[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([new QouteModel("I love unit testing", "Tues 3, 2022")]);
      }, 2000);
    });
  }
}
