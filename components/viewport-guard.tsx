"use client";

import { useEffect } from "react";

export function ViewportGuard() {
  useEffect(() => {
    const resetHorizontalScroll = () => {
      if (window.scrollX !== 0) {
        window.scrollTo({ left: 0, top: window.scrollY, behavior: "instant" });
      }
    };

    resetHorizontalScroll();
    window.addEventListener("resize", resetHorizontalScroll);
    return () => window.removeEventListener("resize", resetHorizontalScroll);
  }, []);

  return null;
}

