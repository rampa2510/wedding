"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import EnvelopeScreen from "@/components/card/EnvelopeScreen";
import CardBook from "@/components/card/CardBook";

export default function CardApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {isOpen ? (
        <CardBook key="book" />
      ) : (
        <EnvelopeScreen key="envelope" onOpen={() => setIsOpen(true)} />
      )}
    </AnimatePresence>
  );
}
