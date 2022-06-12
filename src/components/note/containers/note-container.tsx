import React from "react";
import { LayoutProps } from "../../../share/interface";
import NoteContentComponent from "./note-content";
import NoteListComponent from "./note-list";

const AppleNoteContainer = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="container h-screen mx-auto">
        <h1 className="text-3xl font-bold text-center">Apple Note</h1>

        <div className="flex h-full flex-row">
          <div className="basis-1/3 px-2 border-r-2 border-gray-500">
            <NoteListComponent />
          </div>
          <div className="basis-2/3 px-2">
            <NoteContentComponent />
          </div>
        </div>

        {/* {children} */}
      </div>
    </>
  );
};
export default AppleNoteContainer;
