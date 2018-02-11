import { CaseStyle } from "kryo/case-style";
import { TsEnumType } from "kryo/types/ts-enum";

export enum Mp3Layer {
  Layer1,
  Layer2,
  Layer3,
}

export const $Mp3Layer: TsEnumType<Mp3Layer> = new TsEnumType<Mp3Layer>({
  enum: Mp3Layer,
  changeCase: CaseStyle.KebabCase,
});
