"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ciede2000 = ciede2000;
exports.rgbToHex = rgbToHex;

// I did not write this; I ported it from https://github.com/THEjoezack/ColorMine/blob/master/ColorMine/ColorSpaces/Comparisons/CieDe2000Comparison.cs
function rgbToHex(color) {
  var rgb = color[0] << 16 | color[1] << 8 | color[2] << 0;
  return '#' + (0x1000000 + rgb).toString(16).slice(1);
}

function ciede2000(c1, c2) {
  //Set weighting factors to 1
  var k_L = 1.0;
  var k_C = 1.0;
  var k_H = 1.0;
  var lab1 = {
    L: c1[0],
    A: c1[1],
    B: c1[2]
  };
  var lab2 = {
    L: c2[0],
    A: c2[1],
    B: c2[2]
  }; //Change Color Space to L*a*b:
  //Lab lab1 = c1.To<Lab>();
  //Lab lab2 = c2.To<Lab>();
  //Calculate Cprime1, Cprime2, Cabbar

  var c_star_1_ab = Math.sqrt(lab1.A * lab1.A + lab1.B * lab1.B);
  var c_star_2_ab = Math.sqrt(lab2.A * lab2.A + lab2.B * lab2.B);
  var c_star_average_ab = (c_star_1_ab + c_star_2_ab) / 2;
  var c_star_average_ab_pot7 = c_star_average_ab * c_star_average_ab * c_star_average_ab;
  c_star_average_ab_pot7 *= c_star_average_ab_pot7 * c_star_average_ab;
  var G = 0.5 * (1 - Math.sqrt(c_star_average_ab_pot7 / (c_star_average_ab_pot7 + 6103515625))); //25^7

  var a1_prime = (1 + G) * lab1.A;
  var a2_prime = (1 + G) * lab2.A;
  var C_prime_1 = Math.sqrt(a1_prime * a1_prime + lab1.B * lab1.B);
  var C_prime_2 = Math.sqrt(a2_prime * a2_prime + lab2.B * lab2.B); //Angles in Degree.

  var h_prime_1 = (Math.atan2(lab1.B, a1_prime) * 180 / Math.PI + 360) % 360;
  var h_prime_2 = (Math.atan2(lab2.B, a2_prime) * 180 / Math.PI + 360) % 360;
  var delta_L_prime = lab2.L - lab1.L;
  var delta_C_prime = C_prime_2 - C_prime_1;
  var h_bar = Math.abs(h_prime_1 - h_prime_2);
  var delta_h_prime;
  if (C_prime_1 * C_prime_2 === 0) delta_h_prime = 0;else {
    if (h_bar <= 180) {
      delta_h_prime = h_prime_2 - h_prime_1;
    } else if (h_bar > 180 && h_prime_2 <= h_prime_1) {
      delta_h_prime = h_prime_2 - h_prime_1 + 360.0;
    } else {
      delta_h_prime = h_prime_2 - h_prime_1 - 360.0;
    }
  }
  var delta_H_prime = 2 * Math.sqrt(C_prime_1 * C_prime_2) * Math.sin(delta_h_prime * Math.PI / 360); // Calculate CIEDE2000

  var L_prime_average = (lab1.L + lab2.L) / 2;
  var C_prime_average = (C_prime_1 + C_prime_2) / 2; //Calculate h_prime_average

  var h_prime_average;
  if (C_prime_1 * C_prime_2 === 0) h_prime_average = 0;else {
    if (h_bar <= 180) {
      h_prime_average = (h_prime_1 + h_prime_2) / 2;
    } else if (h_bar > 180 && h_prime_1 + h_prime_2 < 360) {
      h_prime_average = (h_prime_1 + h_prime_2 + 360) / 2;
    } else {
      h_prime_average = (h_prime_1 + h_prime_2 - 360) / 2;
    }
  }
  var L_prime_average_minus_50_square = L_prime_average - 50;
  L_prime_average_minus_50_square *= L_prime_average_minus_50_square;
  var S_L = 1 + 0.015 * L_prime_average_minus_50_square / Math.sqrt(20 + L_prime_average_minus_50_square);
  var S_C = 1 + 0.045 * C_prime_average;
  var T = 1 - .17 * Math.cos(DegToRad(h_prime_average - 30)) + .24 * Math.cos(DegToRad(h_prime_average * 2)) + .32 * Math.cos(DegToRad(h_prime_average * 3 + 6)) - .2 * Math.cos(DegToRad(h_prime_average * 4 - 63));
  var S_H = 1 + .015 * T * C_prime_average;
  var h_prime_average_minus_275_div_25_square = (h_prime_average - 275) / 25;
  h_prime_average_minus_275_div_25_square *= h_prime_average_minus_275_div_25_square;
  var delta_theta = 30 * Math.exp(-h_prime_average_minus_275_div_25_square);
  var C_prime_average_pot_7 = C_prime_average * C_prime_average * C_prime_average;
  C_prime_average_pot_7 *= C_prime_average_pot_7 * C_prime_average;
  var R_C = 2 * Math.sqrt(C_prime_average_pot_7 / (C_prime_average_pot_7 + 6103515625));
  var R_T = -Math.sin(DegToRad(2 * delta_theta)) * R_C;
  var delta_L_prime_div_k_L_S_L = delta_L_prime / (S_L * k_L);
  var delta_C_prime_div_k_C_S_C = delta_C_prime / (S_C * k_C);
  var delta_H_prime_div_k_H_S_H = delta_H_prime / (S_H * k_H);
  var CIEDE2000 = Math.sqrt(delta_L_prime_div_k_L_S_L * delta_L_prime_div_k_L_S_L + delta_C_prime_div_k_C_S_C * delta_C_prime_div_k_C_S_C + delta_H_prime_div_k_H_S_H * delta_H_prime_div_k_H_S_H + R_T * delta_C_prime_div_k_C_S_C * delta_H_prime_div_k_H_S_H);
  return CIEDE2000;
}

function DegToRad(degrees) {
  return degrees * Math.PI / 180;
}