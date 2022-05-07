import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { RecordIoType, RecordType } from "kryo/record";

import { $Header, Header } from "./header.mjs";
import { $Tag, Tag } from "./tag.mjs";

export interface Movie {
  header: Header;
  tags: Tag[];
}

export const $Movie: RecordIoType<Movie> = new RecordType<Movie>({
  properties: {
    header: {type: $Header},
    tags: {type: new ArrayType({itemType: $Tag, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
