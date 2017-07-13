import {TaggedUnionType} from "kryo";
import {Action as _Action} from "./avm1/action";

export namespace Action {
  export const type: TaggedUnionType<_Action> = new TaggedUnionType<_Action>({variants: [], tag: "action"});
}
