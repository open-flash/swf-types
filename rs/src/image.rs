use ::serde::{Deserialize, Serialize};

/// Supported image types
///
/// - `x-partial-jpeg`: JPEG file without  Tables/Misc chunk. It has to be defined in a
///   `DefineJpegTables` tag and injected in the first Start Of Frame (SOF) JPEG chunk.
/// - `x-ajpeg`: JPEG with alpha mask (see DefineBitsJPEG3):
///   `x-ajpeg` :: `jpeg_size` `jpeg` `alpha`
/// - `x-ajpegd`: JPEG with alpha mask and deblocking (see DefineBitsJPEG4):
///   `x-ajpegd` :: `jpeg_size` `deblock` `jpeg` `alpha`
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
pub enum ImageType {
  #[serde(rename = "image/jpeg")]
  Jpeg,
  #[serde(rename = "image/gif")]
  Gif,
  #[serde(rename = "image/png")]
  Png,
  #[serde(rename = "image/x-partial-jpeg")]
  PartialJpeg,
  #[serde(rename = "image/x-ajpeg")]
  Ajpeg,
  #[serde(rename = "image/x-ajpegd")]
  Ajpegd,
  #[serde(rename = "image/x-swf-bmp")]
  SwfBmp,
  #[serde(rename = "image/x-swf-abmp")]
  SwfAbmp,
}
