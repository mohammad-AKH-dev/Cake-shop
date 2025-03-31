import TeamBox from "@/components/modules/team/TeamBox";
import TeamMemberBox from "@/components/modules/TeamMemberBox";
import React, { useState } from "react";

type teamMemberBoxPropsType = {
  id: number;
  image: string;
  teamID: number;
  name: string;
  desc: string;
};
function Team() {
  const [members, setMembers] = useState<teamMemberBoxPropsType[]>([
    {
      id: 1,
      name: "RICHARD SMITH",
      image: "/images/team/member-1.jpg",
      teamID: 1,
      desc: "Sociis natoque penatibus et magnis. Lectus nulla at volutpat diam ut.",
    },
    {
      id: 2,
      name: "SUSAN ANDERSON",
      image: "/images/team/member-2.jpg",
      teamID: 1,
      desc: "Lacus viverra vitae congue eu consequat ac felis platea dictumst.",
    },
    {
      id: 3,
      name: "STEVE RUFFALO",
      image: "/images/team/member-3.jpg",
      teamID: 1,
      desc: "Sed faucibus turpis in eu mi. Ut pharetra sit amet aliquam maecenas.",
    },
    {
      id: 4,
      name: "Caroline Lopez",
      image: "/images/team/member-2.jpg",
      teamID: 2,
      desc: "Vulputate dignissim suspendisse in est ante in nibh mauris.",
    },
    {
      id: 5,
      name: "Sam Williams",
      image: "/images/team/member-1.jpg",
      teamID: 2,
      desc: "Pellentesque pulvinar pellentesque habitant morbi tristique.",
    },
    {
      id: 6,
      name: "Rebecca Martinez",
      image: "/images/team/member-4.jpg",
      teamID: 2,
      desc: "Lacinia at quis risus sed vulputate odio ut enim blandit.",
    },
    {
      id: 7,
      name: "Peter Smith",
      image: "/images/team/member-3.jpg",
      teamID: 2,
      desc: "Sit amet aliquam id diam maecenas ultricies egestas egestas.",
    },
    {
      id: 8,
      name: "RICHARD SMITH",
      image: "/images/team/member-1.jpg",
      teamID: 3,
      desc: "Maecenas ultricies mi eget mauris pharetra et ultrices neque. Ut aliquam purus sit amet luctus venenatis lectus.",
    },
    {
      id: 9,
      name: "SUSAN ANDERSON",
      image: "/images/team/member-2.jpg",
      teamID: 3,
      desc: "Malesuada proin libero nunc consequat interdum varius sit amet. Enim blandit volutpat maecenas volutpat blandit.",
    },
    {
      id: 10,
      name: "STEVE RUFFALO",
      image: "/images/team/member-3.jpg",
      teamID: 3,
      desc: "A iaculis at erat pellentesque adipiscing. Viverra adipiscing at in tellus integer feugiat scelerisque varius.",
    },
  ]);
  return (
    <div className="team-members mt-36">
      <div className="team-1-wrapper container">
        <div className="text-[30px] uppercase text-center">#1</div>
        <div className="team-1 grid grid-cols-1 sm:grid-cols-2 gap-y-12 lg:gap-y-0 lg:grid-cols-3 mt-8 gap-x-8">
          {members
            .filter((member) => member.teamID === 1)
            .map((member) => (
              <TeamBox {...member} />
            ))}
        </div>
      </div>
      <div className="team-2-wrapper mt-36 container">
        <div className="text-[30px] uppercase text-center">#2</div>
        <div className="team-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 lg:gap-y-0 lg:grid-cols-4 mt-8 gap-x-2">
          {members
            .filter((member) => member.teamID === 2)
            .map((member) => (
              <TeamBox {...member} />
            ))}
        </div>
      </div>
      <section className="bg-new-products p-12 mt-36">
        <div className="team-3-wrapper container">
          <div className="text-[30px] uppercase text-center">#3</div>
          <div className="team-3 grid grid-cols-1 sm:grid-cols-2 gap-y-12 lg:gap-y-0 lg:grid-cols-3 mt-8 gap-x-8">
            {members
              .filter((member) => member.teamID === 3)
              .map((member) => (
                <TeamMemberBox {...member} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
