import { rgbToHex, hexToRgb } from "../";
import { expect } from "chai";

describe("Color Code Converter", function () {
  describe("RGB to Hex conversion", function () {
    it("converts the basic colors", function () {
      var redHex = rgbToHex(255, 0, 0);
      var greenHex = rgbToHex(0, 255, 0);
      var blueHex = rgbToHex(0, 0, 255);

      expect(redHex).to.equal("ff0000");
      expect(greenHex).to.equal("00ff00");
      expect(blueHex).to.equal("0000ff");
    });
  });

  describe("Hex to RGB conversion", function () {
    it("converts the basic colors", function () {
      var red = hexToRgb("ff0000");
      var green = hexToRgb("00ff00");
      var blue = hexToRgb("0000ff");

      expect(red).to.deep.equal([255, 0, 0]);
      expect(green).to.deep.equal([0, 255, 0]);
      expect(blue).to.deep.equal([0, 0, 255]);
    });
  });
});
