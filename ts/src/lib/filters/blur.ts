import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { IntegerType } from "kryo/types/integer";
import { LiteralType } from "kryo/types/literal";
import { Uint5 } from "semantic-types";
import { Sfixed16P16 } from "../fixed-point/sfixed16p16";
import { $FilterType, FilterType } from "./_type";

export interface Blur {
  filter: FilterType.Blur;
  blurX: Sfixed16P16;
  blurY: Sfixed16P16;
  passes: Uint5;
}

export const $Blur: DocumentIoType<Blur> = new DocumentType<Blur>({
  properties: {
    filter: {type: new LiteralType({type: $FilterType, value: FilterType.Blur as FilterType.Blur})},
    blurX: {type: Sfixed16P16},
    blurY: {type: Sfixed16P16},
    passes: {type: new IntegerType({min: 0, max: 31})},
  },
  changeCase: CaseStyle.SnakeCase,
});
