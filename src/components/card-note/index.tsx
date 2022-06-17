import moment from "moment";
import { ICard } from "../note/interface";
import styles from "./styles.module.css";

export interface ICardProps extends ICard {
  onClickCard?: any;
  isActive?: boolean;
  cardActive?: string;
}

export const CardNote: React.FC<ICardProps> = (props) => {
  const {
    title,
    description = "No Description",
    time,
    onClickCard,
    isActive,
  } = props;

  return (
    <div
      className={`container mb-4 mx-auto py-3 px-5 rounded-lg ${styles.card} ${
        isActive ? styles.cardActive : ""
      }`}
      onClick={onClickCard}
    >
      <div className={styles.title}>{title || "New Note"}</div>
      <p>
        <span>{moment(time).format("hh:mm A")}</span> &nbsp;&nbsp;
        <span className={[styles.description].join(" ")}>
          {description.substring(0, 16) || "No Additional text"}
        </span>
      </p>
    </div>
  );
};
