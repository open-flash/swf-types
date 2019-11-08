#[cfg(feature = "serde")]
use ::serde::{Deserialize, Serialize};

/// Supported image types
///
/// - `x-partial-jpeg`: JPEG file without  Tables/Misc chunk. It has to be defined in a
///   `DefineJpegTables` tag and injected in the first Start Of Frame (SOF) JPEG chunk.
/// - `x-ajpeg`: JPEG with alpha mask (see DefineBitsJPEG3):
///   `x-ajpeg` :: `jpeg_size` `jpeg` `alpha`
/// - `x-ajpegd`: JPEG with alpha mask and deblocking (see DefineBitsJPEG4):
///   `x-ajpegd` :: `jpeg_size` `deblock` `jpeg` `alpha`
#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub enum ImageType {
  #[cfg_attr(feature = "serde", serde(rename = "image/jpeg"))]
  Jpeg,
  #[cfg_attr(feature = "serde", serde(rename = "image/gif"))]
  Gif,
  #[cfg_attr(feature = "serde", serde(rename = "image/png"))]
  Png,
  #[cfg_attr(feature = "serde", serde(rename = "image/x-partial-jpeg"))]
  PartialJpeg,
  #[cfg_attr(feature = "serde", serde(rename = "image/x-ajpeg"))]
  Ajpeg,
  #[cfg_attr(feature = "serde", serde(rename = "image/x-ajpegd"))]
  Ajpegd,
  #[cfg_attr(feature = "serde", serde(rename = "image/x-swf-bmp"))]
  SwfBmp,
  #[cfg_attr(feature = "serde", serde(rename = "image/x-swf-abmp"))]
  SwfAbmp,
}
