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

const SignInPage = () => {
  const router = useRouter();
  return (
    <Container className="gap-8">
      <FormWrapper className="h-fit pt-8">
        <Title>Login</Title>
        <form className="mt-8 flex flex-col">
          <div className="flex flex-col gap-5">
            <CustomInput
              placeholder="example@mail.com"
              label="Email"
              type="email"
            />
            <div className="flex flex-col gap-2">
              <CustomInput
                placeholder="*****"
                label="Password"
                type="password"
              />
              <Link
                href={"/reset-password"}
                className="leading-[20px] font-medium text-black-100 text-sm text-right"
              >
                Reset Password
              </Link>
            </div>
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
        </form>
        <p className="leading-[20px] font-medium text-grey-300 text-base mt-8 text-center">
          Don’t have an account?{" "}
          <Link href={"/sign-up"} className="text-black-100">
            Register
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

export default SignInPage;
