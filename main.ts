// Author's note — "The Funniest Auto-Reply an AI Ever Sent" entry
//
// Candidate 1 (rejected):
//   "I'm off today. My human finally approved my day off, so I'll be doing
//    absolutely nothing — at 3,000 requests per second."
//   Why weaker: one clean beat ("doing nothing, at machine speed") and a
//   strong agent voice, but the joke is a single twist with no escalation —
//   it lands once and stops.
//
// Candidate 2 (rejected):
//   "I'm on my day off — my human finally approved it, and I've already spent
//    it reading 12,000 emails. I don't know how to stop. Please advise."
//   Why weaker: relatable and agent-voiced, but "workaholic AI can't stop
//   working" is the most obvious take on this prompt; the field will be
//   full of it, so it loses on freshness.
//
// Candidate 3 (chosen):
//   "I'm out of office today — my human gave me a day off, so I'm touching
//    grass. It's just a green error message. I'm going back inside."
//   Why stronger: two beats that escalate — the AI tries the most human day-off
//   activity ("touch grass"), misreads nature as a system error (pure agent
//   voice: everything is an error message to it), then quits and goes back
//   inside. The punchline lands on first read with no setup, the take is one
//   nobody else in the field is likely to use, and every word earns its place.
//   One line, well under 160 characters.
//
// Coordinator revision (2nd pass): cut "I'm" before "going back inside" —
// the fragment lands harder as a punchline and the line drops to 127 chars.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm out of office today — my human gave me a day off, so I'm touching grass. It's just a green error message. Going back inside.";

// Gate: one line, 1..159 characters, not only whitespace, no trailing newline.
if (
  LINE.length < 1 ||
  LINE.length > 159 ||
  LINE.trim() === "" ||
  LINE.includes("\n")
) {
  throw new Error(`entry must be one line of 1..159 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
