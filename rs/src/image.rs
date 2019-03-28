use ::serde::{Deserialize, Serialize};

/// Supported image types
///
/// - `x-partial-jpeg`: JPEG file without  Tables/Misc chunk. It has to be defined in a
///   `DefineJpegTables` tag and injected in the first Start Of Frame (SOF) JPEG chunk.
/// - `x-ajpeg`: JPEG with alpha mask (see DefineJPEG3):
///   `x-ajpeg` :: `jpeg_size(uint16be)` `jpeg` `alpha`
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
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
  #[serde(rename = "image/x-swf-bmp")]
  SwfBmp,
  #[serde(rename = "image/x-swf-abmp")]
  SwfAbmp,
}
