import { isDevMode } from "@angular/core";

export const getLocalStorage = () =>
  JSON.parse(
    localStorage.getItem(isDevMode() ? "angular-ui" : "Angular-UI") || "{}",
  ) as Record<string, any>;

export const setLocalStorage = (key: string, value: any) => {
  const storage = getLocalStorage();
  storage[key] = value;

  return localStorage.setItem(
    isDevMode() ? "angular-ui" : "Angular-UI",
    JSON.stringify(storage),
  );
};

export const formatTime = (time: number) => {
  const minutes = Math.round(time / 60);
  const seconds = Math.round(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

export const scroll = (el: Element) => {
   el.scrollIntoView({
      behavior: "instant",
      block: "center",
   });
};

