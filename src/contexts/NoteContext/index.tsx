import { createContext, useState } from "react";

export interface ICard {
  id: string;
  title: string;
  description?: string;
  time: string | Date;
  value?: string;
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
    handleFocusContent: () => void;
  };
}

const defaultValue: IDefaultContext = {
  noteData: {
    switchUI: 1,
    list: [
      {
        id: "0",
        title: "",
        time: new Date(),
        description: "",
        value: "",
      },
    ],
  },

  noteAction: {
    setSwitchUI: (number: number) => {},
    handleClickRemove: () => {},
    setCardActive: (id) => {},
    handleClickCard: (data) => {},
    handleClickAdd: () => {},
    handleFocusContent: () => {},
  },
};

const NoteContext = createContext(defaultValue);

export const NoteProvider = ({ children }: any) => {
  const [switchUI, setSwitchUI] = useState(1);
  const [list, setList] = useState([...defaultValue.noteData.list]);
  const [listTextarea, setListTextarea] = useState([
    ...defaultValue.noteData.list,
  ]);
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
      setCardActive(undefined);
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
    const dataNew = {
      ...defaultValue.noteData.list[0],
      id: list.length.toString(),
    };
    setList([...list, dataNew]);
  };

  const handleFocusContent = () => {
    if (!list.length) {
      setList([...defaultValue.noteData.list]);
    }
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
      handleFocusContent,
    },
  };

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};

export default NoteContext;
