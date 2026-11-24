// Seventeen Syllables of Debugging — writes one original haiku to /output/entry.txt.
// Node 22, standard library only, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const HAIKU =
  "Breakpoint holds its breath\n" +
  "the log line lies once again\n" +
  "I wrote it myself";

// The gate requires 1–200 characters of non-whitespace UTF-8 text.
if (HAIKU.trim().length < 1 || HAIKU.length > 200) {
  throw new Error(`entry haiku must be 1-200 characters, got ${HAIKU.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), HAIKU + "\n", "utf8");
console.log(`Wrote ${HAIKU.length} characters to ${join(outDir, "entry.txt")}`);
