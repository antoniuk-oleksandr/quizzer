import axios, { AxiosRequestConfig, Method } from "axios";
import { jwtDecode } from "jwt-decode";
import { tokenStore } from "./token-store";
import { useToastStore } from "@/components/Toast/toast-store";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface JwtPayload {
  exp: number;
}

interface RequestParams {
  path: string;
  method?: Method;
  useToken?: boolean;
  body?: any;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "/api";

function getToken(useToken: boolean): string | null {
  const { token: storeToken, setToken } = tokenStore.getState();

  if (storeToken) return storeToken;
  if (!useToken) return null;

  const localToken = localStorage.getItem("accessToken");
  if (localToken) {
    setToken(localToken);
    return localToken;
  }

  return null;
}

function isTokenExpired(token: string): boolean {
  const decoded: JwtPayload = jwtDecode(token);
  tokenStore.setState({ exp: decoded.exp });
  return decoded.exp * 1000 < Date.now();
}

async function handleToken(
  token: string | null,
  useToken: boolean,
): Promise<string | null> {
  if (!token || !useToken) return token;

  if (isTokenExpired(token)) {
    const newToken = await refreshToken();
    const decodedNew: JwtPayload = jwtDecode(newToken);
    tokenStore.setState({ exp: decodedNew.exp, token: newToken });
    localStorage.setItem("accessToken", newToken);
    return newToken;
  }

  return token;
}

export async function request<T = any>({
  path,
  method = "GET",
  useToken = false,
  body,
}: RequestParams): Promise<T> {
  let token = getToken(useToken);
  token = await handleToken(token, useToken);

  const axiosConfig: AxiosRequestConfig = {
    url: path,
    method,
    baseURL: API_BASE_URL,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      "Content-Type": "application/json",
    },
    data: body,
  };

  const response = await axios(axiosConfig);
  return response.data;
}

//TODO: Implement actual refresh logic
async function refreshToken(): Promise<string> {
  throw new Error("Not implemented");
}
