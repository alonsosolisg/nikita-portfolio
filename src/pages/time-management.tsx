import Blob from "@/components/reusable/blob";
import Navbar from "@/components/reusable/navbar";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import TManagement from "@/components/time-management/t-management";

const TimeManagement = () => {
  const router = useRouter();

  const initialMousePosition = router.query;

  console.log(initialMousePosition);

  const mouseX = initialMousePosition.x as string;
  const mouseY = initialMousePosition.y as string;

  const [mousePosition, setMousePosition] = useState({
    x: mouseX ? parseInt(mouseX) : 0,
    y: mouseY ? parseInt(mouseY) : 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
    },
    text: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: "#F72487",
      mixBlendMode: "difference",
    },
    hover: {
      x: mousePosition.x - 60,
      y: mousePosition.y - 60,
      height: 120,
      width: 120,
      backgroundColor: "#F16961",
      mixBlendMode: "difference",
    },
    image: {
      x: mousePosition.x - 80,
      y: mousePosition.y - 80,
      height: 160,
      width: 160,
      backgroundColor: "#FFFDFA",
      mixBlendMode: "difference",
    },
  };

  const textLeave = () => setCursorVariant("default");
  const textEnter = () => setCursorVariant("text");
  const hoverEnter = () => setCursorVariant("hover");
  const hoverLeave = () => setCursorVariant("default");
  const imageEnter = () => setCursorVariant("image");
  const imageLeave = () => setCursorVariant("default");

  return (
    <main className="font-avenir ">
      <motion.div
        className="w-10 h-10 top-0 left-0 fixed rounded-full bg-accent z-50 pointer-events-none"
        variants={variants as any}
        animate={cursorVariant}
      ></motion.div>
      <Navbar
        mousePosition={mousePosition}
        hoverEnter={hoverEnter}
        hoverLeave={hoverLeave}
        backgroundColor="bg-accent"
      />
      <TManagement
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <Blob
        hoverEnter={hoverEnter}
        hoverLeave={hoverLeave}
        mousePosition={mousePosition}
        right={false}
        text="HOME"
        url=""
      />
      <Blob
        hoverEnter={hoverEnter}
        hoverLeave={hoverLeave}
        mousePosition={mousePosition}
        right={true}
        text="REFLECTION"
        url="reflection"
      />
    </main>
  );
};

export default TimeManagement;
