import React, { useState } from "react";
import { ICardProps } from "../card-note";
import AppleNoteContainer from "./containers/note-container";
import NoteContent from "./containers/note-content";
import NoteList, { INoteList } from "./containers/note-list";

const listCardDefault: ICardProps[] = [
  {
    id: "0",
    title: "Title test",
    time: "1:22 PM",
    description: "Description test",
  },
  {
    id: "1",
    title: "Title test 2",
    time: "1:22 PM",
    description: "Description test 2",
  },
];

const AppleNoteComponent: React.FC<INoteList> = ({ listCard }) => {
  const [list, setList] = useState(listCardDefault);

  const onClickRemoveCard = (id: string | undefined) => {
    if (list.length) {
      const index = list.findIndex((i) => i.id === id);
      setList((list) => {
        return [...list.slice(0, index), ...list.slice(index + 1)];
      });
    }
  };

  return (
    <AppleNoteContainer>
      <div className="basis-1/3 px-2 border-r-2 border-gray-500">
        <NoteList listCard={list} onClickRemoveCard={onClickRemoveCard} />
      </div>
      <div className="basis-2/3 px-2">
        <NoteContent />
      </div>
    </AppleNoteContainer>
  );
};
export default AppleNoteComponent;
