import {BooleanType, CaseStyle, DocumentType, Int32Type, LiteralType, Ucs2StringType} from "kryo";
import {Sint16, Uint16} from "semantic-types";
import {Rect} from "../rect";
import {StraightSRgba8} from "../straight-s-rgba8";
import {TextAlignment} from "../text/text-alignment";
import {_Tag} from "./_tag";
import {TagType} from "./_type";

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
  fontSize?: Uint16;
  fontClass?: string;
  color?: StraightSRgba8;
  maxLength?: Uint16;
  align?: TextAlignment;
  marginLeft?: Uint16;
  marginRight?: Uint16;
  indent: Uint16;
  leading: Sint16;
  variableName: string;
  initialText?: string;
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
    font_size?: number;
    font_class?: string;
    color?: StraightSRgba8.Json;
    max_length?: number;
    align?: TextAlignment.Json;
    margin_left: number;
    margin_right: number;
    indent: number;
    leading: number;
    variable_name: string;
    initial_text?: string;
  }

  export const type: DocumentType<DefineDynamicText> = new DocumentType<DefineDynamicText>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineDynamicText})},
      id: {type: new Int32Type()},
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
      fontId: {type: new Int32Type(), optional: true},
      fontSize: {type: new Int32Type(), optional: true},
      fontClass: {type: new Ucs2StringType({maxLength: Infinity}), optional: true},
      color: {type: StraightSRgba8.type, optional: true},
      maxLength: {type: new Int32Type(), optional: true},
      align: {type: TextAlignment.type, optional: true},
      marginLeft: {type: new Int32Type()},
      marginRight: {type: new Int32Type()},
      indent: {type: new Int32Type()},
      leading: {type: new Int32Type()},
      variableName: {type: new Ucs2StringType({maxLength: Infinity})},
      initialText: {type: new Ucs2StringType({maxLength: Infinity}), optional: true},
    },
    rename: CaseStyle.SnakeCase,
  });
}
