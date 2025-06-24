declare module "jest-image-snapshot" {
  export function toMatchImageSnapshot(options?: any): any;
}

declare global {
  namespace jest {
    interface Matchers<R> {
      toMatchImageSnapshot(options?: any): R;
    }
  }
}
