import { Tagged } from "ts-tagged";
import { createFixedPoint, FixedPoint, FixedPointConstructor } from "./fixed-point";

export type Sfixed16P16 = Tagged<FixedPoint, "Fixed16P16">;

// tslint:disable-next-line:variable-name
export const Sfixed16P16: FixedPointConstructor = createFixedPoint({
  signed: true,
  intBits: 16,
  fracBits: 16,
});
