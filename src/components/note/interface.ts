export interface ICardMaster {
  uuid: string;
  time: string | Date;
  value: string;
}

export interface ICard extends ICardMaster {
  description?: string;
  title: string;
}
