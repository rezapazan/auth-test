import { type QueryKey, useMutation, useQuery } from "@tanstack/react-query";
import { isEmpty, omit, reject } from "lodash";
import { axiosClient } from "../clients";
import { type RandomUser } from "./randomuser.types";

export const randomUser = {
  url: () => ``,
  fn: async (request: RandomUser["request"]) => {
    const { data } = await axiosClient<RandomUser["response"]>({
      ...request?.axiosConfig,
      method: "GET",
      url: randomUser.url(),
      params: {
        results: 1,
        nat: "us",
      },
    });

    return data;
  },
  key: (request?: RandomUser["request"]) => {
    return reject(
      [randomUser.url(), omit(request ?? {}, "axiosConfig")],
      isEmpty,
    ) as QueryKey;
  },
  query: (options?: RandomUser["queryOptions"]) => ({
    ...options?.queryOptions,
    queryKey: randomUser.key(),
    queryFn: () => randomUser.fn(),
  }),
  useQuery: (options?: RandomUser["queryOptions"]) =>
    useQuery(randomUser.query(options)),
  useMutation: (options?: RandomUser["mutationOptions"]) =>
    useMutation({
      ...options,
      mutationFn: randomUser.fn,
    }),
};
