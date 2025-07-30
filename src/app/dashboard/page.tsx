"use client";

import { type User } from "@/services/client/randomuser/randomuser.types";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import styles from "./styles.module.scss";

const Dashboard = () => {
  const user: string = localStorage.getItem("user") ?? "";
  const router = useRouter();

  if (!user || user.length < 1) router.replace("/");

  const userData = useMemo<User>(() => {
    return JSON.parse(user);
  }, [user]);

  return (
    <div className={styles["dashboard"]}>
      Welcome, {userData.name.title}. {userData.name.last}
    </div>
  );
};

export default Dashboard;
