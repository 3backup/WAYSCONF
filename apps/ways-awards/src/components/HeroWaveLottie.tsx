"use client";

import { useEffect, useRef } from "react";

const HERO_WAVE_LOTTIE_URL =
  "https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d484_6797a611c9b9df9d9f230709_wave_hero.json";
const LOTTIE_SCRIPT_ID = "ways-awards-lottie-web";
const LOTTIE_SCRIPT_SRC =
  "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js";

type LottiePlayer = {
  destroy: () => void;
};

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
  interface Window {
    lottie?: LottieApi;
  }
}

let lottieLoader: Promise<LottieApi> | null = null;

function loadLottie() {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Lottie can only run in the browser."));
  }

  if (window.lottie) {
    return Promise.resolve(window.lottie);
  }

  if (!lottieLoader) {
    lottieLoader = new Promise<LottieApi>((resolve, reject) => {
      const onReady = () => {
        if (window.lottie) {
          resolve(window.lottie);
          return;
        }
        reject(new Error("Lottie script loaded but window.lottie is missing."));
      };
      const onError = () => reject(new Error("Failed to load Lottie script."));
      const existingScript = document.getElementById(LOTTIE_SCRIPT_ID) as
        | HTMLScriptElement
        | null;

      if (existingScript) {
        if (window.lottie) {
          resolve(window.lottie);
          return;
        }
        existingScript.addEventListener("load", onReady, { once: true });
        existingScript.addEventListener("error", onError, { once: true });
        return;
      }

      const script = document.createElement("script");
      script.id = LOTTIE_SCRIPT_ID;
      script.src = LOTTIE_SCRIPT_SRC;
      script.async = true;
      script.addEventListener("load", onReady, { once: true });
      script.addEventListener("error", onError, { once: true });
      document.head.appendChild(script);
    });
  }

  return lottieLoader;
}

export function HeroWaveLottie({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let isUnmounted = false;
    let animation: LottiePlayer | null = null;

    loadLottie()
      .then((lottie) => {
        if (isUnmounted || !containerRef.current) {
          return;
        }

        animation = lottie.loadAnimation({
          container: containerRef.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: HERO_WAVE_LOTTIE_URL,
        });
      })
      .catch((error) => {
        console.error("Unable to initialize hero lottie animation.", error);
      });

    return () => {
      isUnmounted = true;
      animation?.destroy();
    };
  }, []);

  return <div className={className} aria-hidden="true" ref={containerRef} />;
}
