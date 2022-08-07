import C2BService from "../services/c2b.service";
import { C2BState } from "../types";

export default function sendGAEvent(event: string, dataKey: keyof C2BState) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const targetMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const c2bContext = (this as C2BService).context;

      console.log("Sending GA data", {
        event,
        data: c2bContext.state[dataKey],
      });

      return targetMethod.apply(this, args);
    };

    return descriptor;
  };
}
