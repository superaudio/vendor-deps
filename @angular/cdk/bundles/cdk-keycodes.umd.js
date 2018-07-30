/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define('@angular/cdk/keycodes', ['exports'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.cdk = global.ng.cdk || {}, global.ng.cdk.keycodes = {})));
}(this, (function (exports) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var /** @type {?} */ MAC_ENTER = 3;
var /** @type {?} */ BACKSPACE = 8;
var /** @type {?} */ TAB = 9;
var /** @type {?} */ NUM_CENTER = 12;
var /** @type {?} */ ENTER = 13;
var /** @type {?} */ SHIFT = 16;
var /** @type {?} */ CONTROL = 17;
var /** @type {?} */ ALT = 18;
var /** @type {?} */ PAUSE = 19;
var /** @type {?} */ CAPS_LOCK = 20;
var /** @type {?} */ ESCAPE = 27;
var /** @type {?} */ SPACE = 32;
var /** @type {?} */ PAGE_UP = 33;
var /** @type {?} */ PAGE_DOWN = 34;
var /** @type {?} */ END = 35;
var /** @type {?} */ HOME = 36;
var /** @type {?} */ LEFT_ARROW = 37;
var /** @type {?} */ UP_ARROW = 38;
var /** @type {?} */ RIGHT_ARROW = 39;
var /** @type {?} */ DOWN_ARROW = 40;
var /** @type {?} */ PLUS_SIGN = 43;
var /** @type {?} */ PRINT_SCREEN = 44;
var /** @type {?} */ INSERT = 45;
var /** @type {?} */ DELETE = 46;
var /** @type {?} */ ZERO = 48;
var /** @type {?} */ ONE = 49;
var /** @type {?} */ TWO = 50;
var /** @type {?} */ THREE = 51;
var /** @type {?} */ FOUR = 52;
var /** @type {?} */ FIVE = 53;
var /** @type {?} */ SIX = 54;
var /** @type {?} */ SEVEN = 55;
var /** @type {?} */ EIGHT = 56;
var /** @type {?} */ NINE = 57;
var /** @type {?} */ FF_SEMICOLON = 59; // Firefox (Gecko) fires this for semicolon instead of 186
var /** @type {?} */ FF_EQUALS = 61; // Firefox (Gecko) fires this for equals instead of 187
var /** @type {?} */ QUESTION_MARK = 63;
var /** @type {?} */ AT_SIGN = 64;
var /** @type {?} */ A = 65;
var /** @type {?} */ B = 66;
var /** @type {?} */ C = 67;
var /** @type {?} */ D = 68;
var /** @type {?} */ E = 69;
var /** @type {?} */ F = 70;
var /** @type {?} */ G = 71;
var /** @type {?} */ H = 72;
var /** @type {?} */ I = 73;
var /** @type {?} */ J = 74;
var /** @type {?} */ K = 75;
var /** @type {?} */ L = 76;
var /** @type {?} */ M = 77;
var /** @type {?} */ N = 78;
var /** @type {?} */ O = 79;
var /** @type {?} */ P = 80;
var /** @type {?} */ Q = 81;
var /** @type {?} */ R = 82;
var /** @type {?} */ S = 83;
var /** @type {?} */ T = 84;
var /** @type {?} */ U = 85;
var /** @type {?} */ V = 86;
var /** @type {?} */ W = 87;
var /** @type {?} */ X = 88;
var /** @type {?} */ Y = 89;
var /** @type {?} */ Z = 90;
var /** @type {?} */ META = 91; // WIN_KEY_LEFT
var /** @type {?} */ MAC_WK_CMD_LEFT = 91;
var /** @type {?} */ MAC_WK_CMD_RIGHT = 93;
var /** @type {?} */ CONTEXT_MENU = 93;
var /** @type {?} */ NUMPAD_ZERO = 96;
var /** @type {?} */ NUMPAD_ONE = 97;
var /** @type {?} */ NUMPAD_TWO = 98;
var /** @type {?} */ NUMPAD_THREE = 99;
var /** @type {?} */ NUMPAD_FOUR = 100;
var /** @type {?} */ NUMPAD_FIVE = 101;
var /** @type {?} */ NUMPAD_SIX = 102;
var /** @type {?} */ NUMPAD_SEVEN = 103;
var /** @type {?} */ NUMPAD_EIGHT = 104;
var /** @type {?} */ NUMPAD_NINE = 105;
var /** @type {?} */ NUMPAD_MULTIPLY = 106;
var /** @type {?} */ NUMPAD_PLUS = 107;
var /** @type {?} */ NUMPAD_MINUS = 109;
var /** @type {?} */ NUMPAD_PERIOD = 110;
var /** @type {?} */ NUMPAD_DIVIDE = 111;
var /** @type {?} */ F1 = 112;
var /** @type {?} */ F2 = 113;
var /** @type {?} */ F3 = 114;
var /** @type {?} */ F4 = 115;
var /** @type {?} */ F5 = 116;
var /** @type {?} */ F6 = 117;
var /** @type {?} */ F7 = 118;
var /** @type {?} */ F8 = 119;
var /** @type {?} */ F9 = 120;
var /** @type {?} */ F10 = 121;
var /** @type {?} */ F11 = 122;
var /** @type {?} */ F12 = 123;
var /** @type {?} */ NUM_LOCK = 144;
var /** @type {?} */ SCROLL_LOCK = 145;
var /** @type {?} */ FIRST_MEDIA = 166;
var /** @type {?} */ FF_MINUS = 173;
var /** @type {?} */ MUTE = 173; // Firefox (Gecko) fires 181 for MUTE
var /** @type {?} */ VOLUME_DOWN = 174; // Firefox (Gecko) fires 182 for VOLUME_DOWN
var /** @type {?} */ VOLUME_UP = 175; // Firefox (Gecko) fires 183 for VOLUME_UP
var /** @type {?} */ FF_MUTE = 181;
var /** @type {?} */ FF_VOLUME_DOWN = 182;
var /** @type {?} */ LAST_MEDIA = 183;
var /** @type {?} */ FF_VOLUME_UP = 183;
var /** @type {?} */ SEMICOLON = 186; // Firefox (Gecko) fires 59 for SEMICOLON
var /** @type {?} */ EQUALS = 187; // Firefox (Gecko) fires 61 for EQUALS
var /** @type {?} */ COMMA = 188;
var /** @type {?} */ DASH = 189; // Firefox (Gecko) fires 173 for DASH/MINUS
var /** @type {?} */ SLASH = 191;
var /** @type {?} */ APOSTROPHE = 192;
var /** @type {?} */ TILDE = 192;
var /** @type {?} */ OPEN_SQUARE_BRACKET = 219;
var /** @type {?} */ BACKSLASH = 220;
var /** @type {?} */ CLOSE_SQUARE_BRACKET = 221;
var /** @type {?} */ SINGLE_QUOTE = 222;
var /** @type {?} */ MAC_META = 224;

exports.MAC_ENTER = MAC_ENTER;
exports.BACKSPACE = BACKSPACE;
exports.TAB = TAB;
exports.NUM_CENTER = NUM_CENTER;
exports.ENTER = ENTER;
exports.SHIFT = SHIFT;
exports.CONTROL = CONTROL;
exports.ALT = ALT;
exports.PAUSE = PAUSE;
exports.CAPS_LOCK = CAPS_LOCK;
exports.ESCAPE = ESCAPE;
exports.SPACE = SPACE;
exports.PAGE_UP = PAGE_UP;
exports.PAGE_DOWN = PAGE_DOWN;
exports.END = END;
exports.HOME = HOME;
exports.LEFT_ARROW = LEFT_ARROW;
exports.UP_ARROW = UP_ARROW;
exports.RIGHT_ARROW = RIGHT_ARROW;
exports.DOWN_ARROW = DOWN_ARROW;
exports.PLUS_SIGN = PLUS_SIGN;
exports.PRINT_SCREEN = PRINT_SCREEN;
exports.INSERT = INSERT;
exports.DELETE = DELETE;
exports.ZERO = ZERO;
exports.ONE = ONE;
exports.TWO = TWO;
exports.THREE = THREE;
exports.FOUR = FOUR;
exports.FIVE = FIVE;
exports.SIX = SIX;
exports.SEVEN = SEVEN;
exports.EIGHT = EIGHT;
exports.NINE = NINE;
exports.FF_SEMICOLON = FF_SEMICOLON;
exports.FF_EQUALS = FF_EQUALS;
exports.QUESTION_MARK = QUESTION_MARK;
exports.AT_SIGN = AT_SIGN;
exports.A = A;
exports.B = B;
exports.C = C;
exports.D = D;
exports.E = E;
exports.F = F;
exports.G = G;
exports.H = H;
exports.I = I;
exports.J = J;
exports.K = K;
exports.L = L;
exports.M = M;
exports.N = N;
exports.O = O;
exports.P = P;
exports.Q = Q;
exports.R = R;
exports.S = S;
exports.T = T;
exports.U = U;
exports.V = V;
exports.W = W;
exports.X = X;
exports.Y = Y;
exports.Z = Z;
exports.META = META;
exports.MAC_WK_CMD_LEFT = MAC_WK_CMD_LEFT;
exports.MAC_WK_CMD_RIGHT = MAC_WK_CMD_RIGHT;
exports.CONTEXT_MENU = CONTEXT_MENU;
exports.NUMPAD_ZERO = NUMPAD_ZERO;
exports.NUMPAD_ONE = NUMPAD_ONE;
exports.NUMPAD_TWO = NUMPAD_TWO;
exports.NUMPAD_THREE = NUMPAD_THREE;
exports.NUMPAD_FOUR = NUMPAD_FOUR;
exports.NUMPAD_FIVE = NUMPAD_FIVE;
exports.NUMPAD_SIX = NUMPAD_SIX;
exports.NUMPAD_SEVEN = NUMPAD_SEVEN;
exports.NUMPAD_EIGHT = NUMPAD_EIGHT;
exports.NUMPAD_NINE = NUMPAD_NINE;
exports.NUMPAD_MULTIPLY = NUMPAD_MULTIPLY;
exports.NUMPAD_PLUS = NUMPAD_PLUS;
exports.NUMPAD_MINUS = NUMPAD_MINUS;
exports.NUMPAD_PERIOD = NUMPAD_PERIOD;
exports.NUMPAD_DIVIDE = NUMPAD_DIVIDE;
exports.F1 = F1;
exports.F2 = F2;
exports.F3 = F3;
exports.F4 = F4;
exports.F5 = F5;
exports.F6 = F6;
exports.F7 = F7;
exports.F8 = F8;
exports.F9 = F9;
exports.F10 = F10;
exports.F11 = F11;
exports.F12 = F12;
exports.NUM_LOCK = NUM_LOCK;
exports.SCROLL_LOCK = SCROLL_LOCK;
exports.FIRST_MEDIA = FIRST_MEDIA;
exports.FF_MINUS = FF_MINUS;
exports.MUTE = MUTE;
exports.VOLUME_DOWN = VOLUME_DOWN;
exports.VOLUME_UP = VOLUME_UP;
exports.FF_MUTE = FF_MUTE;
exports.FF_VOLUME_DOWN = FF_VOLUME_DOWN;
exports.LAST_MEDIA = LAST_MEDIA;
exports.FF_VOLUME_UP = FF_VOLUME_UP;
exports.SEMICOLON = SEMICOLON;
exports.EQUALS = EQUALS;
exports.COMMA = COMMA;
exports.DASH = DASH;
exports.SLASH = SLASH;
exports.APOSTROPHE = APOSTROPHE;
exports.TILDE = TILDE;
exports.OPEN_SQUARE_BRACKET = OPEN_SQUARE_BRACKET;
exports.BACKSLASH = BACKSLASH;
exports.CLOSE_SQUARE_BRACKET = CLOSE_SQUARE_BRACKET;
exports.SINGLE_QUOTE = SINGLE_QUOTE;
exports.MAC_META = MAC_META;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cdk-keycodes.umd.js.map
