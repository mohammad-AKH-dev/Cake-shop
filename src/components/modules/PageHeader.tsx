import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

type PageHeaderPropsType = {
  title: string;
  paths?: string[];
};

function PageHeader(props: PageHeaderPropsType) {
  const { title, paths } = props;
  return (
    <>
      <div
        className="page-header bg-page-header flex bg-cover lg:mt-4
    bg-center items-center justify-center h-[381px]"
      >
        <h3
          className="page-header__title text-[30px] text-center sm:text-[55px] tracking-widest uppercase text-white
      font-bold"
        >
          {title}
        </h3>
      </div>
      <div className="breadcrumbs bg-new-products p-4 flex justify-center items-center gap-x-4 cursor-pointer ">
        <div className="breadcrumb flex items-center justify-center gap-x-2 text-text hover:text-title transition-all">
          <Link
            href={"/"}
            className="text-[12px] uppercase text-text
            hover:text-title transition-all font-bold tracking-widest"
          >
            home
          </Link>
          <FaArrowRight className="text-text text-[10px] " />
        </div>
        <div className="breadcrumb flex items-center justify-center gap-x-2 text-text hover:text-title transition-all">
          {paths?.length ? (
            paths.map((path) => (
              <>
                <Link
                  href={`/${path}`}
                  className="text-[12px] uppercase text-title
                hover:text-title transition-all font-bold tracking-widest"
                >
                  {path}
                </Link>
                <FaArrowRight className="text-title text-[10px] " />
              </>
            ))
          ) : (
            <>
              <Link
                href={`/${title}`}
                className="text-[12px] uppercase text-title
                hover:text-title transition-all font-bold tracking-widest"
              >
                {title}
              </Link>
              <FaArrowRight className="text-title text-[10px] " />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default PageHeader;
