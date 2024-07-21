import { useEffect, useRef } from "react";

const useLazyLoading = (items) => {
  const imgRefs = useRef([]);

  useEffect(() => {
    const lazyLoader = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const url = img.getAttribute("data-img");
          img.setAttribute(
            "src",
            url.endsWith("null")
              ? "https://static.platzi.com/static/images/error/img404.png"
              : url
          );
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
      // eslint-disable-next-line
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
