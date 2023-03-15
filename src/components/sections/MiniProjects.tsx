import React from "react";
import MiniCard from "../cards/MiniCard";

type Props = {};

export default function MajorProjects({}: Props) {
  return (
    <section id="mini" className="max-w-screen-xl z-10 pt-[5.5rem] mb-4 mx-8">
      <h1 className="text-4xl font-bold pb-10">Mini Projects</h1>
      <div className="grid grid-cols-1 laptop:grid-cols-2 gap-3 laptop:gap-10">
        <MiniCard
          title={"Title for Pro"}
          text1={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, tortor aenean et odio blandit erat. "
          }
          text2={"High score: xxx"}
          image={"/Donut.svg"}
        />
        <MiniCard
          title={"Title for Pro"}
          text1={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, tortor aenean et odio blandit erat. "
          }
          text2={"High score: xxx"}
          image={"/Donut.svg"}
        />
        <MiniCard
          title={"Title for Pro"}
          text1={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, tortor aenean et odio blandit erat. "
          }
          text2={"High score: xxx"}
          image={"/Donut.svg"}
        />
        <MiniCard
          title={"Title for Pro"}
          text1={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, tortor aenean et odio blandit erat. "
          }
          text2={"High score: xxx"}
          image={"/Donut.svg"}
        />
      </div>
    </section>
  );
}
