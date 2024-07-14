import { useEffect, useRef } from "react";

const useLazyLoading = (items) => {
  const imgRefs = useRef([]);

  useEffect(() => {
    const lazyLoader = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const url = img.getAttribute("data-src");
          img.setAttribute("src", url);
          lazyLoader.unobserve(img);
        }
      });
    });

    imgRefs.current.forEach((img) => {
      if (img) {
        lazyLoader.observe(img);
      }
    });

    return () => {
      imgRefs.current.forEach((img) => {
        if (img) {
          lazyLoader.unobserve(img);
        }
      });
    };
  }, [items]);

  return imgRefs;
};

export { useLazyLoading };
