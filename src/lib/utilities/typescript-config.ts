/* NOTE: As of 08/2023 - This is the recommended way to define properties
 * on a class using typescript. */

export class TypescriptCongifClass {
  public constructor() {
    Object.defineProperty(this, 'foo', {
      configurable: true,
      enumerable: true,
      value: 100,
      writable: true,
    });
    Object.defineProperty(this, 'bar', {
      configurable: true,
      enumerable: true,
      value: void 0,
      writable: true,
    });
  }
}
