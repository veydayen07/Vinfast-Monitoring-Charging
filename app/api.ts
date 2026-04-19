const ROOTAPI = process.env.BASE_API;

export const fetchAPI = async <T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> => {
  const res = await fetch(`${ROOTAPI}${endpoint}`, {
    ...options,
    cache: options?.cache ?? "no-store",
  });

  if (!res.ok) {
    let message = "Something went wrong";

    try {
      const err = await res.json();
      message = err.message || message;
    } catch {
      console.error("Failed to parse error response");
    }

    throw new Error(message);
  }

  return res.json();
};
