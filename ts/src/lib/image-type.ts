import { Ucs2StringType } from "kryo/types/ucs2-string";
import { WhiteListType } from "kryo/types/white-list";

/**
 * - `x-swf-partial-jpeg`: JPEG file without  Tables/Misc chunk. It has to be defined in a
 *   `DefineJpegTables` tag and injected in the first Start Of Frame (SOF) JPEG chunk.
 * - `x-swf-jpeg3`: JPEG with alpha mask (see DefineBitsJPEG3)
 * - `x-swf-jpeg4`: JPEG with alpha mask and deblocking (see DefineBitsJPEG4)
 */
export type ImageType =
  "image/jpeg"
  | "image/gif"
  | "image/png"
  | "image/x-swf-partial-jpeg"
  | "image/x-swf-jpeg3"
  | "image/x-swf-jpeg4"
  | "image/x-swf-lossless1"
  | "image/x-swf-lossless2";

export const $ImageType: WhiteListType<ImageType> = new WhiteListType({
  itemType: new Ucs2StringType({maxLength: Infinity}),
  values: [
    "image/jpeg" as const,
    "image/gif" as const,
    "image/png" as const,
    "image/x-swf-partial-jpeg" as const,
    "image/x-swf-jpeg3" as const,
    "image/x-swf-jpeg4" as const,
    "image/x-swf-lossless1" as const,
    "image/x-swf-lossless2" as const,
  ],
});
