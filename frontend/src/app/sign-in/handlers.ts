import { request } from "@/api/request";
import { tokenStore } from "@/api/token-store";
import { useToastStore } from "@/components/Toast/toast-store";
import { JwtData } from "@/types/JwtData";
import { SignInFormData } from "@/types/SignInFormContextType";
import { AxiosError } from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import router from "next/router";
import { UseFormResetField, UseFormSetError } from "react-hook-form";
import { unknown } from "zod/v3";

export const handleSignInFormSubmit = async (
  data: SignInFormData,
  router: AppRouterInstance,
  setError: UseFormSetError<SignInFormData>,
) => {
  try {
    const response = await request<JwtData>({
      method: "POST",
      path: "/auth/sessions",
      body: data,
    });

    localStorage.setItem("accessToken", response.accessToken);
    localStorage.setItem("refreshToken", response.refreshToken);
    tokenStore.setState({ token: response.accessToken });
    router.push("/");
    useToastStore
      .getState()
      .showToast("You have successfully signed in!", "success");
  } catch (error: any) {
    if (!error || !(error instanceof AxiosError) || !error.response) {
      return;
    }

    const message = error.response.data.message;
    if (message === "Invalid credentials") {
      setError("password", {
        type: "manual",
        message: "Invalid username/email or password",
      });
    } else if (message === "User not found") {
      setError("usernameOrEmail", {
        type: "manual",
        message: "User not found",
      });
    }
  }
};
