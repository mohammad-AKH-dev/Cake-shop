import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

type PageHeaderPropsType = {
  title: string;
  paths?: string[];
};



function PageHeader(props: PageHeaderPropsType) {
  const { title, paths } = props;
  const router = useRouter()

  return (
    <>
      <div
        className="page-header bg-page-header relative z-[999] flex bg-cover lg:mt-4
    bg-center items-center justify-center h-[381px]"
      >
        <h3
          className="page-header__title text-[30px] text-center sm:text-[55px] tracking-widest uppercase text-white
      font-bold"
        >
          {title}
        </h3>
      </div>
      <div className="breadcrumb flex items-center justify-center p-4 bg-new-products gap-x-4 text-text hover:text-title transition-all">
        <div className="flex items-center gap-x-3">
          <Link
            href={`/`}
            className="text-[12px] uppercase text-title
                hover:text-title transition-all font-bold tracking-widest"
          >
            home
          </Link>
          <FaArrowRight className="text-title text-[10px] " />
        </div>
        {paths?.length ? (
          paths.map((path,index) => (
            <div className="flex items-center gap-x-3">
              <Link
                href={index === 0 ? `/${path}` : `${router.query.name}`}
                className="text-[12px] uppercase text-title
                hover:text-title transition-all font-bold tracking-widest"
              >
                {path}
              </Link>
              <FaArrowRight className="text-title text-[10px] " />
            </div>
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
    </>
  );
}

export default PageHeader;
