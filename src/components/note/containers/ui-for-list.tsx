import React from "react";
import { LayoutProps } from "../../../share/interface";
import { ICardProps } from "../../card-note";
import NoteContent from "./note-content";
import NoteList from "./note-list";

export interface INoteListComponent extends LayoutProps {
  listCard: ICardProps[];
  setIsList: (value: boolean) => void;
  onClickRemoveCard?: (index: string | undefined) => void;
}

const UiForList: React.FC<INoteListComponent> = ({
  listCard,
  setIsList,
  onClickRemoveCard,
}) => {
  return (
    <>
      <div className="basis-1/3 px-2 border-r-2 border-gray-500">
        <NoteList
          listCard={listCard}
          onClickRemoveCard={onClickRemoveCard}
          setIsList={setIsList}
        />
      </div>
      <div className="basis-2/3 px-2">
        <NoteContent />
      </div>
    </>
  );
};
export default UiForList;
