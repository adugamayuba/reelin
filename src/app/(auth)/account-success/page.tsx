"use client";
import Primarybutton from "@/components/button/Primarybutton";
import FormWrapper from "@/components/FormWrapper";
import SVGAtom from "@/components/SVGAtom";
import Title from "@/components/Title";
import { Container } from "@/layout/Container";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const AccountCreatedSuccessfullyPage = () => {
  const router = useRouter();
  return (
    <Container className="gap-8">
      <FormWrapper className="min-h-[569px] flex flex-col gap-8">
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
        <Title>Account created successfully</Title>
        <div className="flex flex-col gap-9 items-center">
          <p className="text-sm text-black leading-6">
            Unlock the full potential of Reelin. We analyze transactions for
            deeper insights only without the access to perform any transactions
            on your accounts. {"<"}So it’s totally save 😉{">"}
          </p>
          <SVGAtom iconName="success" width={166} height={166} />
        </div>
      </FormWrapper>
    </Container>
  );
};

export default AccountCreatedSuccessfullyPage;
