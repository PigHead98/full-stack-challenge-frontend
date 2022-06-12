import React from "react";
import { CardNote } from "../../card-note";

const NoteList = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-row my-2">
          <div className="basis-1/5">list</div>
          <div className="basis-1/5">grid</div>
          <div className="basis-1/2 text-right">clear</div>
        </div>
        <br />
        <div className="flex flex-col">
          <CardNote title="Title 1" time="1:30 PM" />
          <CardNote title="Title 2" time="1:20 PM" />
        </div>

        {/* {children} */}
      </div>
    </>
  );
};
export default NoteList;
