import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { $ColorTransform, ColorTransform } from "../color-transform";
import { _Tag } from "../tags/_tag";
import { $TagType, TagType } from "../tags/_type";

export interface DefineButtonColorTransform extends _Tag {
  type: TagType.DefineButtonColorTransform;
  buttonId: Uint16;
  transform: ColorTransform;
}

// tslint:disable-next-line:max-line-length
export const $DefineButtonColorTransform: DocumentIoType<DefineButtonColorTransform> = new DocumentType<DefineButtonColorTransform>({
  properties: {
    type: {
      type: new LiteralType({
        type: $TagType,
        value: TagType.DefineButtonColorTransform as TagType.DefineButtonColorTransform,
      }),
    },
    buttonId: {type: $Uint16},
    transform: {type: $ColorTransform},
  },
  changeCase: CaseStyle.SnakeCase,
});
