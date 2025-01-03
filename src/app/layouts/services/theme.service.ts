import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../../share/utils/appHelper";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  isDark: BehaviorSubject<boolean>;

  constructor() {
    // console.log('call');

    const storage = getLocalStorage();
    this.isDark = new BehaviorSubject(storage["is_dark"] || false);
  }

  toggle() {
    const newValue = !this.isDark.value;
    this.isDark.next(newValue);
    setLocalStorage("is_dark", newValue);
  }

  getIsDark() {
    return this.isDark.getValue();
  }
}
