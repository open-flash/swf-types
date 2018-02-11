import { Tagged } from "ts-tagged";
import { createFixedPoint, FixedPoint, FixedPointConstructor } from "./fixed-point";

export type Ufixed16P16 = Tagged<FixedPoint, "Ufixed16P16">;

// tslint:disable-next-line:variable-name
export const Ufixed16P16: FixedPointConstructor = createFixedPoint({
  signed: false,
  intBits: 16,
  fracBits: 16,
});
