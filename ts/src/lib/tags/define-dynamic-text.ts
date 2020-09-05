import { $Boolean } from "kryo/lib/boolean.js";
import { $Sint16 } from "kryo/lib/integer.js";
import { $Uint16 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { IntegerType } from "kryo/lib/integer.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Ucs2StringType } from "kryo/lib/ucs2-string.js";
import { Sint16, Uint16, UintSize } from "semantic-types";
import { $Rect, Rect } from "../rect.js";
import { $StraightSRgba8, StraightSRgba8 } from "../straight-s-rgba8.js";
import { $TextAlignment, TextAlignment } from "../text/text-alignment.js";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

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
