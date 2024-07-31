"use client";
import Primarybutton from "@/components/button/Primarybutton";
import SelectButtonIcon from "@/components/button/SelectButtonIcon";
import FormWrapper from "@/components/FormWrapper";
import SVGAtom from "@/components/SVGAtom";
import Title from "@/components/Title";
import { Container } from "@/layout/Container";
import { useRouter } from "next/navigation";
import React from "react";

const SelectBankOrUploadFilePage = () => {
  const router = useRouter();

  return (
    <Container className="gap-8">
      <FormWrapper className="h-fit pt-8">
        <Title>How do you want to bring your data?</Title>
        <div className="mt-8 flex flex-col">
          <p className="text-sm text-black leading-6">
            Select an option on how you want to bring your data to reelin?
          </p>
          <div className="flex flex-col gap-2 mt-8">
            <SelectButtonIcon
              iconName="checkCircle"
              title="Source from banks"
              subTitle="Gather your information data from your selected bank"
              iconName2="bankIcon"
              onClick={() => {}}
              className="gap-4"
            />
            <SelectButtonIcon
              title="Upload files"
              subTitle="Upload financial data from a file (e.g PDF or excel files)"
              onClick={() => {}}
              iconName="checkCircle"
              iconName2="fileIcon"
            />
          </div>
          <Primarybutton
            onClick={() => router.push("/select-bank-upload")}
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
        </div>
      </FormWrapper>
    </Container>
  );
};

export default SelectBankOrUploadFilePage;
