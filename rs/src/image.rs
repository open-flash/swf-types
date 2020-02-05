#[cfg(feature = "serde")]
use ::serde::{Deserialize, Serialize};

/// Supported image types
///
/// - `x-swf-partial-jpeg`: JPEG file without  Tables/Misc chunk. It has to be defined in a
///   `DefineJpegTables` tag and injected in the first Start Of Frame (SOF) JPEG chunk.
/// - `x-swf-jpeg3`: JPEG with alpha mask (see DefineBitsJPEG3)
/// - `x-swf-jpeg4`: JPEG with alpha mask and deblocking (see DefineBitsJPEG4)
#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub enum ImageType {
  #[cfg_attr(feature = "serde", serde(rename = "image/jpeg"))]
  Jpeg,
  #[cfg_attr(feature = "serde", serde(rename = "image/gif"))]
  Gif,
  #[cfg_attr(feature = "serde", serde(rename = "image/png"))]
  Png,
  #[cfg_attr(feature = "serde", serde(rename = "image/x-swf-partial-jpeg"))]
  SwfPartialJpeg,
  #[cfg_attr(feature = "serde", serde(rename = "image/x-swf-jpeg3"))]
  SwfJpeg3,
  #[cfg_attr(feature = "serde", serde(rename = "image/x-swf-jpeg4"))]
  SwfJpeg4,
  #[cfg_attr(feature = "serde", serde(rename = "image/x-swf-lossless1"))]
  SwfLossless1,
  #[cfg_attr(feature = "serde", serde(rename = "image/x-swf-lossless2"))]
  SwfLossless2,
}
