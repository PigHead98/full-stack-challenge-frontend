import React, { useContext } from "react";
import NoteContext from "../../contexts/NoteContext";
import { ILayoutProps } from "../../share/interface";
import { CardNote } from "../card-note";

export interface INoteListComponent extends ILayoutProps {}

const NoteList: React.FC<INoteListComponent> = () => {
  const { noteData, noteAction } = useContext(NoteContext);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col">
          {noteData.list &&
            noteData.list.map((i, index) => (
              <CardNote
                {...i}
                isActive={noteData.cardActive === i.uuid}
                key={`listCard_${index}`}
                onClickCard={noteAction.handleClickCard(i)}
              />
            ))}
        </div>

        {/* {children} */}
      </div>
    </>
  );
};
export default NoteList;
