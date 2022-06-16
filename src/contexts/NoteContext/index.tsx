import { useMutation, useQuery } from "@apollo/client";
import { createContext, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { v4 as uuid } from "uuid";
import { MutationNotes } from "../../components/note/graphql/mutations";
import { getAll } from "../../components/note/graphql/queries";
import { ICard, ICardMaster } from "../../components/note/interface";
import { CommonHelper } from "../../share/common";
import { IDefaultContext } from "./interface";
const defaultValue: IDefaultContext = {
  noteData: {
    switchUI: 1,
    list: [
      {
        uuid: uuid(),
        title: "",
        time: new Date(),
        description: "",
        value: "",
      },
    ],
    textarea: "",
    loading: false,
  },

  noteAction: {
    setSwitchUI: (number: number) => {},
    setCardActive: (id) => {},
    setTextarea: (data) => {},
    setList: (data: ICard[]) => {},
    handleClickRemove: () => {},
    handleClickCard: (data) => {},
    handleClickAdd: () => {},
    handleFocusContent: () => {},
    handleChangeText: (cb: any, value: string) => {},
    handleClickSubmit: () => {},
  },
};

const NoteContext = createContext(defaultValue);

export const NoteProvider = ({ children, client }: any) => {
  const alert = useAlert();
  const [switchUI, setSwitchUI] = useState(1);
  const [list, setList] = useState<ICard[]>([]);
  const [textarea, setTextarea] = useState("");
  const [cardActive, setCardActive] = useState<string | undefined>("0");
  const { error, loading, data } = useQuery(getAll());
  const [create, { data: dataMutation, error: errorMutation }] = useMutation(
    MutationNotes.mutationCreate
  );
  const [removeAll, { data: dataMutationRemove }] = useMutation(
    MutationNotes.mutationDeleteAll
  );

  useEffect(() => {
    if (data) {
      alert.success("Fetch success!!");
      const dataNotes = prepareDataList(data?.getAll);
      setList(dataNotes);
    }

    if (error) {
      alert.error(error.message);
    }
  }, [error, data, alert]);

  const prepareDataList = (data: ICardMaster[]) => {
    return data?.map((i) => {
      const { time, uuid, value } = i;
      const { title, description } = CommonHelper.prepareDataList(value);

      return {
        uuid,
        time,
        title,
        description,
        value,
      };
    });
  };

  const onClickRemoveCard = (id: string | undefined) => {
    if (list.length) {
      const index = list.findIndex((i) => i.uuid === id);
      index > -1 &&
        setList((list) => {
          return [...list.slice(0, index), ...list.slice(index + 1)];
        });
    }
  };

  const handleClickSubmit = () => {
    if (!list?.length) {
      removeAll();

      return;
    }
    create(MutationNotes.getVariables([...list].filter((i) => i.value)));
  };

  useEffect(() => {
    if (dataMutation) {
      alert.success(`Create success ${dataMutation.createNotes.length} notes`);
    }

    if (errorMutation) {
      alert.error(errorMutation.message);
    }
  }, [errorMutation, dataMutation, alert]);

  useEffect(() => {
    if (dataMutationRemove) {
      alert.success(
        `Remove success ${dataMutationRemove.removeAll.count} notes`
      );
    }
  }, [dataMutationRemove, alert]);

  const handleClickRemove = () => {
    if (cardActive) {
      onClickRemoveCard(cardActive);
      setCardActive(undefined);
      setTextarea("");
    }
  };

  const handleClickCard = (props: ICard) => {
    return (event: Event) => {
      if (cardActive !== props.uuid) {
        const card = list.find((i) => i.uuid === props.uuid);
        handleCardUpdate(card);
      }

      if (cardActive === props.uuid) {
        const card = list.find((i) => i.uuid === props.uuid);
        setSwitchUI(1);
        handleCardUpdate(card);
      }
    };
  };

  const handleClickAdd = () => {
    const checkEmptyCard = list.find((i) => !i.value);

    if (!checkEmptyCard) {
      const dataNew = {
        ...defaultValue.noteData.list[0],
        uuid: uuid(),
      };
      setList([dataNew, ...list]);
      handleCardUpdate(dataNew);

      return;
    }

    if (alert) {
      alert.show("Cannot create new when there is an empty note!");
    }
  };

  const handleCardUpdate = (card?: ICard) => {
    if (!card || !card.uuid) {
      return;
    }

    cardActive !== card.uuid && setCardActive(card.uuid);
    setTextarea(card.value);
  };

  const handleFocusContent = () => {
    if (!list.length) {
      const { list: defaultData } = defaultValue.noteData;
      setList(() => [...defaultData]);
      handleCardUpdate(defaultData[0]);
    }

    if (list.length && !list.some((i) => i.uuid === cardActive)) {
      handleCardUpdate(list[0]);
    }
  };

  const handleChangeText = (cb: any, value: string) => {
    cb(value);
    // setList();
  };

  const noteContextValue = {
    noteData: {
      cardActive,
      switchUI,
      list,
      textarea,
      loading,
    },
    noteAction: {
      setList,
      setSwitchUI,
      setTextarea,
      setCardActive,
      handleClickAdd,
      handleClickCard,
      handleChangeText,
      handleClickSubmit,
      handleClickRemove,
      handleFocusContent,
    },
  };

  return (
    <NoteContext.Provider value={noteContextValue}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContext;
