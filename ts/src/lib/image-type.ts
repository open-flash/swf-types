import { Ucs2StringType } from "kryo/types/ucs2-string";
import { WhiteListType } from "kryo/types/white-list";

/**
 * - `x-partial-jpeg`: JPEG file without  Tables/Misc chunk. It has to be defined in a
 *   `DefineJpegTables` tag and injected in the first Start Of Frame (SOF) JPEG chunk.
 * - `x-ajpeg`: JPEG with alpha mask (see DefineBitsJPEG3):
 *   `x-ajpeg` :: `jpeg_size` `jpeg` `alpha`
 * - `x-ajpegd`: JPEG with alpha mask and deblocking (see DefineBitsJPEG4):
 *   `x-ajpegd` :: `jpeg_size` `deblock` `jpeg` `alpha`
 */
export type ImageType =
  "image/jpeg"
  | "image/gif"
  | "image/png"
  | "image/x-partial-jpeg"
  | "image/x-ajpeg"
  | "image/x-ajpegd"
  | "image/x-swf-bmp"
  | "image/x-swf-abmp";

export const $ImageType: WhiteListType<ImageType> = new WhiteListType({
  itemType: new Ucs2StringType({maxLength: Infinity}),
  values: [
    "image/jpeg" as const,
    "image/gif" as const,
    "image/png" as const,
    "image/x-partial-jpeg" as const,
    "image/x-ajpeg" as const,
    "image/x-ajpegd" as const,
    "image/x-swf-bmp" as const,
    "image/x-swf-abmp" as const,
  ],
});
