import { handleFetchError } from "../utils/error"

export async function FetchWrapper({
  cache = "no-cache",
  tags,
  endpoint,
  revalidate,
  headers,
  token,
  options,
}: {
  cache?: RequestCache
  tags?: string[]
  endpoint: string
  revalidate?: number
  headers?: HeadersInit
  token?: string
  options?: RequestInit
}) {
  try {
    const response = await fetch(endpoint, {
      ...options,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...headers,
      },
      cache,
      ...(tags && { next: { tags, revalidate } }),
    })
    return await response.json()
  } catch (e) {
    handleFetchError()
    throw e
  }
}
