import { useCallback, useEffect } from "react";

const AIMenu = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameButtonClick = useCallback((e) => {}, []);

  const onFrameButton2Click = useCallback(() => {
    window.open("https://jeffspace.vercel.app");
  }, []);

  return (
    <div
      className="rounded-t-none rounded-br-3xs rounded-bl-none [background:linear-gradient(180deg,_#100e0e,_#620000)] shadow-[0px_0px_0px_2px_#e9cc8a] w-[164px] h-[364px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] max-w-full max-h-full [&.animate]:md:animate-[1s_ease_0s_1_normal_forwards_slide-in-left] md:opacity-[0]"
      data-animate-on-scroll
    >
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[51px] left-[1px] rounded-xl w-[199px] h-[33px] overflow-hidden"
        onClick={onFrameButtonClick}
      >
        <b className="absolute top-[5px] left-[33px] text-mid font-inika text-white text-center">
          Buy
        </b>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[116px] left-[0px] rounded-xl w-[199px] h-[33px] overflow-hidden">
        <b className="absolute top-[5px] left-[7px] text-mid font-inika text-white text-center">
          Community
        </b>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[197px] left-[1px] rounded-xl w-[199px] h-[33px] overflow-hidden"
        onClick={onFrameButton2Click}
      >
        <b className="absolute top-[5px] left-[10px] text-mid font-inika text-white text-center">
          Developer
        </b>
      </button>
      <img
        className="absolute top-[20px] left-[124px] rounded-3xs w-[30px] h-[30px] overflow-hidden object-cover cursor-pointer"
        alt=""
        src="/frame-260@2x.png"
        onClick={onClose}
      />
    </div>
  );
};

export default AIMenu;
