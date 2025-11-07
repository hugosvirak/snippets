export class Observer<T> {
  private readonly listeners = new Array<(props: unknown) => void>();

  addListener(f: (props: T) => void): void {
    const f_ = f as (props: unknown) => void;
    const index = this.listeners.indexOf(f_);
    if (index !== -1) {
      console.warn("adding a callback that already exists");
    }
    this.listeners.push(f_);
  }

  notify(props: T): void {
    this.listeners.forEach((f) => {
      f(props);
    });
  }

  removeListener(f: (props: T) => void): void {
    const f_ = f as (props: unknown) => void;
    const index = this.listeners.indexOf(f_);
    if (index !== -1) {
      this.listeners.splice(index, 1);
    }
  }
}
