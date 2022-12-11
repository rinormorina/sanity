import { groq } from "next-sanity";
import { sanityClient } from "../lib/sanity";

export const fetchSocials = async () => {
  const query = groq`
    *[_type=="social"] {
        title, url
    }
    `;

  const socials = await sanityClient.fetch(query);

  return socials;
};
