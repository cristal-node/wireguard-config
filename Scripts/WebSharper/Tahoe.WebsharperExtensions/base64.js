(function(base64) {
    "use strict";
    /*
    MIT License

    Copyright (c) 2020 Egor Nepomnyaschih

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    */

    /*
    // This constant can also be computed with the following algorithm:
    const base64abc = [],
        A = "A".charCodeAt(0),
        a = "a".charCodeAt(0),
        n = "0".charCodeAt(0);
    for (let i = 0; i < 26; ++i) {
        base64abc.push(String.fromCharCode(A + i));
    }
    for (let i = 0; i < 26; ++i) {
        base64abc.push(String.fromCharCode(a + i));
    }
    for (let i = 0; i < 10; ++i) {
        base64abc.push(String.fromCharCode(n + i));
    }
    base64abc.push("+");
    base64abc.push("/");
    */

    var base64abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"];
    /*
    // This constant can also be computed with the following algorithm:
    const l = 256, base64codes = new Uint8Array(l);
    for (let i = 0; i < l; ++i) {
        base64codes[i] = 255; // invalid character
    }
    base64abc.forEach((char, index) => {
        base64codes[char.charCodeAt(0)] = index;
    });
    base64codes["=".charCodeAt(0)] = 0; // ignored anyway, so we just need to prevent an error
    */

    var base64codes = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 62, 255, 255, 255, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 255, 255, 255, 0, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];

    function getBase64Code(charCode) {
        if (charCode > base64codes.length) {
            throw new Error("Unable to parse base64 string.");
        }

        var code = base64codes[charCode];

        if (code === 255) {
            throw new Error("Unable to parse base64 string.");
        }

        return code;
    }

    base64.bytesToBase64 = function bytesToBase64(bytes) {
        var result = '',
            i,
            l = bytes.length;

        for (i = 2; i < l; i += 3) {
            result += base64abc[bytes[i - 2] >> 2];
            result += base64abc[(bytes[i - 2] & 0x03) << 4 | bytes[i - 1] >> 4];
            result += base64abc[(bytes[i - 1] & 0x0F) << 2 | bytes[i] >> 6];
            result += base64abc[bytes[i] & 0x3F];
        }

        if (i === l + 1) {
            // 1 octet yet to write
            result += base64abc[bytes[i - 2] >> 2];
            result += base64abc[(bytes[i - 2] & 0x03) << 4];
            result += "==";
        }

        if (i === l) {
            // 2 octets yet to write
            result += base64abc[bytes[i - 2] >> 2];
            result += base64abc[(bytes[i - 2] & 0x03) << 4 | bytes[i - 1] >> 4];
            result += base64abc[(bytes[i - 1] & 0x0F) << 2];
            result += "=";
        }

        return result;
    };

    base64.base64ToBytes = function base64ToBytes(str) {
        if (str.length % 4 !== 0) {
            throw new Error("Unable to parse base64 string.");
        }

        var index = str.indexOf("=");

        if (index !== -1 && index < str.length - 2) {
            throw new Error("Unable to parse base64 string.");
        }

        var missingOctets = str.endsWith("==") ? 2 : str.endsWith("=") ? 1 : 0,
            n = str.length,
            result = new Uint8Array(3 * (n / 4)),
            buffer;

        for (var i = 0, j = 0; i < n; i += 4, j += 3) {
            buffer = getBase64Code(str.charCodeAt(i)) << 18 | getBase64Code(str.charCodeAt(i + 1)) << 12 | getBase64Code(str.charCodeAt(i + 2)) << 6 | getBase64Code(str.charCodeAt(i + 3));
            result[j] = buffer >> 16;
            result[j + 1] = buffer >> 8 & 0xFF;
            result[j + 2] = buffer & 0xFF;
        }

        return result.subarray(0, result.length - missingOctets);
    };

    base64.base64Encode = function base64encode(str) {
        var encoder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new TextEncoder();
        return bytesToBase64(encoder.encode(str));
    };

    base64.base64decode = function base64decode(str) {
        var decoder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new TextDecoder();
        return decoder.decode(base64ToBytes(str));
    };

    //# sourceMappingURL=data:application/json;charset=utf-8;base64,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bnRlbnQiOlsiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgMjAyMCBFZ29yIE5lcG9tbnlhc2NoaWhcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbmNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblNPRlRXQVJFLlxuKi9cblxuLypcbi8vIFRoaXMgY29uc3RhbnQgY2FuIGFsc28gYmUgY29tcHV0ZWQgd2l0aCB0aGUgZm9sbG93aW5nIGFsZ29yaXRobTpcbmNvbnN0IGJhc2U2NGFiYyA9IFtdLFxuXHRBID0gXCJBXCIuY2hhckNvZGVBdCgwKSxcblx0YSA9IFwiYVwiLmNoYXJDb2RlQXQoMCksXG5cdG4gPSBcIjBcIi5jaGFyQ29kZUF0KDApO1xuZm9yIChsZXQgaSA9IDA7IGkgPCAyNjsgKytpKSB7XG5cdGJhc2U2NGFiYy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoQSArIGkpKTtcbn1cbmZvciAobGV0IGkgPSAwOyBpIDwgMjY7ICsraSkge1xuXHRiYXNlNjRhYmMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGEgKyBpKSk7XG59XG5mb3IgKGxldCBpID0gMDsgaSA8IDEwOyArK2kpIHtcblx0YmFzZTY0YWJjLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShuICsgaSkpO1xufVxuYmFzZTY0YWJjLnB1c2goXCIrXCIpO1xuYmFzZTY0YWJjLnB1c2goXCIvXCIpO1xuKi9cbmNvbnN0IGJhc2U2NGFiYyA9IFtcblx0XCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiLCBcIklcIiwgXCJKXCIsIFwiS1wiLCBcIkxcIiwgXCJNXCIsXG5cdFwiTlwiLCBcIk9cIiwgXCJQXCIsIFwiUVwiLCBcIlJcIiwgXCJTXCIsIFwiVFwiLCBcIlVcIiwgXCJWXCIsIFwiV1wiLCBcIlhcIiwgXCJZXCIsIFwiWlwiLFxuXHRcImFcIiwgXCJiXCIsIFwiY1wiLCBcImRcIiwgXCJlXCIsIFwiZlwiLCBcImdcIiwgXCJoXCIsIFwiaVwiLCBcImpcIiwgXCJrXCIsIFwibFwiLCBcIm1cIixcblx0XCJuXCIsIFwib1wiLCBcInBcIiwgXCJxXCIsIFwiclwiLCBcInNcIiwgXCJ0XCIsIFwidVwiLCBcInZcIiwgXCJ3XCIsIFwieFwiLCBcInlcIiwgXCJ6XCIsXG5cdFwiMFwiLCBcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIitcIiwgXCIvXCJcbl07XG5cbi8qXG4vLyBUaGlzIGNvbnN0YW50IGNhbiBhbHNvIGJlIGNvbXB1dGVkIHdpdGggdGhlIGZvbGxvd2luZyBhbGdvcml0aG06XG5jb25zdCBsID0gMjU2LCBiYXNlNjRjb2RlcyA9IG5ldyBVaW50OEFycmF5KGwpO1xuZm9yIChsZXQgaSA9IDA7IGkgPCBsOyArK2kpIHtcblx0YmFzZTY0Y29kZXNbaV0gPSAyNTU7IC8vIGludmFsaWQgY2hhcmFjdGVyXG59XG5iYXNlNjRhYmMuZm9yRWFjaCgoY2hhciwgaW5kZXgpID0+IHtcblx0YmFzZTY0Y29kZXNbY2hhci5jaGFyQ29kZUF0KDApXSA9IGluZGV4O1xufSk7XG5iYXNlNjRjb2Rlc1tcIj1cIi5jaGFyQ29kZUF0KDApXSA9IDA7IC8vIGlnbm9yZWQgYW55d2F5LCBzbyB3ZSBqdXN0IG5lZWQgdG8gcHJldmVudCBhbiBlcnJvclxuKi9cbmNvbnN0IGJhc2U2NGNvZGVzID0gW1xuXHQyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsXG5cdDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSxcblx0MjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDYyLCAyNTUsIDI1NSwgMjU1LCA2Myxcblx0NTIsIDUzLCA1NCwgNTUsIDU2LCA1NywgNTgsIDU5LCA2MCwgNjEsIDI1NSwgMjU1LCAyNTUsIDAsIDI1NSwgMjU1LFxuXHQyNTUsIDAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNCxcblx0MTUsIDE2LCAxNywgMTgsIDE5LCAyMCwgMjEsIDIyLCAyMywgMjQsIDI1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDI1NSxcblx0MjU1LCAyNiwgMjcsIDI4LCAyOSwgMzAsIDMxLCAzMiwgMzMsIDM0LCAzNSwgMzYsIDM3LCAzOCwgMzksIDQwLFxuXHQ0MSwgNDIsIDQzLCA0NCwgNDUsIDQ2LCA0NywgNDgsIDQ5LCA1MCwgNTFcbl07XG5cbmZ1bmN0aW9uIGdldEJhc2U2NENvZGUoY2hhckNvZGU6IG51bWJlcikge1xuXHRpZiAoY2hhckNvZGUgPiBiYXNlNjRjb2Rlcy5sZW5ndGgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gcGFyc2UgYmFzZTY0IHN0cmluZy5cIik7XG5cdH1cblx0Y29uc3QgY29kZSA9IGJhc2U2NGNvZGVzW2NoYXJDb2RlXTtcblx0aWYgKGNvZGUgPT09IDI1NSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBwYXJzZSBiYXNlNjQgc3RyaW5nLlwiKTtcblx0fVxuXHRyZXR1cm4gY29kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ5dGVzVG9CYXNlNjQoYnl0ZXM6IG51bWJlcltdIHwgVWludDhBcnJheSkge1xuXHRsZXQgcmVzdWx0ID0gJycsIGksIGwgPSBieXRlcy5sZW5ndGg7XG5cdGZvciAoaSA9IDI7IGkgPCBsOyBpICs9IDMpIHtcblx0XHRyZXN1bHQgKz0gYmFzZTY0YWJjW2J5dGVzW2kgLSAyXSA+PiAyXTtcblx0XHRyZXN1bHQgKz0gYmFzZTY0YWJjWygoYnl0ZXNbaSAtIDJdICYgMHgwMykgPDwgNCkgfCAoYnl0ZXNbaSAtIDFdID4+IDQpXTtcblx0XHRyZXN1bHQgKz0gYmFzZTY0YWJjWygoYnl0ZXNbaSAtIDFdICYgMHgwRikgPDwgMikgfCAoYnl0ZXNbaV0gPj4gNildO1xuXHRcdHJlc3VsdCArPSBiYXNlNjRhYmNbYnl0ZXNbaV0gJiAweDNGXTtcblx0fVxuXHRpZiAoaSA9PT0gbCArIDEpIHsgLy8gMSBvY3RldCB5ZXQgdG8gd3JpdGVcblx0XHRyZXN1bHQgKz0gYmFzZTY0YWJjW2J5dGVzW2kgLSAyXSA+PiAyXTtcblx0XHRyZXN1bHQgKz0gYmFzZTY0YWJjWyhieXRlc1tpIC0gMl0gJiAweDAzKSA8PCA0XTtcblx0XHRyZXN1bHQgKz0gXCI9PVwiO1xuXHR9XG5cdGlmIChpID09PSBsKSB7IC8vIDIgb2N0ZXRzIHlldCB0byB3cml0ZVxuXHRcdHJlc3VsdCArPSBiYXNlNjRhYmNbYnl0ZXNbaSAtIDJdID4+IDJdO1xuXHRcdHJlc3VsdCArPSBiYXNlNjRhYmNbKChieXRlc1tpIC0gMl0gJiAweDAzKSA8PCA0KSB8IChieXRlc1tpIC0gMV0gPj4gNCldO1xuXHRcdHJlc3VsdCArPSBiYXNlNjRhYmNbKGJ5dGVzW2kgLSAxXSAmIDB4MEYpIDw8IDJdO1xuXHRcdHJlc3VsdCArPSBcIj1cIjtcblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyhzdHI6IHN0cmluZykge1xuXHRpZiAoc3RyLmxlbmd0aCAlIDQgIT09IDApIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gcGFyc2UgYmFzZTY0IHN0cmluZy5cIik7XG5cdH1cblx0Y29uc3QgaW5kZXggPSBzdHIuaW5kZXhPZihcIj1cIik7XG5cdGlmIChpbmRleCAhPT0gLTEgJiYgaW5kZXggPCBzdHIubGVuZ3RoIC0gMikge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBwYXJzZSBiYXNlNjQgc3RyaW5nLlwiKTtcblx0fVxuXHRsZXQgbWlzc2luZ09jdGV0cyA9IHN0ci5lbmRzV2l0aChcIj09XCIpID8gMiA6IHN0ci5lbmRzV2l0aChcIj1cIikgPyAxIDogMCxcblx0XHRuID0gc3RyLmxlbmd0aCxcblx0XHRyZXN1bHQgPSBuZXcgVWludDhBcnJheSgzICogKG4gLyA0KSksXG5cdFx0YnVmZmVyOiBudW1iZXI7XG5cdGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IG47IGkgKz0gNCwgaiArPSAzKSB7XG5cdFx0YnVmZmVyID1cblx0XHRcdGdldEJhc2U2NENvZGUoc3RyLmNoYXJDb2RlQXQoaSkpIDw8IDE4IHxcblx0XHRcdGdldEJhc2U2NENvZGUoc3RyLmNoYXJDb2RlQXQoaSArIDEpKSA8PCAxMiB8XG5cdFx0XHRnZXRCYXNlNjRDb2RlKHN0ci5jaGFyQ29kZUF0KGkgKyAyKSkgPDwgNiB8XG5cdFx0XHRnZXRCYXNlNjRDb2RlKHN0ci5jaGFyQ29kZUF0KGkgKyAzKSk7XG5cdFx0cmVzdWx0W2pdID0gYnVmZmVyID4+IDE2O1xuXHRcdHJlc3VsdFtqICsgMV0gPSAoYnVmZmVyID4+IDgpICYgMHhGRjtcblx0XHRyZXN1bHRbaiArIDJdID0gYnVmZmVyICYgMHhGRjtcblx0fVxuXHRyZXR1cm4gcmVzdWx0LnN1YmFycmF5KDAsIHJlc3VsdC5sZW5ndGggLSBtaXNzaW5nT2N0ZXRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhc2U2NGVuY29kZShzdHI6IHN0cmluZywgZW5jb2RlcjogeyBlbmNvZGU6IChzdHI6IHN0cmluZykgPT4gVWludDhBcnJheSB8IG51bWJlcltdIH0gPSBuZXcgVGV4dEVuY29kZXIoKSkge1xuXHRyZXR1cm4gYnl0ZXNUb0Jhc2U2NChlbmNvZGVyLmVuY29kZShzdHIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhc2U2NGRlY29kZShzdHI6IHN0cmluZywgZGVjb2RlcjogeyBkZWNvZGU6IChieXRlczogVWludDhBcnJheSkgPT4gc3RyaW5nIH0gPSBuZXcgVGV4dERlY29kZXIoKSkge1xuXHRyZXR1cm4gZGVjb2Rlci5kZWNvZGUoYmFzZTY0VG9CeXRlcyhzdHIpKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=

})(typeof module !== 'undefined' && module.exports ? module.exports : (self.base64 = self.base64 || {}));