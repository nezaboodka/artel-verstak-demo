"use strict";
import { createInterface } from "readline";
export function поразрядноеИ(а, б) {
  let результат;
  результат = а & б;
  return результат;
}
export function поразрядноеИли(а, б) {
  let результат;
  результат = а | б;
  return результат;
}
export function поразрядноеИскл(а, б) {
  let результат;
  результат = а ^ б;
  return результат;
}
export function поразрядноеНе(а) {
  let результат;
  результат = ~а;
  return результат;
}
export function сдвигВлево(число, разрядов) {
  let результат;
  результат = число << разрядов;
  return результат;
}
export function сдвигВправо(число, разрядов) {
  let результат;
  результат = число >> разрядов;
  return результат;
}
export function написать(значение) {
  console.log(значение);
}
export async function прочитать() {
  let результат;
  let опции = new ReadLineOptionsObject(1, process.stdin, process.stdout);
  let интер = createInterface(опции);
  результат = new Promise((resolve, reject) => {
    интер.question("", answer => {
      интер.close();
      resolve(answer);
    });
  });
  return результат;
}
export class Объект {
  static вТекст(__artel__target) {
    let результат;
    результат = __artel__target.toString();
    return результат;
  }
  static хэшКод(__artel__target) {
    let результат;
    результат = 0;
    return результат;
  }
  static равно(__artel__target, др) {
    let результат;
    результат = __artel__target === др;
    return результат;
  }
  static __artel__ctor() {
    let __artel__target;
    __artel__target = new Object();
    return __artel__target;
  }
}
export class ПростойОбъект {
  static __artel__ctor() {
    let __artel__target;
    __artel__target = new Object();
    return __artel__target;
  }
}
export class Тег extends Объект {
  constructor() {
    super();
  }
}
export class Массив {
  static __artel__get__количество(__artel__target) {
    return __artel__target.length;
  }
  static __artel__indexer__get__(__artel__target, индекс) {
    return __artel__target[индекс];
  }
  static __artel__indexer__set__(__artel__target, индекс, аргумент) {
    __artel__target[индекс] = аргумент;
  }
  static __artel__ctor(количество) {
    let __artel__target;
    __artel__target = new Array(количество);
    return __artel__target;
  }
}
export class Список {
  static __artel__get__количество(__artel__target) {
    return __artel__target.length;
  }
  static __artel__indexer__get__(__artel__target, индекс) {
    return __artel__target[индекс];
  }
  static __artel__indexer__set__(__artel__target, индекс, аргумент) {
    __artel__target[индекс] = аргумент;
  }
  static __artel__ctor() {
    let __artel__target;
    __artel__target = new Array();
    return __artel__target;
  }
  static __artel__ctor1(запас) {
    let __artel__target;
    __artel__target = new Array(запас);
    return __artel__target;
  }
  static добавить(__artel__target, элемент) {
    __artel__target.push(элемент);
  }
  static вставить(__artel__target, индекс, элемент) {
    __artel__target.splice(индекс, 0, элемент);
  }
  static удалить(__artel__target, индекс) {
    return Массив.__artel__indexer__get__(__artel__target.splice(индекс, 1), 0);
  }
  static удалитьПоследний(__artel__target) {
    return __artel__target.pop();
  }
  static очистить(__artel__target) {
    __artel__target.length = 0;
  }
}
export class Звено {
  ключ;
  значение;
  constructor() {
    let __artel__promises = [];
  }
}
export class Словарь {
  static __artel__get__количество(__artel__target) {
    return __artel__target.size;
  }
  static __artel__indexer__get__(__artel__target, ключ) {
    return __artel__target.get(ключ);
  }
  static __artel__indexer__set__(__artel__target, ключ, аргумент) {
    __artel__target.set(ключ, аргумент);
  }
  static добавить(__artel__target, ключ, значение) {
    __artel__target.set(ключ, значение);
  }
  static сохранить(__artel__target, ключ, значение) {
    __artel__target.set(ключ, значение);
  }
  static удалить(__artel__target, ключ) {
    let результат;
    результат = __artel__target.get(ключ);
    __artel__target.delete(ключ);
    return результат;
  }
  static найти(__artel__target, ключ) {
    let результат;
    результат = __artel__target.get(ключ);
    return результат;
  }
  static содержит(__artel__target, ключ) {
    let результат;
    результат = __artel__target.has(ключ);
    return результат;
  }
  static очистить(__artel__target) {
    __artel__target.clear();
  }
  static __artel__ctor() {
    let __artel__target;
    __artel__target = new Map();
    return __artel__target;
  }
}
export class Работа {
  static async результат(__artel__target) {
    let результат;
    результат = this;
    return результат;
  }
  static __artel__ctor(executor) {
    let __artel__target;
    __artel__target = new Promise(executor);
    return __artel__target;
  }
}
export class ТегТранслятора extends Тег {
  constructor() {
    super();
  }
}
export class ВнешняяРеализация extends ТегТранслятора {
  constructor(этоГлобальныйОбъект = false, модуль = undefined, файлМодуля = undefined, встроеноВСистему = false, режимИмпортаПоУмолчанию = false) {
    super();
  }
}
export class МассивПараметров extends ТегТранслятора {
  constructor() {
    super();
  }
}
export class НастоящееИмя extends ТегТранслятора {
  constructor(имя) {
    super();
  }
}
export class Текст {
  static __artel__indexer__get__(__artel__target, позиция) {
    return __artel__target[позиция];
  }
  static __artel__get__длина(__artel__target) {
    return __artel__target.length;
  }
  static скопировать(__artel__target, начало, конец) {
    let результат;
    результат = __artel__target.substring(начало, конец);
    return результат;
  }
  static наФрагменты(__artel__target, разделитель) {
    let результат;
    результат = __artel__target.split(разделитель);
    return результат;
  }
  static символПоПозиции(__artel__target, позиция) {
    return __artel__target[позиция];
  }
  static пустой;
  static __artel__ctor() {
    let __artel__target;
    __artel__target = new String();
    return __artel__target;
  }
}
export class ReadLineOptionsObject {
  input;
  output;
  constructor(__artel__id, input, output) {
    switch (__artel__id) {
      case 0:
        {}
        break;
      case 1:
        {
          this.input = input;
          this.output = output;
        }
        break;
      default:
        {
          throw new Error();
        }
    }
  }
}
export function __artel__ctor__1() {
  Текст.пустой = "";
}