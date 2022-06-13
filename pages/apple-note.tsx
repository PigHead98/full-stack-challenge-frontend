import AppleNoteComponent from "../src/components/note";
import { NoteProvider } from "../src/contexts/NoteContext";

const AppleNote = () => {
  return (
    <NoteProvider>
      <AppleNoteComponent>content</AppleNoteComponent>
    </NoteProvider>
  );
};
export default AppleNote;
