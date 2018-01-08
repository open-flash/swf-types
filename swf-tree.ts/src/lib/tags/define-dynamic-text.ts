import { BooleanType, CaseStyle, DocumentType, IntegerType, LiteralType, Ucs2StringType } from "kryo";
import { Sint16, Uint16, UintSize } from "semantic-types";
import { Rect } from "../rect";
import { StraightSRgba8 } from "../straight-s-rgba8";
import { TextAlignment } from "../text/text-alignment";
import { _Tag } from "./_tag";
import { TagType } from "./_type";

export interface DefineDynamicText extends _Tag {
  type: TagType.DefineDynamicText;
  id: Uint16;
  bounds: Rect;
  wordWrap: boolean;
  multiline: boolean;
  password: boolean;
  readonly: boolean;
  autoSize: boolean;
  noSelect: boolean;
  border: boolean;
  wasStatic: boolean;
  html: boolean;
  useGlyphFont: boolean;
  fontId?: Uint16;
  fontClass?: string;
  fontSize?: Uint16;
  color?: StraightSRgba8;
  maxLength?: UintSize;
  align?: TextAlignment;
  marginLeft: Uint16;
  marginRight: Uint16;
  indent: Uint16;
  leading: Sint16;
  variableName?: string;
  text?: string;
}

export namespace DefineDynamicText {
  export interface Json {
    type: "define-dynamic-text";
    id: number;
    bounds: Rect.Json;
    word_wrap: boolean;
    multiline: boolean;
    password: boolean;
    readonly: boolean;
    auto_size: boolean;
    no_select: boolean;
    border: boolean;
    was_static: boolean;
    html: boolean;
    use_glyph_font: boolean;
    font_id?: number;
    font_class?: string;
    font_size?: number;
    color?: StraightSRgba8.Json;
    max_length?: number;
    align?: TextAlignment.Json;
    margin_left: number;
    margin_right: number;
    indent: number;
    leading: number;
    variable_name?: string;
    text?: string;
  }

  export const type: DocumentType<DefineDynamicText> = new DocumentType<DefineDynamicText>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineDynamicText})},
      id: {type: new IntegerType()},
      bounds: {type: Rect.type},
      wordWrap: {type: new BooleanType()},
      multiline: {type: new BooleanType()},
      password: {type: new BooleanType()},
      readonly: {type: new BooleanType()},
      autoSize: {type: new BooleanType()},
      noSelect: {type: new BooleanType()},
      border: {type: new BooleanType()},
      wasStatic: {type: new BooleanType()},
      html: {type: new BooleanType()},
      useGlyphFont: {type: new BooleanType()},
      fontId: {type: new IntegerType(), optional: true},
      fontClass: {type: new Ucs2StringType({maxLength: Infinity}), optional: true},
      fontSize: {type: new IntegerType(), optional: true},
      color: {type: StraightSRgba8.type, optional: true},
      maxLength: {type: new IntegerType(), optional: true},
      align: {type: TextAlignment.type, optional: true},
      marginLeft: {type: new IntegerType()},
      marginRight: {type: new IntegerType()},
      indent: {type: new IntegerType()},
      leading: {type: new IntegerType()},
      variableName: {type: new Ucs2StringType({maxLength: Infinity}), optional: true},
      text: {type: new Ucs2StringType({maxLength: Infinity}), optional: true},
    },
    rename: CaseStyle.SnakeCase,
  });
}
