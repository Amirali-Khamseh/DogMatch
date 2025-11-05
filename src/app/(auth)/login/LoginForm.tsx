"use client";
import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import React from "react";
import { CiLock } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { loginSchema, LoginSchema } from "@/lib/schemas/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInUser } from "@/app/actions/authActions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";
import SocialLogin from "./SocialLogin";

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });
  const onSubmit = async (data: LoginSchema) => {
    const result = await signInUser(data);
    if (result.status === "success") {
      router.push("/members");
      router.refresh();
    } else {
      toast.error(result.error as string);
    }
  };
  return (
    <Card className="w-[90%] md:w-2/5 mx-auto ">
      <CardHeader className="flex justify-center">
        <CiLock size={30} />
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            {/*The email provider --- resend --- doesn't support the vercel domains , so i will not use the email based logging functionality and its corresponding services*/}
            {/* <Input
              label="Email"
              variant="bordered"
              {...register("email")}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message as string}
            />
            <Input
              label="Password"
              variant="bordered"
              type="password"
              {...register("password")}
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message as string}
            />
            <Button
              isDisabled={!isValid}
              fullWidth
              type="submit"
              variant="flat"
              color="success"
              isLoading={isSubmitting}
            >
              Login
            </Button> */}
            <SocialLogin />
            {/* <div className="flex justify-center text-primary-500 hover:underline text-sm">
              <Link href="/forgot-password">I forgot my password</Link>
            </div> */}
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
