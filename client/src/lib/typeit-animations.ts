import TypeIt from "typeit";

export interface TypeItOptions {
  speed?: number;
  deleteSpeed?: number;
  lifeLike?: boolean;
  cursor?: boolean;
  cursorChar?: string;
  startDelay?: number;
  loop?: boolean;
  loopDelay?: number;
  afterComplete?: () => void;
}

export class TypeItAnimator {
  private instance: any;

  constructor(element: string | HTMLElement, options: TypeItOptions = {}) {
    this.instance = new TypeIt(element, {
      speed: options.speed || 50,
      deleteSpeed: options.deleteSpeed || 30,
      lifeLike: options.lifeLike !== false,
      cursor: options.cursor !== false,
      cursorChar: options.cursorChar || '|',
      startDelay: options.startDelay || 0,
      loop: options.loop || false,
      loopDelay: options.loopDelay || 750,
      afterComplete: options.afterComplete
    });
  }

  type(text: string) {
    this.instance.type(text);
    return this;
  }

  delete(chars?: number) {
    this.instance.delete(chars);
    return this;
  }

  pause(ms: number) {
    this.instance.pause(ms);
    return this;
  }

  break() {
    this.instance.break();
    return this;
  }

  go() {
    this.instance.go();
    return this;
  }

  destroy() {
    this.instance.destroy();
    return this;
  }

  // Convenience methods
  typeAndDelete(text: string, pauseDuration: number = 1500) {
    return this.type(text).pause(pauseDuration).delete();
  }

  typeMultiple(texts: string[], pauseBetween: number = 1000) {
    texts.forEach((text, index) => {
      this.type(text);
      if (index < texts.length - 1) {
        this.pause(pauseBetween).delete();
      } else {
        // For the last item, if loop is enabled, pause and delete to restart
        this.pause(pauseBetween).delete();
      }
    });
    return this;
  }

  // Method for continuous dynamic text cycling
  typeContinuous(texts: string[], pauseBetween: number = 1000) {
    texts.forEach((text, index) => {
      this.type(text).pause(pauseBetween).delete();
      if (index < texts.length - 1) {
        this.pause(500);
      }
    });
    return this;
  }
}

// Factory function
export function createTypeItAnimator(element: string | HTMLElement, options?: TypeItOptions) {
  return new TypeItAnimator(element, options);
}