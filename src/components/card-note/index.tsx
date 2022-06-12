import styles from "./styles.module.css";

export interface CardProps {
  title: string;
  description?: string;
  time: string;
}

export const CardNote = ({
  title,
  description = "No Description",
  time,
}: CardProps) => {
  return (
    <div className="container mb-2 mx-auto py-3 px-5 bg-slate-500 rounded-lg">
      <h2>{title}</h2>

      <p>
        <span>{time}</span> &nbsp;&nbsp;
        <span className={styles.description}>{description}</span>
      </p>
    </div>
  );
};
