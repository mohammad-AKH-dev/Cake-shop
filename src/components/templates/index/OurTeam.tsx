import SectionTitle from "@/components/modules/index/SectionTitle";
import TeamMemberBox from "@/components/modules/TeamMemberBox";
import React, { useState } from "react";

function OurTeam() {
  type teamMemberType = {
    id: number;
    image: string;
    name: string;
    desc: string;
  };

  const [members, setMembers] = useState<teamMemberType[]>([
    {
      id: 1,
      image: "/images/team/member-1.jpg",
      name: "richard smith",
      desc: "Richard has a true passion for baking and that’s why he has been our founder and head baker since day one.",
    },
    {
      id: 2,
      image: "/images/team/member-2.jpg",
      name: "Susan Anderson",
      desc: "Susan spends most of her time baking and cake decorating as well as heading up the bakery's mar0keting initiatives.",
    },
    {
      id: 3,
      image: "/images/team/member-3.jpg",
      name: "Steve Ruffalo",
      desc: "Steve is our lead cake designer. He has designed beautiful cakes for various occasions including weddings, parties, showers, anniversaries and more.",
    },
  ]);

  return (
    <section className="our-team__section mt-16 bg-new-products p-16">
      <SectionTitle title="our team" />

      <div className="container team-members grid grid-cols-1 sm:grid-cols-2 gap-y-8 lg:gap-y-0  lg:grid-cols-3 gap-x-12 xl:gap-x-4 mt-12 place-items-center">
         {
            members.map(member => (
                <TeamMemberBox key={member.id} {...member}/>
            ))
         }
      </div>
    </section>
  );
}

export default OurTeam;
