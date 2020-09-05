import { Tagged } from "ts-tagged";
import { createFixedPoint, FixedPoint, FixedPointConstructor } from "./fixed-point.js";

export type Sfixed8P8 = Tagged<FixedPoint, "Fixed8P8">;

// tslint:disable-next-line:variable-name
export const Sfixed8P8: FixedPointConstructor = createFixedPoint({
  signed: true,
  intBits: 8,
  fracBits: 8,
});
