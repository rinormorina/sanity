import Image from "next/image";
import React, { use } from "react";
import { urlFor } from "../../lib/sanity";
import { fetchWork } from "../../utils/fetchWork";

async function getWork() {
  const works = await fetchWork();
  return works;
}

const Work = () => {
  const works = use(getWork());
  return (
    <div className="flex flex-col items-center justify-center h-full overflow-x-hidden z-20 space-y-5 ">
      <h1 className="sm:text-5xl text-3xl mytext">Meine Videos</h1>
      <p className="max-w-sm md:max-w-xl px-5 sm:px-0 text-xs text-center sm:text-lg">
        {" "}
        Eine kleine Galerie aktueller Projekte, die ich selbst ausgewählt habe.
        Ich habe sie alle zusammen mit großartigen Menschen aus Unternehmen rund
        um den Globus durchgeführt. Das ist nur ein Tropfen auf den heißen Stein
        im Vergleich zur gesamten Liste.{" "}
      </p>
      <div className="w-full flex flex-row overflow-x-scroll px-10 flex-shrink-0 space-x-5">
        {works.map((work, index) => (
          <div
            key={index}
            className="shadow-xl rounded-xl flex flex-col justify-between w-1/2 flex-shrink-0"
          >
            <div className="relative w-full h-28 sm:h-52 md:h-96">
              <Image
                alt={work.title}
                src={urlFor(work.imgUrl).url()}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="p-5">
              <h3 className="text-md sm:text-2xl mb-2">{work.title}</h3>
              <p className="text-xs sm:text-md">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
