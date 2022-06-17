import moment from "moment";
import React, { useContext } from "react";
import NoteContext from "../../contexts/NoteContext";
import { CommonHelper } from "../../share/common";
import { ILayoutProps } from "../../share/interface";
import styles from "./styles.module.css";

export interface INoteContentComponent extends ILayoutProps {}

const NoteContent: React.FC<INoteContentComponent> = () => {
  const { noteAction, noteData } = useContext(NoteContext);

  const handleChange = (event: any) => {
    const currentText = event.target.value;
    noteAction.handleChangeText(noteAction.setTextarea, currentText);

    const updateCard = noteData.list.map((i) => {
      if (i.uuid === noteData.cardActive) {
        const { title, description } =
          CommonHelper.prepareDataList(currentText);

        return {
          ...i,
          time: new Date(),
          title,
          description,
          value: currentText,
        };
      }

      return {
        ...i,
      };
    });
    noteAction.setList(
      updateCard.sort(
        (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
      )
    );
  };

  return (
    <>
      <div className="container h-full mx-auto">
        <h2 className="text-center">
          {noteData.list.find((i) => i.uuid === noteData.cardActive)?.time &&
            moment(
              noteData.list.find((i) => i.uuid === noteData.cardActive)?.time
            ).toLocaleString()}
        </h2>
        <div className="flex h-full flex-row">
          <textarea
            className={`h-full w-full ${styles.textarea}`}
            value={noteData.textarea}
            onChange={handleChange}
            onFocus={noteAction.handleFocusContent}
          />
        </div>

        {/* {children} */}
      </div>
    </>
  );
};
export default NoteContent;
