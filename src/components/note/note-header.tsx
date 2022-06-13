import React, { useContext } from "react";
import NoteContext from "../../contexts/NoteContext";
import { ILayoutProps } from "../../share/interface";

export interface INoteHeaderComponent extends ILayoutProps {}

const NoteHeader: React.FC<INoteHeaderComponent> = (props) => {
  const { noteAction } = useContext(NoteContext);
  return (
    <>
      <div className="flex flex-row">
        <div className="basis-1/3 px-2 border-r-2 border-gray-500">
          <div className="flex flex-row my-2">
            <button
              className="basis-1/5 underline hover:underline-offset-4"
              onClick={() => noteAction.setSwitchUI(1)}
            >
              list
            </button>
            <button
              className="basis-1/5 underline hover:underline-offset-4"
              onClick={() => noteAction.setSwitchUI(2)}
            >
              grid
            </button>
            <button
              className="basis-1/2 text-right"
              onClick={noteAction.handleClickRemove}
            >
              clear
            </button>
          </div>
        </div>
        <div className="basis-2/3 px-2">
          <h1 className="text-3xl font-bold text-center">
            <button
              className="basis-1/2 text-right"
              onClick={noteAction.handleClickAdd}
            >
              add
            </button>
          </h1>
        </div>
      </div>
    </>
  );
};
export default NoteHeader;
