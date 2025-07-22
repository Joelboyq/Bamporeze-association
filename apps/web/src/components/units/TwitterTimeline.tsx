"use client"
import { useEffect } from 'react';

export default function TwitterTimeline() {
  useEffect(() => {
    // Only load the script if it hasn't been loaded yet
    const win = window as unknown as Record<string, any>;
    if (!win['twttr']) {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.charset = 'utf-8';
      document.body.appendChild(script);
    } else {
      // If script is already loaded, re-render widgets
      win['twttr']?.widgets?.load();
    }
  }, []);

  return (
    <div className="flex justify-center mt-8">
      <a
        className="twitter-timeline"
        data-height="400"
        href="https://twitter.com/aba_rwanda?ref_src=twsrc%5Etfw"
      >
        Tweets by aba_rwanda
      </a>
    </div>
  );
} 