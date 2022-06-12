import React from "react";
import { LayoutProps } from "../../../share/interface";
import { ICardProps } from "../../card-note";

export interface INoteListComponent extends LayoutProps {
  listCard: ICardProps[];
  setIsList: (value: boolean) => void;
}

const UiForGrid: React.FC<INoteListComponent> = ({ listCard, setIsList }) => {
  return (
    <>
      1222
      {/* <div className="basis-1/3 px-2 border-r-2 border-gray-500">
        <NoteList
          listCard={list}
          onClickRemoveCard={onClickRemoveCard}
          setIsList={setIsList}
        />
      </div>
      <div className="basis-2/3 px-2">
        <NoteContent />
      </div> */}
    </>
  );
};
export default UiForGrid;
