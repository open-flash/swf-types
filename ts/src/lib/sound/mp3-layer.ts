import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/lib/ts-enum.js";

export enum Mp3Layer {
  Layer1,
  Layer2,
  Layer3,
}

export const $Mp3Layer: TsEnumType<Mp3Layer> = new TsEnumType<Mp3Layer>({
  enum: Mp3Layer,
  changeCase: CaseStyle.KebabCase,
});
