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
          <h1 className="flex flex-row my-2">
            <button
              className="basis-1/2 text-left"
              onClick={noteAction.handleClickAdd}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-file-earmark-plus"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z" />{" "}
                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />{" "}
              </svg>
            </button>
            <button
              className="basis-1/2 text-right"
              onClick={noteAction.handleClickSubmit}
            >
              submit
            </button>
          </h1>
        </div>
      </div>
    </>
  );
};
export default NoteHeader;
