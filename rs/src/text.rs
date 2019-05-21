use ::serde::{Deserialize, Serialize};

use super::basic_types::{Rect, StraightSRgba8};
use super::float_is::Is;

#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "kebab-case")]
pub enum CsmTableHint {
  Thin,
  Medium,
  Thick,
}

#[derive(Clone, Debug, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct FontAlignmentZone {
  pub data: Vec<FontAlignmentZoneData>,
  pub has_x: bool,
  pub has_y: bool,
}

#[derive(Copy, Clone, Debug, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct FontAlignmentZoneData {
  pub origin: f32,
  pub size: f32,
}

impl ::std::cmp::PartialEq for FontAlignmentZoneData {
  fn eq(&self, other: &Self) -> bool {
    self.origin.is(&other.origin)
      && self.size.is(&other.size)
  }

  fn ne(&self, other: &Self) -> bool {
    !self.eq(other)
  }
}

impl ::std::cmp::Eq for FontAlignmentZoneData {}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct FontLayout {
  pub ascent: u16,
  pub descent: u16,
  pub leading: u16,
  pub advances: Vec<u16>,
  pub bounds: Vec<Rect>,
  pub kerning: Vec<KerningRecord>,
}

#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct GlyphEntry {
  pub index: usize,
  pub advance: i32,
}

#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "kebab-case")]
pub enum GridFitting {
  None,
  Pixel,
  SubPixel,
}

#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct KerningRecord {
  pub left: u16,
  pub right: u16,
  pub adjustment: i16,
}

#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "kebab-case")]
pub enum TextAlignment {
  Left,
  Right,
  Center,
  Justify,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct TextRecord {
  #[serde(skip_serializing_if="Option::is_none")]
  pub font_id: Option<u16>,
  #[serde(skip_serializing_if="Option::is_none")]
  pub color: Option<StraightSRgba8>,
  pub offset_x: i16,
  pub offset_y: i16,
  #[serde(skip_serializing_if="Option::is_none")]
  pub font_size: Option<u16>,
  pub entries: Vec<GlyphEntry>,
}

#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "kebab-case")]
pub enum TextRenderer {
  Normal,
  Advanced,
}

#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub enum EmSquareSize {
  EmSquareSize1024,
  EmSquareSize20480,
}

impl ::serde::Serialize for EmSquareSize {
  fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
      S: ::serde::Serializer,
  {
    let sound_size: u64 = match self {
      EmSquareSize::EmSquareSize1024 => 1024,
      EmSquareSize::EmSquareSize20480 => 20480,
    };
    return serializer.serialize_u64(sound_size);
  }
}

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
