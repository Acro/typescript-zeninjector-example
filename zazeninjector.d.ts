// This works, but everything imported will be type any
// declare module "zazeninjector";

declare class zazeninjector {
  constructor();
  public scan(dir:string):any;
  public resolve(component_name:string):any;
}

declare module 'zazeninjector' {
  export = zazeninjector;
}
