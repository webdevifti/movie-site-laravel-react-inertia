import React from "react";
import { Link } from "@inertiajs/react";
import alphabetic_tag from "@/assets/alphabetic_tag";
const AlphabeticTag = () => {
  return (
    <div className="alphabetic-tag">
      {alphabetic_tag.map((item) => (
        <Link href={`/tag/alphabetic/${item.slug}`} key={item.id}>
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default AlphabeticTag;
