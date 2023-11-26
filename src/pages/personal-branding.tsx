import Blob from "@/components/reusable/blob";
import Navbar from "@/components/reusable/navbar";
import React from "react";

const PersonalBranding = () => {
  return (
    <main>
      <Navbar />
      <Blob right={false} text="HOME" url="" />
      <Blob right={true} text="REFLECTION" url="reflection" />
    </main>
  );
};

export default PersonalBranding;
