import { createContext, useState } from "react";

export interface ICard {
  id: string;
  title: string;
  description?: string;
  time: string;
  onClickCard?: any;
  isActive?: boolean;
  cardActive?: string;
}

interface IDefaultContext {
  noteData: {
    switchUI: number;
    list: ICard[];
    cardActive?: string;
  };
  noteAction: {
    setSwitchUI: (number: number) => void;
    handleClickRemove: () => void;
    setCardActive: (id: string | undefined) => void;
    handleClickCard: (card: ICard) => void;
    handleClickAdd: () => void;
  };
}

const defaultValue: IDefaultContext = {
  noteData: {
    switchUI: 1,
    list: [
      {
        id: "0",
        title: "Title test",
        time: "1:22 PM",
        description: "Description test",
      },
      {
        id: "1",
        title: "Title test",
        time: "1:22 PM",
        description: "Description test",
      },
    ],
  },

  noteAction: {
    setSwitchUI: (number: number) => {},
    handleClickRemove: () => {},
    setCardActive: (id) => {},
    handleClickCard: (data) => {},
    handleClickAdd: () => {},
  },
};

const NoteContext = createContext(defaultValue);

export const NoteProvider = ({ children }: any) => {
  const [switchUI, setSwitchUI] = useState(1);
  const [list, setList] = useState([...defaultValue.noteData.list]);
  const [cardActive, setCardActive] = useState<string | undefined>(undefined);

  const onClickRemoveCard = (id: string | undefined) => {
    if (list.length) {
      const index = list.findIndex((i) => i.id === id);
      setList((list) => {
        return [...list.slice(0, index), ...list.slice(index + 1)];
      });
    }
  };

  const handleClickRemove = () => {
    if (cardActive) {
      onClickRemoveCard(cardActive);
    }
  };

  const handleClickCard = (props: ICard) => {
    return (event: Event) => {
      if (cardActive !== props.id) {
        setCardActive(props.id);
      }
    };
  };

  const handleClickAdd = () => {
    setList([...list, defaultValue.noteData.list[0]]);
  };

  const value = {
    noteData: {
      cardActive,
      switchUI,
      list,
    },
    noteAction: {
      handleClickRemove,
      setCardActive,
      setSwitchUI,
      handleClickCard,
      handleClickAdd,
    },
  };

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};

export default NoteContext;
