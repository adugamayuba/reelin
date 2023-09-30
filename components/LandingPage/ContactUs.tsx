import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'

const ContactUs = () => {
  return (
    <div className="w-full  py-12 fine-bg mt-12 flow-hide" id='contact'>
      <ContainerLayout>
        <div className="w-full flex flex-col flow-hide ">
          {/* left side */}
          <div
            className="w-full lg:w-1/2 mx-auto flex flex-col mt-8 lg:mt-0 bg-white p-12 flow-hide"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1 className="text-customBlack text-center font-semibold text-2xl lg:text-[36px] lg:leading-[120%] mb-4">
              Contact Us Today
            </h1>
            <p className="text-sm sm:text-lg text-ash lg:text-lg w-full lg:w-10/12 text-center">
              Have questions or need assistance? We're here to help.
            </p>
            <div className="flex flex-col mt-6 w-full lg:w-10/12 space-y-5 mx-auto">
              <div className="flex flex-col">
                <input
                  type="text"
                  className="rounded-[8px] flex items-center px-6 mt-2 placeholder:text-ash placeholder:text-opacity-40 border border-ash border-opacity-40 w-full h-[60px] outline-ash"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="email"
                  required
                  className="rounded-[8px] flex items-center px-6 mt-2 placeholder:text-ash placeholder:text-opacity-40 border border-ash border-opacity-40 w-full h-[60px] outline-ash"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col">
                <textarea
                  className="rounded-[8px] pt-5 px-6 mt-2 placeholder:text-ash placeholder:text-opacity-40 border border-ash border-opacity-40 w-full h-[100px] outline-ash"
                  placeholder="Message"
                />
              </div>
            </div>
            <button className="w-10/12 mx-auto h-[48px]  py-6 bg-[#0047A7] text-white flex items-center justify-center rounded-[8px] mt-[48px] cursor-pointer ">
              Send
            </button>
          </div>
          {/* end pf left ##############################################33side */}

          {/* right  side */}
        </div>
      </ContainerLayout>
    </div>
  );
}

export default ContactUs
