import clsx from "clsx";
import styles from "./styles.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button className={clsx(styles.button, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
