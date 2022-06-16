import React, { useContext } from "react";
import NoteContext from "../../contexts/NoteContext";
import { ILayoutProps } from "../../share/interface";
import AutoSave from "../auto-save";
import AppleNoteContainer from "./containers/note-container";
import UiForGrid from "./containers/ui-for-grid";
import UiForList from "./containers/ui-for-list";
import NoteHeader from "./note-header";

export interface INoteListComponent extends ILayoutProps {}

const ReconstructContainer = AppleNoteContainer(NoteHeader);
const AppleNoteComponent: React.FC<INoteListComponent> = () => {
  const { noteData } = useContext(NoteContext);

  return (
    <>
      {!noteData.loading ? (
        <ReconstructContainer>
          <AutoSave />
          {noteData.switchUI === 1 && <UiForList />}
          {noteData.switchUI === 2 && <UiForGrid />}
        </ReconstructContainer>
      ) : (
        "loading data..."
      )}
    </>
  );
};
export default AppleNoteComponent;
