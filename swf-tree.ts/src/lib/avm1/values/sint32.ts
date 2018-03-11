import { $Sint32 as _$Sint32 } from "kryo/builtins/sint32";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Sint32 as _Sint32 } from "semantic-types";
import { $ValueType, ValueType } from "../value-type";

export interface Sint32 {
  type: ValueType.Sint32;
  value: _Sint32;
}

export const $Sint32: DocumentIoType<Sint32> = new DocumentType<Sint32>(() => ({
  properties: {
    type: {type: new LiteralType({type: $ValueType, value: ValueType.Sint32 as ValueType.Sint32})},
    value: {type: _$Sint32},
  },
  changeCase: CaseStyle.SnakeCase,
}));
