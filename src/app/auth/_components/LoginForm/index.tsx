"use client";

import Button from "@/components/Button";
import { Input } from "@/components/Input";
import { LoginSchema } from "@/schemas/login";
import { Login } from "@/services/server/login";
import { type LoginInputs } from "@/types/login";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useActionState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import styles from "./styles.module.scss";

const LoginForm = () => {
  const router = useRouter();
  const [state, action, pending] = useActionState(Login, null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: zodResolver(LoginSchema),
  });

  // const { mutate, isPending } = randomUser.useMutation({
  //   onSuccess: (res) => {
  //     localStorage.setItem("user", JSON.stringify(res.results[0]));
  //     router.push("/dashboard");
  //   },
  //   onError: () => {
  //     router.replace("/");
  //   },
  // });

  const onSubmit: SubmitHandler<LoginInputs> = async () => {
    // mutate();
    // const formData = new FormData();
    const response = await Login();
    localStorage.setItem("user", JSON.stringify(response.results[0]));
    router.push("/dashboard");
  };

  return (
    <form
      // action={action}
      onSubmit={handleSubmit(onSubmit)}
      className={styles["login"]}
    >
      <h2 className={styles["login__header"]}>Login Form</h2>
      <Input
        label="Phone"
        labelPosition="top"
        type="tel"
        placeholder="09xxxxxxxxx"
        // hasError={(state?.errors?.phoneNumber?.length ?? 0) > 0}
        hasError={(errors?.phoneNumber?.message?.length ?? 0) > 0}
        className={styles["login__input"]}
        {...register("phoneNumber")}
        id="phoneNumber"
        // errorMessage={state?.errors?.phoneNumber?.[0] ?? ""}
        errorMessage={errors?.phoneNumber?.message ?? ""}
      />
      <Input
        label="Password"
        labelPosition="top"
        type="password"
        placeholder="••••••••"
        {...register("password")}
        // hasError={(state?.errors?.password?.length ?? 0) > 0}
        hasError={(errors?.password?.message?.length ?? 0) > 0}
        id="password"
        // errorMessage={state?.errors?.password?.[0] ?? ""}
        errorMessage={errors?.password?.message ?? ""}
      />

      <Button
        disabled={pending}
        className={clsx(
          styles["login__submit"],
          pending && styles["login__submit--disabled"],
        )}
        type="submit"
      >
        {pending ? "Logging In..." : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;
