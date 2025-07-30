"use client";

import Button from "@/components/Button";
import { Input } from "@/components/Input";
import { LoginSchema } from "@/schemas/login";
import { type LoginInputs } from "@/types/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import styles from "./styles.module.scss";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<LoginInputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles["login"]}>
      <h2 className={styles["login__header"]}>Login Form</h2>
      <Input
        label="Phone"
        labelPosition="top"
        type="tel"
        placeholder="09xxxxxxxxx"
        hasError={(errors.phoneNumber?.message?.length ?? 0) > 0}
        className={styles["login__input"]}
        {...register("phoneNumber")}
        id="phoneNumber"
        errorMessage={errors.phoneNumber?.message}
      />
      <Input
        label="Password"
        labelPosition="top"
        type="password"
        placeholder="••••••••"
        {...register("password")}
        hasError={(errors.password?.message?.length ?? 0) > 0}
        id="password"
        errorMessage={errors.password?.message}
      />

      <Button
        className={styles["login__submit"]}
        onClick={() => console.log("Clicked Login!")}
        type="submit"
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
