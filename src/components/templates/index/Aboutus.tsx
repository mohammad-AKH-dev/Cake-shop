import SectionTitle from "@/components/modules/index/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Aboutus() {

  type tabsType = {
    id: number;
    tabId: number;
    content: string;
    title: string;
    desc: string;
  };

  const [selectedTab, setSelectedTab] = useState<tabsType>({
    id: 1,
    tabId: 1,
    content: "our missions",
    title: "providing quality baked goods for all customers",
    desc: "Our mission is to create a bakery that makes the best quality baked goods on site from scratch, and where both employees and customers would feel comfortable.",
  });
  const [tabs, setTabs] = useState<tabsType[] | []>([
    {
      id: 1,
      tabId: 1,
      content: "our missions",
      title: "providing quality baked goods for all customers",
      desc: "Our mission is to create a bakery that makes the best quality baked goods on site from scratch, and where both employees and customers would feel comfortable.",
    },
    {
      id: 2,
      tabId: 2,
      content: "our values",
      title: "Ensuring the Best Atmosphere for Everyone",
      desc: "We see the most important part of our business in ensuring the happiness of our staff and the satisfaction of our clients by creating a welcoming and caring atmosphere.",
    },
    {
      id: 3,
      tabId: 3,
      content: "our goals",
      title: "Serving only the freshest baked goods for you",
      desc: "We aim to deliver the best baked goods for corporate events and individual celebrations, while also offering the best level of customer service in the United States.",
    },
  ]);

  return (
    <section className="about-us__section mt-16">
      <div className="container">
        <SectionTitle title="about us" />
        <div className="about-us__content flex flex-col items-centre justify-center
         sm:grid place-items-center lg:place-items-stretch text-center lg:text-left lg:grid-cols-2 gap-x-3 mt-16">
          <div className="about-us__left-section">
            <Image
              src={"/images/about-us.jpg"}
              width={570}
              height={511}
              alt="about-us"
              className=" object-cover lg:h-full xl:h-[520px]"
            />
          </div>
          <div
            className="about-us__right-section p-12 lg:pl-16 z-20 relative before:h-[60%] before:absolute before:w-[44%] before:hidden lg:before:block lg:before:inset-[64px] xl:before:inset-0 before:-z-50 
            before:border-[15px] bg-white before:border-[#f5f5f5]"
          >
            <div className="bg-white ">
              <h5
                className="right-section__title uppercase bg-[#fff]  text-title tracking-widest transition-all text-[24px] mx-auto max-w-[250px] sm:max-w-[400px] font-bold
              hover:text-primary"
              >
                {selectedTab.title}
              </h5>
              <p className="right-section__paragraph text-title mt-6 leading-6 text-[15px] bg-[#fff] mx-auto max-w-[250px] sm:max-w-[450px]">
                {selectedTab.desc}
              </p>
              <Link
                href={"/"}
                className="text-text border-b-2 border-b-text uppercase inline-block mt-12 bg-[#fff] pb-1  font-bold
            tracking-widest hover:tracking-[.3rem] hover:text-primary transition-all mx-auto lg:ml-[28.5%] xl:ml-[40.5%]"
              >
                read more
              </Link>
            </div>

            <ul className="tabs mt-24 bg-[#f5f5f5] p-14 w-full xl:-translate-x-0 2xl:-translate-x-16 gap-y-16 flex flex-col sm:flex-row lg:grid grid-cols-2 md:gap-y-12 xl:flex items-center gap-x-12 lg:gap-x-4 justify-between">
              {tabs.map((tab) => (
                <li
                  key={tab.id}
                  onClick={() => setSelectedTab(tab)}
                  data-content={`0${tab.tabId}`}
                  className={`tab uppercase relative font-bold tracking-widest  text-[14px] after:absolute 
                xl:after:-z-50 after:inset-0  after:-top-[3.5rem] after:content-[attr(data-content)] ${tab.tabId === 3 && 'xl:after:ml-8 2xl:after:ml-0 lg:mt-8 xl:mt-0'} after:block after:font-normal after:text-[90px] 
                after:opacity-20 ${
                  tab.id === selectedTab.id
                    ? "text-primary after:text-primary"
                    : "text-text after:text-text cursor-pointer after:transition-all hover:text-primary after:hover:text-primary"
                }`}
                >
                  {tab.content}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
