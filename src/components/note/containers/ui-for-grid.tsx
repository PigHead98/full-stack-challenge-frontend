import React, { useContext } from "react";
import NoteContext from "../../../contexts/NoteContext";
import { ILayoutProps } from "../../../share/interface";
import { CardNote } from "../../card-note";

export interface INoteForGridContainer extends ILayoutProps {}

const UiForGrid: React.FC<INoteForGridContainer> = (components) => {
  const { noteData, noteAction } = useContext(NoteContext);

  return (
    <div className="flex flex-wrap">
      {noteData.list &&
        noteData.list.map((i, index) => (
          <div className="basis-1/3 px-2" key={`listCard_${index}`}>
            <CardNote
              {...i}
              isActive={noteData.cardActive === i.id}
              onClickCard={noteAction.handleClickCard(i)}
            />
          </div>
        ))}
    </div>
  );
};
export default UiForGrid;
