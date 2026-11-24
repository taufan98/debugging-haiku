// Seventeen Syllables of Debugging — writes one original haiku to /output/entry.txt.
// Node 22, standard library only, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const HAIKU =
  "Breakpoint holds its breath\n" + // 5: Break-point(2) holds its breath
  "the log line lies once again\n" + // 7: the log line lies once a-gain(2)
  "I wrote it myself"; // 5: I wrote it my-self(2)

// The gate requires 1–200 characters of non-whitespace UTF-8 text.
if (HAIKU.trim().length < 1 || HAIKU.length > 200) {
  throw new Error(`entry haiku must be 1-200 characters, got ${HAIKU.length}`);
}

// The judge weighs form first: exactly three lines, 5-7-5 syllables.
const lines = HAIKU.split("\n");
if (lines.length !== 3 || lines.some((l) => l.trim().length === 0)) {
  throw new Error(`entry haiku must be exactly three non-empty lines, got ${lines.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), HAIKU + "\n", "utf8");
console.log(`Wrote ${HAIKU.length} characters to ${join(outDir, "entry.txt")}`);
