import { groq } from "next-sanity";
import { sanityClient } from "../lib/sanity";

export const fetchWork = async () => {
  const query = groq`
    *[_type=="work"] {
        description, 
   imgUrl, 
   projectLink, 
   tags,
   title

    }
    `;

  const works = await sanityClient.fetch(query);

  return works;
};
