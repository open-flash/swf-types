#[cfg(feature = "serde")]
use ::serde::{Deserialize, Serialize};

use crate::basic_types::StraightSRgba8;

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize), serde(rename_all = "PascalCase"))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub enum GradientSpread {
  Pad,
  Reflect,
  Repeat,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize), serde(rename_all = "PascalCase"))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub enum ColorSpace {
  SRgb,
  LinearRgb,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct ColorStop {
  pub ratio: u8,
  pub color: StraightSRgba8,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct MorphColorStop {
  pub ratio: u8,
  pub morph_ratio: u8,
  pub color: StraightSRgba8,
  pub morph_color: StraightSRgba8,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct Gradient {
  pub spread: GradientSpread,
  pub color_space: ColorSpace,
  pub colors: Vec<ColorStop>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct MorphGradient {
  pub spread: GradientSpread,
  pub color_space: ColorSpace,
  pub colors: Vec<MorphColorStop>,
}
