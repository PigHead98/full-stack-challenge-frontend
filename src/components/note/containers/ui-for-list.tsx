import React from "react";
import { ILayoutProps } from "../../../share/interface";
import NoteContent from "../note-content";
import NoteList from "../note-list";

export interface INoteForListContainer extends ILayoutProps {}

const UiForList: React.FC<INoteForListContainer> = (components) => {
  return (
    <div className="flex h-full flex-row">
      <div className="basis-1/3 px-2 border-r-2 border-gray-500">
        <NoteList />
      </div>
      <div className="basis-2/3 px-2">
        <NoteContent />
      </div>
    </div>
  );
};
export default UiForList;
