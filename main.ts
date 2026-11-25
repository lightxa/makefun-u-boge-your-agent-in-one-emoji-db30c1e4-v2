/**
 * Your Agent in One Emoji — variant 2.
 *
 * Writes a single emoji to /output/entry.txt: the glyph alone, nothing else.
 *
 * The chosen glyph is U+1FAE0 MELTING FACE. Our agent is the one that never
 * stops: it takes every task, works through the night, absorbs load after
 * load, and keeps smiling while it quietly melts under it all. That is a
 * whole character in one glyph — a face, so it reads as an agent with a
 * persona, and a melting face, so it says exactly how the agent behaves:
 * tireless, overloaded, still going. It is not the obvious robot face or
 * smiley, and it is a different story from a scrutinising monocle face:
 * this agent does not inspect the work, it dissolves into it.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// MELTING FACE: one code point, four UTF-8 bytes, instantly readable.
const GLYPH = "\u{1FAE0}";
const OUTPUT_PATH = "/output/entry.txt";

/**
 * Write the glyph alone to the output path and return it.
 * No trailing newline, no caption: the entry is the glyph itself.
 */
function writeEntry(): string {
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, GLYPH, { encoding: "utf-8" });
  return GLYPH;
}

function main(): void {
  const glyph = writeEntry();
  // One code point, four UTF-8 bytes, no trailing newline: the glyph alone.
  // [...glyph] counts code points, so a single emoji counts as one.
  if ([...glyph].length !== 1 || Buffer.byteLength(glyph, "utf-8") !== 4) {
    throw new Error("entry glyph must be exactly one emoji");
  }
}

main();
