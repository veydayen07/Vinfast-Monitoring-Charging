import React from "react";

interface CardProps {
  title: string;
  value: string;
  icon: React.ElementType;
}

const Card = ({ title, value, icon: Icon }: CardProps) => {
  return (
    <div className="bg-surface-container border border-white/5 p-4 rounded-lg">
      <div className="flex justify-between items-start mb-2">
        <span className="text-label-sm font-label-sm text-on-surface-variant uppercase">
          Total Nodes
        </span>
        <span className="material-symbols-outlined text-primary text-[20px]">
          <Icon />
        </span>
      </div>
      <div className="text-display-lg font-display-lg">1,248</div>
      <div className="flex items-center gap-1 text-[11px] text-primary mt-1">
        {/* <span className="material-symbols-outlined text-[14px]">
          <Icon />
        </span> */}
        <span>12 since last hour</span>
      </div>
    </div>
  );
};

export default Card;
