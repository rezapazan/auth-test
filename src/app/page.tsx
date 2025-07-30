import Link from "next/link";
import styles from "./main.module.scss";

export default function Home() {
  return (
    <div className={styles["main"]}>
      <h1 className={styles["main__header"]}>Welcome!</h1>
      <Link className={styles["main__link"]} href={"/auth"}>
        Login
      </Link>
    </div>
  );
}
