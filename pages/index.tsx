import ClientOnly from "../src/components/client-apollo";
import AppleNoteComponent from "../src/components/note";
import { NoteProvider } from "../src/contexts/NoteContext";

const AppleNote = () => {
  return (
    <ClientOnly>
      <NoteProvider>
        <AppleNoteComponent />
      </NoteProvider>
    </ClientOnly>
  );
};
export default AppleNote;
