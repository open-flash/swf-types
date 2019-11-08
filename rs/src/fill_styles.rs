#[cfg(feature = "serde")]
use ::serde::{Deserialize, Serialize};

use crate::basic_types::{Matrix, StraightSRgba8};
use crate::fixed::Sfixed8P8;
use crate::gradient::{Gradient, MorphGradient};

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct Bitmap {
  pub bitmap_id: u16,
  pub matrix: Matrix,
  pub repeating: bool,
  pub smoothed: bool,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct FocalGradient {
  pub matrix: Matrix,
  pub gradient: Gradient,
  pub focal_point: Sfixed8P8,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct LinearGradient {
  pub matrix: Matrix,
  pub gradient: Gradient,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct RadialGradient {
  pub matrix: Matrix,
  pub gradient: Gradient,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct Solid {
  pub color: StraightSRgba8,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct MorphBitmap {
  pub bitmap_id: u16,
  pub matrix: Matrix,
  pub morph_matrix: Matrix,
  pub repeating: bool,
  pub smoothed: bool,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct MorphFocalGradient {
  pub matrix: Matrix,
  pub morph_matrix: Matrix,
  pub gradient: MorphGradient,
  pub focal_point: Sfixed8P8,
  pub morph_focal_point: Sfixed8P8,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct MorphLinearGradient {
  pub matrix: Matrix,
  pub morph_matrix: Matrix,
  pub gradient: MorphGradient,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct MorphRadialGradient {
  pub matrix: Matrix,
  pub morph_matrix: Matrix,
  pub gradient: MorphGradient,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct MorphSolid {
  pub color: StraightSRgba8,
  pub morph_color: StraightSRgba8,
}
