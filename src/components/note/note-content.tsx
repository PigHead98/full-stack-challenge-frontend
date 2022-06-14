import React, { useContext, useState } from "react";
import NoteContext from "../../contexts/NoteContext";
import { ILayoutProps } from "../../share/interface";
import styles from "./styles.module.css";

export interface INoteContentComponent extends ILayoutProps {}

const NoteContent: React.FC<INoteContentComponent> = () => {
  const { noteAction } = useContext(NoteContext);
  const [value, setValue] = useState("");

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className="container h-full mx-auto">
        <div className="flex h-full flex-row">
          <textarea
            className={`h-full w-full ${styles.textarea}`}
            value={value}
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
