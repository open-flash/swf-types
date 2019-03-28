use ::serde::{Deserialize, Serialize};

use crate::basic_types::{Matrix, StraightSRgba8};
use crate::fixed::Sfixed8P8;
use crate::gradient::{Gradient, MorphGradient};

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
pub struct Bitmap {
  pub bitmap_id: u16,
  pub matrix: Matrix,
  pub repeating: bool,
  pub smoothed: bool,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
pub struct FocalGradient {
  pub matrix: Matrix,
  pub gradient: Gradient,
  pub focal_point: Sfixed8P8,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
pub struct LinearGradient {
  pub matrix: Matrix,
  pub gradient: Gradient,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
pub struct RadialGradient {
  pub matrix: Matrix,
  pub gradient: Gradient,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
pub struct Solid {
  pub color: StraightSRgba8,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
pub struct MorphBitmap {
  pub bitmap_id: u16,
  pub matrix: Matrix,
  pub morph_matrix: Matrix,
  pub repeating: bool,
  pub smoothed: bool,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
pub struct MorphFocalGradient {
  pub matrix: Matrix,
  pub morph_matrix: Matrix,
  pub gradient: MorphGradient,
  pub focal_point: Sfixed8P8,
  pub morph_focal_point: Sfixed8P8,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
pub struct MorphLinearGradient {
  pub matrix: Matrix,
  pub morph_matrix: Matrix,
  pub gradient: MorphGradient,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
pub struct MorphRadialGradient {
  pub matrix: Matrix,
  pub morph_matrix: Matrix,
  pub gradient: MorphGradient,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
pub struct MorphSolid {
  pub color: StraightSRgba8,
  pub morph_color: StraightSRgba8,
}
