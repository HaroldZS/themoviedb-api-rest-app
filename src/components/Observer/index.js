import React from "react";
import { useObserver } from "../../hook/useObserver";
import "./Observer.css";

function Observer({ callback }) {
  const observerRef = useObserver(callback, "observer");

  return <div ref={observerRef} className="observer"></div>;
}

export { Observer };
