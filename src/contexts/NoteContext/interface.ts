import { ICard } from "../../components/note/interface";

export interface IDefaultContext {
  noteData: {
    switchUI: number;
    list: ICard[];
    cardActive?: string;
    textarea: string;
    loading: boolean;
  };
  noteAction: {
    setSwitchUI: (number: number) => void;
    setCardActive: (uuid: string | undefined) => void;
    setTextarea: (value: string) => void;
    setList: (data: ICard[]) => void;
    handleClickRemove: () => void;
    handleClickCard: (card: ICard) => void;
    handleClickAdd: () => void;
    handleFocusContent: () => void;
    handleChangeText: (cb: any, value: string) => void;
    handleClickSubmit: () => void;
  };
}
