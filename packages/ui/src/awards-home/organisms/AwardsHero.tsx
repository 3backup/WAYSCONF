"use client";

import * as React from "react";
import { Chip } from "../atoms/Chip";

const HERO_WAVE_LOTTIE_URL =
  "https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d484_6797a611c9b9df9d9f230709_wave_hero.json";
const LOTTIE_SCRIPT_ID = "ways-awards-lottie-web";
const LOTTIE_SCRIPT_SRC =
  "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js";

type LottiePlayer = { destroy: () => void };
type LottieApi = {
  loadAnimation: (params: {
    container: Element;
    renderer: "svg" | "canvas" | "html";
    loop: boolean;
    autoplay: boolean;
    path: string;
  }) => LottiePlayer;
};

declare global {
  interface Window { lottie?: LottieApi; }
}

let lottieLoader: Promise<LottieApi> | null = null;

function loadLottie(): Promise<LottieApi> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("SSR"));
  }
  if (window.lottie) return Promise.resolve(window.lottie);
  if (!lottieLoader) {
    lottieLoader = new Promise<LottieApi>((resolve, reject) => {
      const existing = document.getElementById(LOTTIE_SCRIPT_ID) as HTMLScriptElement | null;
      if (existing) {
        if (window.lottie) { resolve(window.lottie); return; }
        existing.addEventListener("load", () => window.lottie ? resolve(window.lottie) : reject(new Error("Missing")), { once: true });
        existing.addEventListener("error", () => reject(new Error("Load error")), { once: true });
        return;
      }
      const script = document.createElement("script");
      script.id = LOTTIE_SCRIPT_ID;
      script.src = LOTTIE_SCRIPT_SRC;
      script.async = true;
      script.addEventListener("load", () => window.lottie ? resolve(window.lottie) : reject(new Error("Missing")), { once: true });
      script.addEventListener("error", () => reject(new Error("Load error")), { once: true });
      document.head.appendChild(script);
    });
  }
  return lottieLoader;
}

export type AwardsHeroProps = {
  title?: string;
  subtitle?: string;
  chips?: string[];
};

export function AwardsHero({
  title = "Showcasing the best in digital industry",
  subtitle = "recognizing the best in Digital Products, from mobile apps, web apps to APIs.",
  chips = ["EXPO KRAKÓW", "Sep 17, 2025, 17:00"],
}: AwardsHeroProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    let cancelled = false;
    let animation: LottiePlayer | null = null;
    loadLottie()
      .then((lottie) => {
        if (cancelled || !containerRef.current) return;
        animation = lottie.loadAnimation({
          container: containerRef.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: HERO_WAVE_LOTTIE_URL,
        });
      })
      .catch((err) => console.error("Hero lottie error", err));
    return () => {
      cancelled = true;
      animation?.destroy();
    };
  }, []);

  return (
    <section className="section_home25-hero-2">
      <div className="home25-hero-lottie" aria-hidden="true" ref={containerRef} />
      <div className="home25-hero-wrapper awards">
        <h1 id="w-node-_0305d8a9-61bd-241b-e252-72961eb940f9-1eb940f5">{title}</h1>
        <p
          className="ways25-text-size-24 text-weight-semibold text-style-uppercase"
          id="w-node-_0305d8a9-61bd-241b-e252-72961eb940fb-1eb940f5"
        >
          {subtitle}
        </p>
        <div className="chips-horizontal-wrapper awards-hero">
          {chips.map((chip) => (
            <Chip key={chip} variant="White" text={chip} />
          ))}
        </div>
      </div>
    </section>
  );
}
