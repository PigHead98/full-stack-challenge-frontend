import React from "react";

const NoteListComponent = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center">Action</h1>

        <div className="flex flex-col">
          <div className="basis-1/3">01</div>
          <div className="basis-2/3">02</div>
        </div>

        {/* {children} */}
      </div>
    </>
  );
};
export default NoteListComponent;
