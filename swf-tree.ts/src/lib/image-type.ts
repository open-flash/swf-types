import { Ucs2StringType } from "kryo/types/ucs2-string";
import { WhiteListType } from "kryo/types/white-list";

/**
 * - `x-tablesless-jpeg`: JPEG file without  Tables/Misc chunk. It has to be defined in a
 *   `DefineJpegTables` tag and injected in the first Start Of Frame (SOF) JPEG chunk.
 * - `x-ajpeg`: JPEG with alpha mask (see DefineJPEG3):
 *   `x-ajpeg` :: `jpeg_size(uint16be)` `jpeg` `alpha`
 */
export type ImageType =
  "image/jpeg"
  | "image/gif"
  | "image/png"
  | "image/x-tablesless-jpeg"
  | "image/x-ajpeg"
  | "image/x-swf-bmp"
  | "image/x-swf-abmp";

export const $ImageType: WhiteListType<ImageType> = new WhiteListType({
  itemType: new Ucs2StringType({maxLength: Infinity}),
  values: <ImageType[]> [
    "image/jpeg",
    "image/gif",
    "image/png",
    "image/x-tablesless-jpeg",
    "image/x-ajpeg",
    "image/x-swf-bmp",
    "image/x-swf-abmp",
  ],
});
