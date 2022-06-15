import React, { useContext, useEffect } from "react";
import NoteContext from "../../contexts/NoteContext";
import { ILayoutProps } from "../../share/interface";
import AppleNoteContainer from "./containers/note-container";
import UiForGrid from "./containers/ui-for-grid";
import UiForList from "./containers/ui-for-list";
import NoteHeader from "./note-header";

export interface INoteListComponent extends ILayoutProps {}

const ReconstructContainer = AppleNoteContainer(NoteHeader);
const AppleNoteComponent: React.FC<INoteListComponent> = (props) => {
  const { noteData } = useContext(NoteContext);
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <ReconstructContainer>
      {noteData.switchUI === 1 && <UiForList />}
      {noteData.switchUI === 2 && <UiForGrid />}
    </ReconstructContainer>
  );
};
export default AppleNoteComponent;