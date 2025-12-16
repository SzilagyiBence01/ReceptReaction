import React from "react";

// a tag-ünk ami megjelenik a különböző kártyákon a tag-ek nevei alapján
export default function TagFillter({ tag }) {
  return <span className="tag">{tag}</span>;
}
