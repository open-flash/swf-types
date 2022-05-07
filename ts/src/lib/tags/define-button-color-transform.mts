import { CaseStyle } from "kryo";
import { $Uint16 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint16 } from "semantic-types";

import { $ColorTransform, ColorTransform } from "../color-transform.mjs";
import { _Tag } from "./_tag.mjs";
import { $TagType, TagType } from "./_type.mjs";

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
