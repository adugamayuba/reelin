import React from 'react'
import Image from 'next/image';
const SingleTest = () => {
  return (
    <div className="bg-transparent px-3 ">
      <figure className="md:flex bg-transparent rounded-xl px-4 py-8 shadow-lg lg:p-8 md:p-0 dark:bg-slate-800 border border-slate-400">
        <Image
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://res.cloudinary.com/www-daniekeys-com/image/upload/v1658594783/samp_ogv94k.jpg"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-base lg:text-lg font-medium">
              "I couldn't have asked for a better internship experience. The
              platform connected me with a cutting-edge tech company that
              aligned perfectly with my interests. I gained hands-on experience,
              expanded my skill set, and built valuable connections. It was a
              stepping stone towards a successful career in the tech industry.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-[#525252] text-lg"> Smauel James</div>
            <div className="text-lg italic text-[#525252] mt-[10px]">
              Product Designer
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default SingleTest


{/* <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512">
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}