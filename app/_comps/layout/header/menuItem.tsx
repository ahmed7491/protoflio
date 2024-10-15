"use client";
import React from "react";
import { useSectionStore } from "@/store/sectionStore";

const MenuItem = ({ item }: { item: { key: string; title: string } }) => {
  const { activeSection, setActiveSection } = useSectionStore();
  return (
    <li
      className={
        "nav-item " +
        (activeSection === item.key ? " text-primary border-b" : "")
      }
    >
      <span
        className="cursor-pointer"
        onClick={() => setActiveSection(item.key)}
      >
        {item.title}
      </span>
    </li>
  );
};

export default MenuItem;
