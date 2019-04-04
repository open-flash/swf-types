use ::serde::{Deserialize, Serialize};

use crate::basic_types::StraightSRgba8;

#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "kebab-case")]
pub enum GradientSpread {
  Pad,
  Reflect,
  Repeat,
}

#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "kebab-case")]
pub enum ColorSpace {
  SRgb,
  LinearRgb,
}

#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
pub struct ColorStop {
  pub ratio: u8,
  pub color: StraightSRgba8,
}

#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
pub struct MorphColorStop {
  pub ratio: u8,
  pub morph_ratio: u8,
  pub color: StraightSRgba8,
  pub morph_color: StraightSRgba8,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
pub struct Gradient {
  pub spread: GradientSpread,
  pub color_space: ColorSpace,
  pub colors: Vec<ColorStop>,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
pub struct MorphGradient {
  pub spread: GradientSpread,
  pub color_space: ColorSpace,
  pub colors: Vec<MorphColorStop>,
}
