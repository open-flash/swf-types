import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/lib/ts-enum.js";

export enum BlendMode {
  Normal,
  Layer,
  Multiply,
  Screen,
  Lighten,
  Darken,
  Difference,
  Add,
  Subtract,
  Invert,
  Alpha,
  Erase,
  Overlay,
  Hardlight,
}

export const $BlendMode: TsEnumType<BlendMode> = new TsEnumType<BlendMode>({
  enum: BlendMode,
  changeCase: CaseStyle.PascalCase,
});
