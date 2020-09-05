import { $Uint16 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Uint16 } from "semantic-types";
import { $ColorTransform, ColorTransform } from "../color-transform.js";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface DefineButtonColorTransform extends _Tag {
  type: TagType.DefineButtonColorTransform;
  buttonId: Uint16;
  transform: ColorTransform;
}

// tslint:disable-next-line:max-line-length
export const $DefineButtonColorTransform: RecordIoType<DefineButtonColorTransform> = new RecordType<DefineButtonColorTransform>({
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
