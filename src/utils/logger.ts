export const activeLogger = false;
export const log = {
  error: (input: any) =>
    activeLogger ? console.log("%cFail: ", "color:white;background:red;padding:1px 4px;border-radius:2px;", input) : null,
  request: (input: any) =>
    activeLogger
      ? console.log(`%cRequest -> ${input?.url}:`, "color:white;background:#1E90FF;padding:1px 4px;border-radius:2px;", input)
      : null,
  response: (input: any) =>
    activeLogger
      ? console.log(
          `%cResponse -> ${input?.config?.url}: `,
          "color:white;background:#228B22;padding:1px 4px;border-radius:2px;",
          input?.data
        )
      : null,
};
