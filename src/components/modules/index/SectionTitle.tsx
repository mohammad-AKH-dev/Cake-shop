import React from "react";

type SectionTitlePropsType = {
    title : string
}

function SectionTitle(props: SectionTitlePropsType) {
  return (
    <h4 className="offers-section__title font-bold text-title px-4 text-[30px] sm:text-[55px] uppercase tracking-wider text-center">
      {props.title}
    </h4>
  );
}

export default SectionTitle;
