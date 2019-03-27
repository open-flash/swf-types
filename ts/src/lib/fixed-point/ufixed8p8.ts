import { Tagged } from "ts-tagged";
import { createFixedPoint, FixedPoint, FixedPointConstructor } from "./fixed-point";

export type Ufixed8P8 = Tagged<FixedPoint, "Ufixed8P8">;

// tslint:disable-next-line:variable-name
export const Ufixed8P8: FixedPointConstructor = createFixedPoint({
  signed: false,
  intBits: 8,
  fracBits: 8,
});
