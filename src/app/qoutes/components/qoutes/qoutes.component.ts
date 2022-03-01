
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { QouteService } from "../../service/qoute.service";
import { QouteModel } from "../../model/QouteModel";

@Component({
  selector: "app-qoutes",
  templateUrl: "./qoutes.component.html",
  styleUrls: ["./qoutes.component.css"],
})
export class QoutesComponent implements OnInit {
  public qouteList: QouteModel[] = [];
  public fetchedList: QouteModel[] = [];
  public qouteText: String ="";

  constructor(private service: QouteService) {}

  ngOnInit() {
    this.qouteList = this.service.getQoute();
    this.service.fetchQoutesFromServer().then((data: QouteModel[]) => {
      this.fetchedList = data;
    });
  }

  createNewQoute() {
    this.service.addNewQoute(this.qouteText!);
    this.qouteText = "";
  }

  removeQoute(index: number) {
    this.service.removeQoute(index);
  }
}

