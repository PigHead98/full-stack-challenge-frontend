import { useMutation } from "@apollo/client";
import { debounce } from "lodash";
import { useCallback, useContext, useEffect } from "react";
import { useAlert } from "react-alert";
import NoteContext from "../../contexts/NoteContext";
import { MutationNotes } from "../note/graphql/mutations";

const AutoSave = () => {
  const { noteData } = useContext(NoteContext);
  const [create] = useMutation(MutationNotes.mutationCreate);
  const alert = useAlert();

  const debouncedSave = useCallback(
    debounce(async (data) => {
      alert.show("Auto saving changes!");
      await create(data);
    }, 5000),
    []
  );

  useEffect(() => {
    if (noteData.textarea || noteData.textarea === "") {
      const data = MutationNotes.getVariables(
        [...noteData.list].filter((i) => i.value)
      );
      debouncedSave(data);
    }
  }, [noteData.textarea, debouncedSave, noteData.list]);

  return null;
};

export default AutoSave;
