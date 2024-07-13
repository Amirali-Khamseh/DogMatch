"use client";
import { registerUser } from "@/app/actions/authActions";
import { registerSchema, RegisterSchema } from "@/lib/schemas/RegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Input,
  user,
} from "@nextui-org/react";

import React from "react";
import { useForm } from "react-hook-form";
import { BsPersonLock } from "react-icons/bs";

export default function RegisterForm() {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });
  const onSubmit = async (data: RegisterSchema) => {
    const result = await registerUser(data);
    if (result.status === "success") {
      console.log("user registered successfully");
    } else {
      if (Array.isArray(result.error)) {
        result.error.forEach((item) => {
          const fieldName = item.path.join(".") as
            | "email"
            | "name"
            | "password";
          setError(fieldName, { message: item.message });
        });
      } else {
        setError("root.ServerError", { message: result.error });
      }
    }
  };

  return (
    <Card className="w-2/5 mx-auto ">
      <CardHeader className="flex justify-center">
        <BsPersonLock size={30} />
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Input
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
            <Input
              label="Name"
              variant="bordered"
              {...register("name")}
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message as string}
            />
            {errors.root?.ServerError && (
              <p className="text-danger text-sm">
                {errors.root.ServerError.message}
              </p>
            )}
            <Button
              isLoading={isSubmitting}
              isDisabled={!isValid}
              fullWidth
              type="submit"
              variant="flat"
              color="primary"
            >
              Register
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
