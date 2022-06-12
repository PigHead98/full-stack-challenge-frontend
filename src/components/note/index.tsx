import React from "react";
import { LayoutProps } from "../../share/interface";
import AppleNoteContainer from "./containers/note-container";
import NoteContent from "./containers/note-content";
import NoteList from "./containers/note-list";

const AppleNoteComponent = ({ children }: LayoutProps) => {
  return (
    <AppleNoteContainer>
      <div className="basis-1/3 px-2 border-r-2 border-gray-500">
        <NoteList />
      </div>
      <div className="basis-2/3 px-2">
        <NoteContent />
      </div>
    </AppleNoteContainer>
  );
};
export default AppleNoteComponent;
