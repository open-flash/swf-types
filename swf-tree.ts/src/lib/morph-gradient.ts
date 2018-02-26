import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $Gradient, Gradient } from "./gradient";
import { $MorphColorStop, MorphColorStop } from "./morph-color-stop";

export interface MorphGradient extends Gradient {
  colors: MorphColorStop[];
}

export const $MorphGradient: DocumentIoType<MorphGradient> = new DocumentType<MorphGradient>({
  properties: {
    ...$Gradient.properties,
    colors: {type: new ArrayType({itemType: $MorphColorStop, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
