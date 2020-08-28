import React from "react";
import { Skeleton } from "antd";

function SkeletonCard() {
  return (
    <article className="skeleton__card">
      <div className="skeleton__header">
        <Skeleton.Avatar active size="small" shape="circle" />
        <Skeleton.Input style={{ width: 200 }} active size="small" />
      </div>
      <Skeleton paragraph={{ rows: 1 }} active size="small" />
    </article>
  );
}

export default SkeletonCard;
