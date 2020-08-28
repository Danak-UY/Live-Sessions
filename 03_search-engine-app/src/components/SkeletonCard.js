import React from "react";
import { Skeleton } from "antd";

function SkeletonCard() {
  return (
    <article>
      <div className="skeleton-header">
        <Skeleton.Avatar active size="small" shape="circle" />
        <Skeleton.Input style={{ width: 200 }} active size="small" />
      </div>
      <Skeleton paragraph={{ rows: 1 }} active size="small" />
    </article>
  );
}

export default SkeletonCard;
