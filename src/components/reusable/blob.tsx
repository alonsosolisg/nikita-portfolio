import Link from "next/link";
import React from "react";

interface props {
  text: string;
  url: string;
  right: boolean;
}

const Blob = ({ text, url, right }: props) => {
  return (
    <div className={`${right ? "blob-right-container" : "blob-container"}`}>
      <Link href={`/${url}`}>
        <div className="blob bg-secondary hover:bg-primary transition-all text-background font-bold">
          {text}
        </div>
      </Link>
    </div>
  );
};

export default Blob;
