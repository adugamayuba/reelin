"use client";
import Primarybutton from "@/components/button/Primarybutton";
import FormWrapper from "@/components/FormWrapper";
import CustomInput from "@/components/input/CustomInput";
import SVGAtom from "@/components/SVGAtom";
import Title from "@/components/Title";
import { Container } from "@/layout/Container";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const SignUpPage = () => {
  const router = useRouter();
  return (
    <Container className="gap-8">
      <FormWrapper className="min-h-[545px] pt-20">
        <Title>Create a reelin account</Title>
        <form className="mt-8 flex flex-col gap-5">
          <CustomInput placeholder="full name here" label="Name" type="text" />
          <CustomInput
            placeholder="example@mail.com"
            label="Email"
            type="email"
          />
          <CustomInput placeholder="*****" label="Password" type="password" />
          <Primarybutton
            onClick={() => router.push("/connect-bank")}
            type="button"
            className="w-[116px] rounded-[4px] self-end flex items-center gap-[10px] justify-center mt-6 text-sm leading-6"
          >
            Continue
            <SVGAtom
              iconName="arrowRight"
              width={10}
              height={10}
              color="#18181B"
            />
          </Primarybutton>
        </form>
        <p className="leading-[20px] font-medium text-grey-300 text-base mt-8 text-center">
          Already have an account?{" "}
          <Link href={"/sign-in"} className="text-black-100">
            Sign in
          </Link>
        </p>
      </FormWrapper>
      <div className="flex items-center gap-3">
        <Image
          src={"/image/flag.png"}
          alt="flag"
          width={18}
          height={18}
          className="object-cover"
        />
        <h4 className="text-grey-100 text-sm font-normal">
          Reelin is optimized for US users only.
        </h4>
      </div>
    </Container>
  );
};

export default SignUpPage;
