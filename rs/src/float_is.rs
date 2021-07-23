pub trait Is {
  fn is(&self, other: &Self) -> bool;
}

impl Is for f32 {
  fn is(&self, other: &f32) -> bool {
    self.to_bits() == other.to_bits()
  }
}

impl Is for f64 {
  fn is(&self, other: &f64) -> bool {
    self.to_bits() == other.to_bits()
  }
}

impl<T: Is> Is for Vec<T> {
  fn is(&self, other: &Self) -> bool {
    if self.len() != other.len() {
      return false;
    }
    for (i, left) in self.iter().enumerate() {
      if !left.is(&other[i]) {
        return false;
      }
    }
    true
  }
}

impl Is for [f32; 20] {
  fn is(&self, other: &Self) -> bool {
    for i in 0..20 {
      if !self[i].is(&other[i]) {
        return false;
      }
    }
    true
  }
}

#[cfg(test)]
mod test_float_is {
  use super::Is;

  #[test]
  fn test_f32_is() {
    assert!(::std::f32::NAN.is(&::std::f32::NAN))
  }
}
