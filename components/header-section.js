import { useState, useCallback } from "react";
import AIMenu from "./a-i-menu";
import PortalPopup from "./portal-popup";

const HeaderSection = () => {
  const [isAIMenuPopupOpen, setAIMenuPopupOpen] = useState(false);

  const onFrameButtonClick = useCallback(() => {
    window.open("https://parkingswing.vercel.app");
  }, []);

  const onFrameButton1Click = useCallback(() => {
    window.open("https://parkingswing.vercel.app");
  }, []);

  const openAIMenuPopup = useCallback(() => {
    setAIMenuPopupOpen(true);
  }, []);

  const closeAIMenuPopup = useCallback(() => {
    setAIMenuPopupOpen(false);
  }, []);

  return (
    <>
      <div className="fixed my-0 mx-[!important] top-[0px] left-[0px] bg-maroon w-[1512px] h-[60px] overflow-hidden shrink-0 z-[11]">
        <div className="absolute top-[8px] left-[6px] flex flex-row items-start justify-center gap-[400px] md:gap-[330px]">
          <img
            className="relative rounded-21xl w-[45px] h-[45px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/frame-135@2x.png"
          />
          <div className="relative w-[696px] h-10">
            <div className="absolute top-[9px] left-[77px] w-[619px] h-[22px] md:hidden">
              <button
                className="cursor-pointer [border:none] p-0 bg-gold absolute top-[0px] left-[494px] rounded-3xs shadow-[0px_4px_0px_1px_#000] w-[125px] h-[22px] overflow-hidden hidden"
                onClick={onFrameButtonClick}
              >
                <b className="absolute top-[0px] left-[24px] text-mid font-inika text-black text-center">
                  Developer
                </b>
              </button>
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[332px] rounded-3xs w-[125px] h-[22px] overflow-hidden"
                onClick={onFrameButton1Click}
              >
                <b className="absolute top-[0px] left-[24px] text-mid font-inika text-white text-center">
                  Developer
                </b>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[170px] rounded-3xs w-[125px] h-[22px] overflow-hidden">
                <b className="absolute top-[0px] left-[17px] text-mid font-inika text-white text-center">
                  Community
                </b>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] rounded-3xs w-[140px] h-[22px] overflow-hidden">
                <b className="absolute top-[0px] left-[55px] text-mid font-inika text-white text-center">
                  Buy
                </b>
              </button>
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] w-10 h-10 bg-[url('/menu@2x.png')] bg-cover bg-no-repeat bg-[top] hidden md:flex md:w-10"
              onClick={openAIMenuPopup}
            />
          </div>
        </div>
      </div>
      {isAIMenuPopupOpen && (
        <PortalPopup placement="Top left" onOutsideClick={closeAIMenuPopup}>
          <AIMenu onClose={closeAIMenuPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default HeaderSection;
