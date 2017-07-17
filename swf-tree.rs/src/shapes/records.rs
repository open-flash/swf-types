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
  pub move_to: Option<Vector2D>,
  pub left_fill: Option<usize>,
  pub right_fill: Option<usize>,
  pub line_style: Option<usize>,
  pub fill_styles: Option<Vec<FillStyle>>,
  pub line_styles: Option<Vec<LineStyle>>,
}
