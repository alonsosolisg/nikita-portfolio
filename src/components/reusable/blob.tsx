import { useRouter } from "next/router";
import React from "react";

interface props {
  text: string;
  url: string;
  right: boolean;
  hoverEnter?: () => void;
  hoverLeave?: () => void;
  mousePosition?: { x: number; y: number };
}

const Blob = ({
  text,
  url,
  right,
  hoverEnter,
  hoverLeave,
  mousePosition,
}: props) => {
  const router = useRouter();
  return (
    <div className={`${right ? "blob-right-container" : "blob-container"}`}>
      <div
        onClick={() => {
          router.push({
            pathname: `/${url}`,
            query: mousePosition,
          });
        }}
        onMouseEnter={hoverEnter}
        onMouseLeave={hoverLeave}
        className="blob bg-secondary hover:bg-primary transition-all text-background font-bold"
      >
        {text}
      </div>
    </div>
  );
};

export default Blob;
