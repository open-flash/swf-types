import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { IntegerType } from "kryo/lib/integer.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Uint5 } from "semantic-types";
import { Sfixed16P16 } from "../fixed-point/sfixed16p16.js";
import { $FilterType, FilterType } from "./_type.js";

export interface Blur {
  filter: FilterType.Blur;
  blurX: Sfixed16P16;
  blurY: Sfixed16P16;
  passes: Uint5;
}

export const $Blur: RecordIoType<Blur> = new RecordType<Blur>({
  properties: {
    filter: {type: new LiteralType({type: $FilterType, value: FilterType.Blur as FilterType.Blur})},
    blurX: {type: Sfixed16P16},
    blurY: {type: Sfixed16P16},
    passes: {type: new IntegerType({min: 0, max: 31})},
  },
  changeCase: CaseStyle.SnakeCase,
});
