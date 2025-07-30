"use server";

export const Login = async () => {
  // const validationResult = LoginSchema.safeParse({
  //   phoneNumber: formData.get("phoneNumber"),
  //   password: formData.get("password"),
  // });

  // if (!validationResult.success)
  //   return { errors: validationResult.error.flatten().fieldErrors };

  const res = await fetch("https://randomuser.me/api/?results=1&nat=us", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) return res.json();
};
