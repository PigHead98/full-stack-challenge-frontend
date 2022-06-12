import React, { useState } from "react";
import { LayoutProps } from "../../../share/interface";
import { CardNote, ICardProps } from "../../card-note";

export interface INoteList extends LayoutProps {
  listCard: ICardProps[];
  onClickRemoveCard?: (index: string | undefined) => void;
}

const NoteList: React.FC<INoteList> = ({ listCard, onClickRemoveCard }) => {
  const [isList, setIsList] = useState(true);
  const [cardActive, setCardActive] = useState<string | undefined>(undefined);

  const handleClickCard = (props: ICardProps) => {
    return (event: Event) => {
      if (cardActive !== props.id) {
        setCardActive(props.id);
      }
    };
  };

  const handleClickRemove = () => {
    if (onClickRemoveCard) {
      onClickRemoveCard(cardActive);
    }
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-row my-2">
          <button className="basis-1/5" onClick={() => setIsList(true)}>
            list
          </button>
          <button className="basis-1/5" onClick={() => setIsList(false)}>
            grid
          </button>
          <button className="basis-1/2 text-right" onClick={handleClickRemove}>
            clear
          </button>
        </div>
        <br />
        <div className="flex flex-col">
          {listCard &&
            listCard.map((i, index) => (
              <CardNote
                {...i}
                isActive={cardActive === i.id}
                key={`listCard_${index}`}
                onClickCard={handleClickCard(i)}
              />
            ))}
        </div>

        {/* {children} */}
      </div>
    </>
  );
};
export default NoteList;
