import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/lib/array.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { $Header, Header } from "./header.js";
import { $Tag, Tag } from "./tag.js";

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
