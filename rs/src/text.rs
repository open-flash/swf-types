use ::serde::{Deserialize, Serialize};

use super::basic_types::{Rect, StraightSRgba8};
use super::float_is::Is;

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub enum CsmTableHint {
  Thin,
  Medium,
  Thick,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct FontAlignmentZone {
  pub data: Vec<FontAlignmentZoneData>,
  pub has_x: bool,
  pub has_y: bool,
}

#[derive(Serialize, Deserialize, Debug)]
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

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct FontLayout {
  pub ascent: u16,
  pub descent: u16,
  pub leading: u16,
  pub advances: Vec<u16>,
  pub bounds: Vec<Rect>,
  pub kerning: Vec<KerningRecord>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct GlyphEntry {
  pub index: usize,
  pub advance: i32,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub enum GridFitting {
  None,
  Pixel,
  SubPixel,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct KerningRecord {
  pub left: u16,
  pub right: u16,
  pub adjustment: i16,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub enum TextAlignment {
  Left,
  Right,
  Center,
  Justify,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
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

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub enum TextRenderer {
  Normal,
  Advanced,
}
