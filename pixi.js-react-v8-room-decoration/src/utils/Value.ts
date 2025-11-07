import { Observer } from "./Observer";

export class Value<T> {
  protected observer = new Observer<T>();

  protected value: T;
  constructor(value: T) {
    this.value = value;

    this.set = this.set.bind(this);
    this.notify = this.notify.bind(this);
  }

  public addListener(f: (props: T) => void) {
    this.observer.addListener(f);
  }

  readonly get = (): T => {
    return this.value;
  };

  public notify() {
    this.observer.notify(this.value);
  }

  public removeListener(f: (props: T) => void) {
    this.observer.removeListener(f);
  }

  public set(value: T): void {
    if (this.value !== value) {
      this.value = value;
      this.observer.notify(this.value);
    }
  }
}
