import ArrowLeft from "@geist-ui/icons/arrowLeft";
import Link from "next/link";
import LoginForm from "./_components/LoginForm";
import styles from "./styles.module.scss";

const Auth = () => {
  return (
    <div className={styles["auth"]}>
      <Link className={styles["auth__back"]} href={"/"}>
        <ArrowLeft color="black" size={20} />
        <span>Back</span>
      </Link>
      <LoginForm />
    </div>
  );
};

export default Auth;
