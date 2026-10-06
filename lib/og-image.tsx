import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { business, hero, pricing } from "@/lib/content";

export const ogSize = { width: 1200, height: 630 };
export const ogAlt = `${business.name}: ${business.tagline} Electric guitar lessons in Hougang, Singapore.`;

const PICK_PATH =
  "M12 22.5c-1.3 0-2.5-1-3.7-2.6C6.2 17 3.5 12.6 3.5 8.7 3.5 4.4 7.3 1.5 12 1.5s8.5 2.9 8.5 7.2c0 3.9-2.7 8.3-4.8 11.2-1.2 1.6-2.4 2.6-3.7 2.6Z";
const BOLT_PATH = "M13.2 5.5 8.6 12.1h3l-1 5.4 4.7-6.8h-3.1l1-5.2Z";

/** Share image used for Open Graph (Facebook, WhatsApp, LinkedIn) and X/Twitter. */
export async function renderOgImage() {
  const [display, body] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/BricolageGrotesque-ExtraBold.ttf")),
    readFile(join(process.cwd(), "assets/fonts/PlusJakartaSans-SemiBold.ttf")),
  ]);

  const highlightAt = hero.titleHighlight ? hero.title.indexOf(hero.titleHighlight) : -1;
  const before = highlightAt === -1 ? hero.title : hero.title.slice(0, highlightAt);
  const highlight = highlightAt === -1 ? "" : hero.titleHighlight;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#fff8f0",
          fontFamily: "Body",
          color: "#1c1917",
          padding: "64px 72px",
          overflow: "hidden",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          width="560"
          height="560"
          style={{ position: "absolute", right: -110, bottom: -150, transform: "rotate(18deg)" }}
        >
          <path d={PICK_PATH} fill="#f97316" />
          <path d={BOLT_PATH} fill="#fff8f0" />
        </svg>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 820 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <svg viewBox="0 0 24 24" width="56" height="56">
              <path d={PICK_PATH} fill="#f97316" />
              <path d={BOLT_PATH} fill="#ffffff" />
            </svg>
            <div style={{ display: "flex", fontFamily: "Display", fontSize: 52, letterSpacing: -1 }}>
              <span>Os</span>
              <span style={{ color: "#c93f0a" }}>Rocks</span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontFamily: "Display",
              fontSize: 74,
              lineHeight: 1.04,
              letterSpacing: -2,
            }}
          >
            <span style={{ marginRight: 20 }}>{before.trim()}</span>
            {highlight && <span style={{ color: "#c93f0a" }}>{highlight}</span>}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 30 }}>
            <span>1-to-1 electric guitar lessons · Hougang, Singapore</span>
          </div>
          <div style={{ display: "flex" }}>
            <span
              style={{
                display: "flex",
                backgroundColor: "#c93f0a",
                color: "#ffffff",
                borderRadius: 999,
                padding: "14px 30px",
                fontSize: 28,
              }}
            >
              Book a Song Assessment · ${pricing.assessmentFee}
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Display", data: display, style: "normal", weight: 800 },
        { name: "Body", data: body, style: "normal", weight: 600 },
      ],
    },
  );
}
