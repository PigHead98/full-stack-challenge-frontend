import moment from "moment";
import styles from "./styles.module.css";

export interface ICardProps {
  id: string;
  title: string;
  description?: string;
  time: string | Date;
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
      <h2>{title.substring(0, 20) || "New Note"}</h2>

      <p>
        <span>{moment(time).format("hh:mm A")}</span> &nbsp;&nbsp;
        <span className={styles.description}>
          {description.substring(0, 20) || "No Additional text"}
        </span>
      </p>
    </div>
  );
};
