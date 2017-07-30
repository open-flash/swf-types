import {TaggedUnionType} from "kryo";
import {Action as $Action} from "./avm1/action";
import {Tag as $Tag} from "./tag";

// TODO(demurgos): Simplify the way circular dependencies are references are defined

export namespace Action {
  export const type: TaggedUnionType<$Action> = new TaggedUnionType<$Action>({variants: [], tag: "action"});
}

export namespace Tag {
  export const type: TaggedUnionType<$Tag> = new TaggedUnionType<$Tag>({variants: [], tag: "type"});
}
