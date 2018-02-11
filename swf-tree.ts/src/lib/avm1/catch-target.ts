import { TaggedUnionType } from "kryo/types/tagged-union";
import * as catchTargets from "./catch-targets/index";

export type CatchTarget = catchTargets.Register | catchTargets.Variable;

export const $CatchTarget: TaggedUnionType<CatchTarget> = new TaggedUnionType<CatchTarget>({
  variants: [
    catchTargets.$Register,
    catchTargets.$Variable,
  ],
  tag: "type",
});
