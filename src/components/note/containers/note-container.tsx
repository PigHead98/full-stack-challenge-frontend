import React from "react";
import { LayoutProps } from "../../../share/interface";

const AppleNoteContainer = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="container h-screen mx-auto">
        <h1 className="text-3xl font-bold text-center">Apple Note</h1>

        <div className="flex h-full flex-row">{children}</div>
      </div>
    </>
  );
};
export default AppleNoteContainer;
