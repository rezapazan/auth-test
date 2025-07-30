import type {
  UseInfiniteQueryOptions,
  UseMutationOptions,
  UseQueryOptions,
} from "@tanstack/react-query";
import type { AxiosRequestConfig } from "axios";

export type AxiosConfig = Omit<
  AxiosRequestConfig,
  "baseURL" | "method" | "url" | "params" | "data"
>;

export type TRequest<Request = unknown> = unknown extends Request
  ? { axiosConfig?: AxiosConfig } | void
  : Request & { axiosConfig?: AxiosConfig };

export type TResponse<Response = unknown> = Response;

export type TError<Error = unknown> = unknown extends Error
  ? unknown
  : { message: Error };

export type TUseQueryOptions<Response, Error, Request> = void extends Request
  ? {
      queryOptions?: Omit<
        UseQueryOptions<Response, Error>,
        "queryKey" | "queryFn"
      >;
    } | void
  : {
      infiniteQueryOptions?: Omit<
        UseInfiniteQueryOptions<Response, Error>,
        "queryKey" | "queryFn"
      >;
      request: Request;
      queryOptions?: Omit<
        UseQueryOptions<Response, Error>,
        "queryKey" | "queryFn"
      >;
    };

export type TUseMutationOptions<Response, Error, Request> = Omit<
  UseMutationOptions<Response, Error, Request>,
  "mutationFn"
>;
