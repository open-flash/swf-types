import { CaseStyle } from "kryo";
import { $Boolean } from "kryo/boolean";
import { $Sint16, $Uint16, IntegerType } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Ucs2StringType } from "kryo/ucs2-string";
import { Sint16, Uint16, UintSize } from "semantic-types";

import { $Rect, Rect } from "../rect.mjs";
import { $StraightSRgba8, StraightSRgba8 } from "../straight-s-rgba8.mjs";
import { $TextAlignment, TextAlignment } from "../text/text-alignment.mjs";
import { _Tag } from "./_tag.mjs";
import { $TagType, TagType } from "./_type.mjs";

export interface DefineDynamicText extends _Tag {
  readonly type: TagType.DefineDynamicText;
  readonly id: Uint16;
  readonly bounds: Rect;
  readonly wordWrap: boolean;
  readonly multiline: boolean;
  readonly password: boolean;
  readonly readonly: boolean;
  readonly autoSize: boolean;
  readonly noSelect: boolean;
  readonly border: boolean;
  readonly wasStatic: boolean;
  readonly html: boolean;
  readonly useGlyphFont: boolean;
  readonly fontId?: Uint16;
  readonly fontClass?: string;
  readonly fontSize?: Uint16;
  readonly color?: StraightSRgba8;
  readonly maxLength?: UintSize;
  readonly align: TextAlignment;
  readonly marginLeft: Uint16;
  readonly marginRight: Uint16;
  readonly indent: Uint16;
  readonly leading: Sint16;
  readonly variableName?: string;
  readonly text?: string;
}

export const $DefineDynamicText: RecordIoType<DefineDynamicText> = new RecordType<DefineDynamicText>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineDynamicText as TagType.DefineDynamicText})},
    id: {type: $Uint16},
    bounds: {type: $Rect},
    wordWrap: {type: $Boolean},
    multiline: {type: $Boolean},
    password: {type: $Boolean},
    readonly: {type: $Boolean},
    autoSize: {type: $Boolean},
    noSelect: {type: $Boolean},
    border: {type: $Boolean},
    wasStatic: {type: $Boolean},
    html: {type: $Boolean},
    useGlyphFont: {type: $Boolean},
    fontId: {type: $Uint16, optional: true},
    fontClass: {type: new Ucs2StringType({maxLength: Infinity}), optional: true},
    fontSize: {type: new IntegerType(), optional: true},
    color: {type: $StraightSRgba8, optional: true},
    maxLength: {type: new IntegerType(), optional: true},
    align: {type: $TextAlignment},
    marginLeft: {type: $Uint16},
    marginRight: {type: $Uint16},
    indent: {type: $Uint16},
    leading: {type: $Sint16},
    variableName: {type: new Ucs2StringType({maxLength: Infinity}), optional: true},
    text: {type: new Ucs2StringType({maxLength: Infinity}), optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
