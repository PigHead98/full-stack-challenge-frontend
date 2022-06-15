import { gql } from "@apollo/client";
import { ICard } from "../interface";

const mutationCreate = gql`
  mutation Mutation($notes: [GqlCreateNoteDto!]!) {
    createNotes(notes: $notes) {
      time
      value
    }
  }
`;

const mutationDeleteAll = gql`
  mutation Mutation {
    removeAll {
      count
    }
  }
`;

const formatNotes = (notes: ICard[]) => {
  const result = notes.map(({ uuid, time, value }) => ({
    uuid: uuid,
    time,
    value: value || "",
  }));

  return {
    variables: {
      notes: result,
    },
  };
};

export const MutationNotes = {
  mutationCreate,
  mutationDeleteAll,
  getVariables: formatNotes,
};
