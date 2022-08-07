import sendGAEvent from "../decorators/sendGAEvent.decorator";
import { C2BContext } from "./../types";

export default class C2BService {
  context: C2BContext;

  constructor(context: C2BContext) {
    this.context = context;
  }

  @sendGAEvent("Post order", "answers")
  async postOrder(): Promise<void> {
    const {
      state: { answers },
    } = this.context;

    console.log("Posting answers", answers);
  }
}
