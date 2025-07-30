import clsx from "clsx";
import styles from "./styles.module.scss";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  hasError?: boolean;
  label?: string | React.ReactNode;
  labelPosition?: "top" | "left";
  labelClassName?: string;
  containerClassName?: string;
  errorMessage?: string;
}

export const Input = ({
  label,
  labelPosition = "top",
  labelClassName,
  containerClassName,
  className,
  hasError = false,
  id,
  errorMessage,
  ...props
}: InputProps) => {
  const inputId = id || `input_${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div
      className={clsx(
        styles.inputContainer,
        styles[`label_${labelPosition}`],
        containerClassName,
      )}
    >
      {label && (
        <label
          htmlFor={inputId}
          className={clsx(styles.inputLabel, labelClassName)}
        >
          {label}
        </label>
      )}

      <input
        id={inputId}
        className={clsx(
          styles.input,
          { [styles["--error"]]: hasError },
          className,
        )}
        {...props}
      />
      {hasError ? (
        <span className={styles["inputMessage"]}>{errorMessage}</span>
      ) : (
        <></>
      )}
    </div>
  );
};
