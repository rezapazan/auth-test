"use client";

import Button from "@/components/Button";
import { Input } from "@/components/Input";
import { LoginSchema } from "@/schemas/login";
import { randomUser } from "@/services/client/randomuser/randomuser.api";
import { type LoginInputs } from "@/types/login";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { type SubmitHandler, useForm } from "react-hook-form";
import styles from "./styles.module.scss";

const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: zodResolver(LoginSchema),
  });

  const { mutate, isPending } = randomUser.useMutation({
    onSuccess: (res) => {
      localStorage.setItem("user", JSON.stringify(res.results[0]));
      router.push("/dashboard");
    },
    onError: () => {
      router.replace("/");
    },
  });

  const onSubmit: SubmitHandler<LoginInputs> = () => {
    mutate();
  };

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
        disabled={isPending}
        className={clsx(
          styles["login__submit"],
          isPending && styles["login__submit--disabled"],
        )}
        type="submit"
      >
        {isPending ? "Logging In..." : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;
