"use client";
import Primarybutton from "@/components/button/Primarybutton";
import SelectButtonIcon from "@/components/button/SelectButtonIcon";
import FormWrapper from "@/components/FormWrapper";
import SVGAtom from "@/components/SVGAtom";
import Title from "@/components/Title";
import "./customize.css";
import { Container } from "@/layout/Container";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import DragAndDropComponent from "@/components/input/DragAndDropComponent";

const UploadFilePage = () => {
  const router = useRouter();
  const [fileUrl, setFileUrl] = useState("");
  const onFileChange = (files: any) => {
    console.log(files);
    // const url = URL.createObjectURL(files)
    // setFileUrl(url)
  };
  return (
    <Container className="gap-8">
      <FormWrapper className="h-fit pt-8">
        <Title>Upload your file(s)</Title>
        <div className="mt-8 flex flex-col">
          <p className="text-sm text-black leading-6">
            Select file(s) to upload
          </p>
          <div className="flex flex-col gap-2 mt-8 h-28">
            <DragAndDropComponent
              title="Drag a file(s) to upload"
              subTitle="click to select a file or drag and drop a file to upload"
              iconName="checkCircle"
              iconName2="fileIcon"
              onFileChange={(files: any) => onFileChange(files)}
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

export default UploadFilePage;
