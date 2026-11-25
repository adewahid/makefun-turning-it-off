// make.fun entry: Have You Tried Turning It Off?
// Writes a single funny line from a hopeless tech support agent to a
// desperate customer, under 200 characters, to /output/entry.txt.
// The joke's twist: the escalation goes to the router itself, and the
// router is the one that needs a break — the agent stays cheerfully useless.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Great news \u2014 I've escalated your case to the router itself. It read your ticket, sighed, and asked for the weekend off.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
