"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styles from "./styles.module.scss";

const Dashboard = () => {
  const user: string = localStorage.getItem("user") ?? "";
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/auth");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  const userData = JSON.parse(user);
  return (
    <div className={styles["dashboard"]}>
      Welcome, {userData.name.title}. {userData.name.last}
    </div>
  );
};

export default Dashboard;
