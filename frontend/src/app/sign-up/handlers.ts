import { request } from "@/api/request";
import { tokenStore } from "@/api/token-store";
import { useToastStore } from "@/components/Toast/toast-store";
import { JwtData } from "@/types/JwtData";
import { SignUpFormData } from "@/types/SignUpFormContextType";
import { AxiosError } from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { UseFormSetError } from "react-hook-form";

export const handleSignUp = async (
  data: SignUpFormData,
  router: AppRouterInstance,
  setError: UseFormSetError<SignUpFormData>,
) => {
  const { confirmPassword, ...requestBody } = data;

  try {
    const response = await request<JwtData>({
      method: "POST",
      path: "/auth/users",
      body: requestBody,
    });

    localStorage.setItem("accessToken", response.accessToken);
    localStorage.setItem("refreshToken", response.refreshToken);
    tokenStore.setState({ token: response.accessToken });
    router.push("/");
    useToastStore
      .getState()
      .showToast("You have successfully signed up!", "success");
  } catch (error: any) {
    if (!error || !(error instanceof AxiosError) || !error.response) {
      return;
    }

    const message = error.response.data.message;
    console.log(message);
    if (message === "User already exists") {
      setError("username", {
        type: "manual",
        message: "Username or email already in use",
      });
      setError("email", {
        type: "manual",
        message: "Username or email already in use",
      });
    }
  }
};
