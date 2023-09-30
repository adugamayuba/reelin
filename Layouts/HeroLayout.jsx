import React from "react";
const styles = {
  parentContainer:
    "w-full  dark:bg-[#151515] overflow-x-hidden md:overflow-x-auto   ",
  container: "2xl:container 2xl:mx-auto ",
  chiefCenter: "max-w-[1300px] w-full   md:px-6 2xl:px-0 mx-auto  ",
};
const HeroLayout = ({ children }) => {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.container}>
        <div className={styles.chiefCenter}>{children}</div>
      </div>
    </div>
  );
};

export default HeroLayout;
