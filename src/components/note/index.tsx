import React, { useEffect, useState } from "react";
import { LayoutProps } from "../../share/interface";
import { ICardProps } from "../card-note";
import AppleNoteContainer from "./containers/note-container";
import UiForList from "./containers/ui-for-list";

export interface INoteListComponent extends LayoutProps {
  listCard: ICardProps[];
}

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

const AppleNoteComponent: React.FC<INoteListComponent> = ({ listCard }) => {
  const [list, setList] = useState(listCardDefault);
  const [isList, setIsList] = useState(true);

  useEffect(() => {
    if (listCard.length) {
      setList(listCard);
    }
  }, [listCard, listCard.length]);

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
      {isList ? (
        <UiForList
          listCard={list}
          setIsList={setIsList}
          onClickRemoveCard={onClickRemoveCard}
        />
      ) : (
        ""
      )}
    </AppleNoteContainer>
  );
};
export default AppleNoteComponent;
