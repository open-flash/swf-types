use basic_types::Vector2D;
use shapes::FillStyle;
use shapes::LineStyle;

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct CurvedEdge {
  pub control_delta: Vector2D,
  pub end_delta: Vector2D,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct StraightEdge {
  pub end_delta: Vector2D,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct StyleChange {
  #[serde(skip_serializing_if="Option::is_none")]
  pub move_to: Option<Vector2D>,
  #[serde(skip_serializing_if="Option::is_none")]
  pub left_fill: Option<usize>,
  #[serde(skip_serializing_if="Option::is_none")]
  pub right_fill: Option<usize>,
  #[serde(skip_serializing_if="Option::is_none")]
  pub line_style: Option<usize>,
  #[serde(skip_serializing_if="Option::is_none")]
  pub fill_styles: Option<Vec<FillStyle>>,
  #[serde(skip_serializing_if="Option::is_none")]
  pub line_styles: Option<Vec<LineStyle>>,
}
