import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const url = process.argv[2] || process.env.SCREENSHOT_URL || "https://ex2-axon.github.io/x-template-001/";
const output = process.argv[3] || process.env.SCREENSHOT_OUTPUT || "screenshot.png";
const fullPage = process.env.SCREENSHOT_FULL_PAGE !== "false";

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1600, height: 900 },
  });

  console.log(`Navigating to ${url}`);
  await page.goto(url, { waitUntil: "networkidle" });

  const outputPath = path.resolve(process.cwd(), output);
  await page.screenshot({
    path: outputPath,
    fullPage,
  });

  await browser.close();
  console.log(`Screenshot saved to ${outputPath}`);
})();
