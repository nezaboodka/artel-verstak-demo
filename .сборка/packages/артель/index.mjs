"use strict";
import { Текст } from "./js/index.mjs";
export class Ссылка {
  __artel__var__переменная;
  get переменная() {
    return this.прочитать();
  }
  set переменная(аргумент) {
    if (this.записать !== undefined) this.записать(аргумент);else throw "Нельзя записать в защищённое поле";
  }
  прочитать;
  записать;
  constructor(__artel__id, читатель, писатель) {
    switch (__artel__id) {
      case 0:
        {
          this.прочитать = читатель;
          this.записать = писатель;
        }
        break;
      case 1:
        {}
        break;
      default:
        {
          throw new Error();
        }
    }
  }
}
export class Фрагмент {
  текст;
  начало;
  длина;
  __artel__indexer__get__(позиция) {
    let результат;
    результат = Текст.__artel__indexer__get__(this.текст, this.начало + позиция);
    return результат;
  }
  __artel__var__конец;
  get конец() {
    let результат;
    результат = this.начало + this.длина;
    return результат;
  }
  set конец(argument) {
    this.__artel__var__конец = argument;
  }
  static пустой;
  содержитПозицию(позиция) {
    let результат;
    результат = позиция >= this.начало && позиция < this.конец;
    return результат;
  }
  символПоПозиции(позиция) {
    let результат;
    результат = Текст.символПоПозиции(this.текст, this.начало + позиция);
    return результат;
  }
  constructor(__artel__id, текст, начало, длина, текст1, начало1 = 0, начало2, конец, текст2) {
    switch (__artel__id) {
      case 0:
        {
          this.текст = текст;
          this.начало = начало;
          this.длина = длина;
        }
        break;
      case 1:
        {
          this.текст = текст1;
          this.начало = начало1;
          this.длина = Текст.__artel__get__длина(текст1);
        }
        break;
      case 2:
        {
          this.текст = текст2;
          if (this.конец >= начало2) {
            this.начало = начало2;
            this.длина = this.конец - начало2;
          } else {
            this.начало = this.конец;
            this.длина = начало2 - this.конец;
          }
        }
        break;
      case 3:
        {}
        break;
      default:
        {
          throw new Error();
        }
    }
  }
}
export function __artel__ctor__0() {
  Фрагмент.пустой = new Фрагмент(1, undefined, undefined, undefined, "");
}