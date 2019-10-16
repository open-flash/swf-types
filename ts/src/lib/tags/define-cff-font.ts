import { $Boolean } from "kryo/builtins/boolean";
import { $Bytes } from "kryo/builtins/bytes";
import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { Uint16 } from "semantic-types";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

// TODO: Rename to `DefineOtfFont`
export interface DefineCffFont extends _Tag {
  readonly type: TagType.DefineCffFont;
  readonly id: Uint16;
  readonly fontName: string;
  readonly isBold: boolean;
  readonly isItalic: boolean;
  readonly data?: Uint8Array;
}

export const $DefineCffFont: DocumentIoType<DefineCffFont> = new DocumentType<DefineCffFont>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineCffFont as TagType.DefineCffFont})},
    id: {type: $Uint16},
    fontName: {type: new Ucs2StringType({maxLength: Infinity})},
    isBold: {type: $Boolean},
    isItalic: {type: $Boolean},
    data: {type: $Bytes, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
