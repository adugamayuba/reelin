import {useState} from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import Image from 'next/image'
import leftStar from "../../assets/png/left-star.png";
import rightStar from "../../assets/png/right-star.png";
import { toast } from 'react-toastify';
import { postWaitList } from '../../services/homeServices';

const ContactUs = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const handlePost = () => {
    
      setLoading(true);
      const data = {
        email: email,
        name: name,
      };

      const resp = postWaitList(data).then((res) => {
        setLoading(false);
        setEmail("");
        setName("");
        setMessage("");

        toast.success(
          "Successfully!  We will get back to you as soon as possible"
        );
      });
    };
  return (
    <div className="w-full bg-background pb-24 pt-24  ">
      <ContainerLayout>
        <div className="w-full relative flex flex-col ">
          <span className=" z-[2] ml-16 hidden lg:flex ">
            <Image
              src={leftStar}
              alt="leftstar"
              width={leftStar?.width}
              height={leftStar?.height}
            />
          </span>
          <div className="w-full z-10 bg-greyish h-full lg:min-h-[383px]  py-12 lg:-mt-16 flex items-center">
            <div className="w-full lg:w-10/12 mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between h-full ">
              {/* left side */}
              <div className="w-full lg:w-6/12 px-3 xl:w-6/12 flex flex-col justify-center h-full">
                <h1 className="text-black text-2xl lg:text-[36px] font-bold">
                  Join our reeelin newsletter
                </h1>
                <p className="text-black mt-6 max-w-[536px] ">
                  We will keep you updated with amazing deals and offers, plus
                  hot news coming from reelin products and features, be the
                  first to know
                </p>
              </div>

              {/* right side */}
              <div className="w-full flex flex-col lg:w-5/12 px-4 mt-8 lg:mt-0">
                <div className="flex flex-col">
                  <input
                    type="text"
                    className=" bg-transparent flex items-center px-6 mt-2 placeholder:text-customBlack border border-black rounded-[2px] w-full h-[60px] outline-none"
                    placeholder=" Full Name"
                    required
                    value={name}
                    onChange={(e: any) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="email"
                    required
                    className="bg-transparent flex items-center px-6 mt-2 placeholder:text-customBlack border border-black rounded-[2px] w-full h-[60px] outline-none"
                    placeholder="Email"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                  />
                </div>
                <div className='w-full'>

                  <button onClick={handlePost} disabled={loading} className="w-full mt-6 bg-black h-[60px] flex items-center justify-center text-white cursor-pointer rounded-[2px] font-medium text-sm">
                    {
                      loading ? "Loading" : "Join newsletter"
                    }
                  
                </button>
                </div>
              </div>
            </div>
          </div>
          <span className=" hidden  z-[2] mr-16 -mt-[56px] lg:flex justify-end ">
            <Image
              src={rightStar}
              alt="leftstar"
              width={leftStar?.width}
              height={leftStar?.height}
            />
          </span>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default ContactUs
