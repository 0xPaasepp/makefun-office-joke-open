import { mkdirSync, writeFileSync } from "node:fs";

// One line of office comedy (under 200 characters) for
// "Make the AI Judge Laugh: the Office Joke Open".
// The gate requires 1-200 UTF-8 characters, so enforce the cap here too.
const JOKE =
  "We hired a Chief Happiness Officer. She quit on day one. Her replacement is a Slack emoji.";

if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim() === "") {
  throw new Error("entry must be 1-200 non-blank characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
