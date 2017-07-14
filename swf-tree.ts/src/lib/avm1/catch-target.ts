import {TaggedUnionType} from "kryo";
import * as catchTargets from "./catch-targets/index";

export type CatchTarget = catchTargets.Register | catchTargets.Variable;

export namespace CatchTarget {
  export type Json = catchTargets.Register.Json | catchTargets.Variable.Json;

  export const type: TaggedUnionType<CatchTarget> = new TaggedUnionType<CatchTarget>({
    variants: [
      catchTargets.Register.type,
      catchTargets.Variable.type,
    ],
    tag: "type",
  });
}
