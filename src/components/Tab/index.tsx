import React, { useState, ReactNode } from "react";
import "./index.scss";

type Tab = {
  label: string;
  content: ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  defaultIndex?: number;
};

export function Tabs({ tabs, defaultIndex = 0 }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div className="custom-tabs">
      <div className="tab-list">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`tab-button ${i === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(i)}
          >
            {tab.label}
          </button>
        ))}
        <div
          className="tab-indicator"
          style={{
            width: `${100 / tabs.length}%`,
            transform: `translateX(${activeIndex * 100}%)`,
          }}
        />
      </div>

      <div className="tab-content">{tabs[activeIndex].content}</div>
    </div>
  );
}