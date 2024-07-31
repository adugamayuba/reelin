"use client";
import Primarybutton from "@/components/button/Primarybutton";
import FormWrapper from "@/components/FormWrapper";
import CustomInput from "@/components/input/CustomInput";
import SVGAtom from "@/components/SVGAtom";
import Title from "@/components/Title";
import { Container } from "@/layout/Container";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const ResetPasswordPage = () => {
  const router = useRouter();

  return (
    <Container className="gap-8">
      <FormWrapper className="h-fit flex flex-col gap-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-3 mt-8 text-grey-100 text-sm leading-4"
        >
          <SVGAtom
            iconName="arrowLeft"
            color="#9D9D9D"
            width={24}
            height={24}
          />
          <p>Back</p>
        </button>
        <div>
          <Title>Forgot Password</Title>
          <p className="text-sm text-black leading-6">
            Enter your email and we’ll help you reset your password.
          </p>
        </div>
        <form className="flex flex-col ">
          <CustomInput
            placeholder="example@mail.com"
            label="Email"
            type="email"
          />
          <Primarybutton
            onClick={() => router.push("/sign-in")}
            type="button"
            className="w-[220px] rounded-[4px] self-end flex items-center gap-[10px] justify-center mt-14 text-sm leading-6"
          >
            Send Password Reset Link
            <SVGAtom
              iconName="arrowRight"
              width={10}
              height={10}
              color="#18181B"
            />
          </Primarybutton>
        </form>
        <p className="leading-[20px] font-medium text-grey-300 text-base text-center">
          Already have an account?{" "}
          <Link href={"/sign-in"} className="text-black-100">
            Sign in
          </Link>
        </p>
      </FormWrapper>
    </Container>
  );
};

export default ResetPasswordPage;
