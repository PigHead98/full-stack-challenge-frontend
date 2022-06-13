import React from "react";
import { ILayoutProps } from "../../../share/interface";

export interface INoteContainer extends ILayoutProps {}

function AppleNoteContainer<T extends INoteContainer>(HeaderComponent: any) {
  const render = ({ children, props }: T) => {
    return (
      <>
        <div className="container h-screen mx-auto">
          <h1 className="text-3xl font-bold text-center">Apple Note</h1>
          <HeaderComponent />
          {children}
        </div>
      </>
    );
  };
  return render;
};

export default AppleNoteContainer;
