use crate::basic_types::Vector2D;
use crate::ShapeStyles;

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
pub struct CurvedEdge {
  pub control_delta: Vector2D,
  pub anchor_delta: Vector2D,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
pub struct StraightEdge {
  pub delta: Vector2D,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
pub struct StyleChange {
  #[serde(skip_serializing_if = "Option::is_none")]
  pub move_to: Option<Vector2D>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub left_fill: Option<usize>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub right_fill: Option<usize>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub line_style: Option<usize>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub new_styles: Option<ShapeStyles>,
}
