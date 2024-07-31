"use client";
import Primarybutton from "@/components/button/Primarybutton";
import FormWrapper from "@/components/FormWrapper";
import SVGAtom from "@/components/SVGAtom";
import Title from "@/components/Title";
import { Container } from "@/layout/Container";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const ConnectBankPage = () => {
  const router = useRouter();
  return (
    <Container className="gap-3">
      <FormWrapper className="min-h-[660px] flex flex-col gap-8">
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
        <Title>Connect your bank account securely</Title>
        <div className="flex flex-col gap-9 items-center">
          <p className="text-sm text-black leading-6">
            Unlock the full potential of Reelin. We analyze transactions for
            deeper insights only without the access to perform any transactions
            on your accounts. {"<"}So it’s totally save 😉{">"}
          </p>
          <SVGAtom iconName="padlock" width={166} height={166} />
        </div>

        <Primarybutton
          type="button"
          onClick={() => router.push("/account-success")}
          className="w-[176px] rounded-[4px] self-end flex items-center gap-[10px] justify-center text-sm leading-6"
        >
          Connect with Plaid
          <SVGAtom
            iconName="arrowRight"
            width={10}
            height={10}
            color="#18181B"
          />
        </Primarybutton>
        <p className="leading-[20px] font-medium text-grey-300 text-base mt-8 text-center">
          Already have an account?{" "}
          <Link href={"/sign-in"} className="text-black-100">
            Sign in
          </Link>
        </p>
      </FormWrapper>
      <div>
        <h4 className="text-grey-100 text-sm font-normal">
          Reelin is optimized for US users only.
        </h4>
      </div>
    </Container>
  );
};

export default ConnectBankPage;
