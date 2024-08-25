export type FetchArgs = {
  path: string;
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit;
  credentials?: RequestCredentials;
  mode?: RequestMode;
  cache?: RequestCache;
  redirect?: RequestRedirect;
  referrer?: string;
  referrerPolicy?: ReferrerPolicy;
  integrity?: string;
  signal?: AbortSignal;
};

export type FetchActions = {
  store?: string[],
  redirect?: string,
} | undefined;