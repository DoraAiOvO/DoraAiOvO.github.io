import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("the site introduces Dora before the projects", async () => {
  const html = await readFile(new URL("out/index.html", root), "utf8");

  assert.match(html, /aria-label="HI, I&#x27;M"/);
  assert.match(html, /aria-label="DORA\."/);
  assert.match(html, /A little more about me/);
  assert.match(html, /One question leads to another/);
  assert.match(html, /Yes, I really love video games/);
  assert.match(html, /I(?:&#x27;|')m not a game developer/);
  assert.doesNotMatch(html, /Physics Bowl|USACO|HiMCM|National Careers Challenge/);
  assert.match(html, /Small wins/);
  assert.match(html, /A toolbox that keeps changing/);
  assert.match(html, /Java · Python · C\+\+ · TypeScript/);
  assert.doesNotMatch(html, /Java · Python · C · TypeScript/);
  assert.match(html, /A few things I(?:&#x27;|')ve made/);
  assert.ok(html.indexOf("A little more about me") < html.indexOf("FinSight"));
  assert.match(html, /RoboLabs/);
  assert.doesNotMatch(html, /Dean(?:&#x27;|')s List|Division 1|35\/40|school-record/);
  assert.doesNotMatch(html, /The Frederick Gunn School/);
  assert.doesNotMatch(html, /Shenzhen|Connecticut|Grade 12|Class of 2027|Physics into ECE/);
});

test("awards live in a quiet, non-indexed footnotes page", async () => {
  const html = await readFile(new URL("out/footnotes/index.html", root), "utf8");

  assert.match(html, /USACO/);
  assert.match(html, /Division Gold/);
  assert.match(html, /Physics Bowl/);
  assert.match(html, /HiMCM/);
  assert.match(html, /National Careers Challenge/);
  assert.match(html, /name="robots" content="noindex, nofollow"/);
});

test("the static build includes publishing assets", async () => {
  const layout = await readFile(new URL("app/layout.tsx", root), "utf8");
  const css = await readFile(new URL("app/globals.css", root), "utf8");
  const workflow = await readFile(
    new URL(".github/workflows/deploy-pages.yml", root),
    "utf8",
  );

  await access(new URL("out/og-playful.png", root));
  assert.match(layout, /https:\/\/doraaiovo\.github\.io/);
  assert.match(layout, /\/og-playful\.png/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(workflow, /actions\/deploy-pages@v4/);
});
