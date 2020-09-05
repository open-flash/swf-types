#[cfg(feature = "serde")]
use ::serde::{Deserialize, Serialize};

use super::basic_types::{Rect, StraightSRgba8};
use super::float_is::Is;

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize), serde(rename_all = "PascalCase"))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub enum CsmTableHint {
  Thin,
  Medium,
  Thick,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq)]
pub struct FontAlignmentZone {
  pub data: Vec<FontAlignmentZoneData>,
  pub has_x: bool,
  pub has_y: bool,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Copy, Clone, Debug)]
pub struct FontAlignmentZoneData {
  pub origin: f32,
  pub size: f32,
}

impl ::std::cmp::PartialEq for FontAlignmentZoneData {
  fn eq(&self, other: &Self) -> bool {
    self.origin.is(&other.origin) && self.size.is(&other.size)
  }
}

impl ::std::cmp::Eq for FontAlignmentZoneData {}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct FontLayout {
  pub ascent: u16,
  pub descent: u16,
  pub leading: u16,
  pub advances: Vec<u16>,
  pub bounds: Vec<Rect>,
  pub kerning: Vec<KerningRecord>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct GlyphEntry {
  pub index: usize,
  pub advance: i32,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize), serde(rename_all = "PascalCase"))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub enum GridFitting {
  None,
  Pixel,
  SubPixel,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct KerningRecord {
  pub left: u16,
  pub right: u16,
  pub adjustment: i16,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize), serde(rename_all = "PascalCase"))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub enum TextAlignment {
  Left,
  Right,
  Center,
  Justify,
}

impl ::std::default::Default for TextAlignment {
  fn default() -> Self {
    TextAlignment::Left
  }
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct TextRecord {
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub font_id: Option<u16>,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub color: Option<StraightSRgba8>,
  pub offset_x: i16,
  pub offset_y: i16,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub font_size: Option<u16>,
  pub entries: Vec<GlyphEntry>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize), serde(rename_all = "PascalCase"))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub enum TextRenderer {
  Normal,
  Advanced,
}

#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub enum EmSquareSize {
  EmSquareSize1024,
  EmSquareSize20480,
}

#[cfg(feature = "serde")]
impl ::serde::Serialize for EmSquareSize {
  fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
  where
    S: ::serde::Serializer,
  {
    let sound_size: u64 = match self {
      EmSquareSize::EmSquareSize1024 => 1024,
      EmSquareSize::EmSquareSize20480 => 20480,
    };
    serializer.serialize_u64(sound_size)
  }
}

#[cfg(feature = "serde")]
impl<'de> ::serde::Deserialize<'de> for EmSquareSize {
  fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
  where
    D: ::serde::Deserializer<'de>,
  {
    struct Visitor;

    impl<'de> ::serde::de::Visitor<'de> for Visitor {
      type Value = EmSquareSize;

      fn expecting(&self, formatter: &mut ::std::fmt::Formatter) -> ::std::fmt::Result {
        formatter.write_str("1024 or 20480")
      }

      fn visit_u64<E>(self, value: u64) -> Result<EmSquareSize, E>
      where
        E: ::serde::de::Error,
      {
        match value {
          1024 => Ok(EmSquareSize::EmSquareSize1024),
          20480 => Ok(EmSquareSize::EmSquareSize20480),
          _ => Err(E::custom(format!("unknown EmSquareSize value: {}", value))),
        }
      }
    }

    deserializer.deserialize_u64(Visitor)
  }
}
