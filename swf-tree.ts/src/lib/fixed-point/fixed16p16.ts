import {Sint32} from "semantic-types";
import {FixedPoint} from "./fixed-point";
import {FixedPointType} from "./type";

/**
 * Signed Fixed-Point number with an 16-bit integer part and an 16-bit fractional part
 */
export class Fixed16P16 extends FixedPoint {
  static signed: boolean = true;
  static intBits: number = 16;
  static fracBits: number = 16;
  static type: FixedPointType<Fixed16P16> = new FixedPointType<Fixed16P16>({type: Fixed16P16});

  protected constructor(epsilons: number) {
    super(epsilons, Fixed16P16.signed, Fixed16P16.intBits, Fixed16P16.fracBits);
  }

  static fromEpsilons(epsilons: Sint32): Fixed16P16 {
    return new Fixed16P16(epsilons);
  }

  static fromValue(value: number): Fixed16P16 {
    return new Fixed16P16(value * Math.pow(2, Fixed16P16.fracBits));
  }
}
