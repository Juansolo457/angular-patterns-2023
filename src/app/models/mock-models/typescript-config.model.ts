/* NOTE: As of 08/2023 - This is the recommended way to define properties
 * on a class using typescript. */

export class TypescriptCongifClass {
  constructor() {
    Object.defineProperty(this, 'foo', {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 100,
    });
    Object.defineProperty(this, 'bar', {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0,
    });
  }
}
