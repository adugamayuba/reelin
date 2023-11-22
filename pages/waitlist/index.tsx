
import { BlackLogo } from '../../assets/svg';
import ContainerLayout from '../../Layouts/ContainerLayout';
import Image from 'next/image';
import homer from "../../assets/png/homer.png"
const WaitlistPage = () => {
  return (
    <div className='w-full'>
    
      <ContainerLayout>
        <div className="w-full flex flex-col lg:flex-row relative h-full items-center justify-center 2xl:mt-8 ">
          {/* lrft side */}
          <div className="w-full lg:w-7/12 flex flex-col lg:pl-8 xl:pl-12 ">
            <span>
              <BlackLogo />
            </span>
            <h1 className="text-customBlack text-[28px] lg:text-[44px] w-full max-w-[496px] font-bold leading-[33px] lg:leading-[52px] mt-2 lg:mt-12">
              Be the first to know when we launch reelin!
            </h1>
            <p className="w-full max-w-[496px] mt-6 lg:text-lg text-base inter text-customBlack">
              Enter your email to get notified the moment we are live!
            </p>

            <div className="w-full border-slate-200  rounded-[8px] max-w-[496px] border flex items-center h-[60px] py-[10px] px-4 space-x-3 mt-6">
              <span>
                <EmailIcon />
              </span>
              <input
                type="text"
                className="text-base lg:text-lg outline-none border-none bg-inherit placeholder:text-[#828282] font-[300] noto "
              />
            </div>
            <div className="mt-4 flex items-center space-x-3">
              <input type="checkbox" className="accent-black" id="" />
              <p className="w-full max-w-[496px]  lg:text-sm text-xs inter text-customBlack">
                Agree to receive emails and newsletter from Reelin
              </p>
            </div>
            <div className="w-full max-w-[496px] mt-12 ">
                          <button className="w-full rounded-[8px] bg-customBlack text-white h-[60px] hover:bg-[#0047A7] cursor-pointer">
                              Join waitlist
              </button>
            </div>
          </div>
          {/* right  side */}
          {/* lrft side */}
                  <div className="w-full lg:mt-0 mt-8 lg:w-5/12 flex justify-end relative h-full">
                      <div className="w-full flex ">
                          <Image src={homer} alt='homer'  />
                      </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default WaitlistPage


const EmailIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M2 6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V6ZM5.519 6L12 11.671L18.481 6H5.519ZM20 7.329L12.659 13.753C12.4766 13.9128 12.2424 14.0009 12 14.0009C11.7576 14.0009 11.5234 13.9128 11.341 13.753L4 7.329V18H20V7.329Z"
          fill="#828282"
        />
      </svg>
    );
}
