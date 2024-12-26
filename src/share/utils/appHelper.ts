import { isDevMode } from '@angular/core';

export const getLocalStorage = () =>
  JSON.parse(
    localStorage.getItem(isDevMode() ? 'angular-ui' : 'Angular-UI') || '{}'
  ) as Record<string, any>;

export const setLocalStorage = (key: string, value: any) => {
  const storage = getLocalStorage();
  storage[key] = value;

  return localStorage.setItem(
    isDevMode() ? 'angular-ui' : 'Angular-UI',
    JSON.stringify(storage)
  );
};
