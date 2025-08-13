"use client";
import { motion } from "framer-motion";

export default function EventBanner() {
  const hideAfter = new Date("2025-08-17T00:00:00Z");
  const now = new Date();
  
  // Don't render if past the hide date
  if (now >= hideAfter) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-brand/90 text-white py-3"
    >
      <div className="mx-auto container-max px-6 text-center">
        <p className="text-sm">
          Meet us at Angel Town - 16th August 2025, 1:00 - 5:00 pm.{" "}
          <a 
            href="https://angelltownrmo.org.uk/events/international-community-trade-fair-and-fun-day/"
            target="_blank"
            rel="noreferrer noopener"
            className="underline font-medium hover:opacity-80 transition-opacity"
          >
            Find out more
          </a>
        </p>
      </div>
    </motion.div>
  );
}
