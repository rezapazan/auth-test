"use server";

export const Login = async () => {
  const res = await fetch("https://randomuser.me/api/?results=1&nat=us", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    return res.json();
  } else {
    return new Error("Request Failed");
  }
};
