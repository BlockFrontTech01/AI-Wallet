import { useEffect } from "react";
import HeaderSection from "../components/header-section";
import React from 'react';
import Typist from 'react-text-typist';
import Typewriter from 'typewriter-effect';

const AIWallet = () => {
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
  return (
    <div className="relative bg-maroon w-full h-[4883px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border gap-[10px] text-left text-inherit text-white font-hanuman md:h-[7530px]">
      <div className="my-0 mx-[!important] absolute top-[4720px] left-[12px] flex flex-row items-start justify-start gap-[50px] z-[0] md:gap-[20px] md:pt-[2700px] md:box-border">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative rounded-3xs w-[60px] h-[58px] bg-[url('/twitterx@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative rounded-3xs w-[60px] h-[60px] bg-[url('/telegramapp@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative rounded-3xs w-[60px] h-[60px] bg-[url('/youtube@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative rounded-3xs w-[60px] h-[60px] bg-[url('/discord@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
      </div>
      <div className="my-0 mx-[!important] absolute top-[166px] left-[0px] flex flex-row items-center justify-start gap-[438px] z-[1] text-[40px] lg:gap-[300px] md:flex-row md:gap-[0px] md:pl-[33px] md:pb-0 md:box-border">
        <div className="relative w-[22px] h-6" />
        <div className="relative font-black md:text-[30px] md:text-center md:w-[300px]">
        <Typewriter
  options={{
    strings: ['AI-Enhanced Crypto Wallet'],
    autoStart: true,
    loop: true,
  }}
/>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[333px] left-[1px] flex flex-row items-center justify-start gap-[604px] z-[2] lg:gap-[450px] md:gap-[0px] md:pl-[65px] md:box-border">
        <div className="relative w-[13px] h-[33px]" />
        <img
          className="relative w-[277px] h-[352px] object-cover [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:w-60 md:h-[306px]"
          alt=""
          src="/image-1@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[764px] left-[0px] flex flex-row items-center justify-start gap-[392px] z-[3] text-center text-lg lg:gap-[300px] md:gap-[0px] md:pl-[30px] md:box-border">
        <div className="relative w-px h-8" />
        <div
          className="relative inline-block w-[628px] h-[203px] shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in-top] opacity-[0] md:text-smi md:w-[340px]"
          data-animate-on-scroll
        >
          Welcome to the future of cryptocurrency management! Our groundbreaking
          project, the AI-Enhanced CryptoWallet, combines cutting-edge
          artificial intelligence with secure blockchain technology to
          revolutionize the way you interact with your digital assets. Whether
          you're a seasoned crypto enthusiast or a newcomer to the world of
          digital finance, our wallet is designed to simplify and enhance your
          experience.
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1046px] left-[1px] w-[1510px] flex flex-row items-start justify-center gap-[290px] z-[4] font-inherit lg:pr-[330px] lg:box-border md:flex-col md:gap-[136px] md:pl-[17px] md:box-border">
        <div className="relative w-[391px] h-[850px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-xl bg-maroon shadow-[0px_0px_0px_2px_#fff] w-[391px] h-[357px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_tilt-in-top-1] opacity-[0]"
            data-animate-on-scroll
          >
            <img
              className="absolute top-[11px] left-[199px] w-[110px] h-[99px] object-cover"
              alt=""
              src="/image-2@2x.png"
            />
            <div className="absolute top-[110px] left-[7px] inline-block w-96 h-[194px]">
              <p className="m-0">Intelligent Portfolio Management:</p>
              <ul className="m-0 pl-6">
                <li className="mb-0">
                  Our AI algorithms analyze market trends, news, and historical
                  data to provide you with personalized investment insights.
                </li>
                <li>
                  Automatic portfolio rebalancing ensures optimal asset
                  allocation, maximizing potential returns while minimizing
                  risks.
                </li>
              </ul>
            </div>
          </div>
          <div
            className="absolute top-[493px] left-[0px] rounded-xl bg-maroon shadow-[0px_0px_0px_2px_#fff] w-[391px] h-[357px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_tilt-in-top-1] opacity-[0]"
            data-animate-on-scroll
          >
            <img
              className="absolute top-[0px] left-[248px] w-[100px] h-[136px] object-cover"
              alt=""
              src="/image-21@2x.png"
            />
            <div className="absolute top-[119px] left-[12px] inline-block w-[368px] h-[194px]">
              <p className="m-0">Security Beyond Standards:</p>
              <ul className="m-0 pl-6">
                <li className="mb-0">
                  Utilize advanced security protocols, including multi-factor
                  authentication and biometric verification, to safeguard your
                  assets.
                </li>
                <li>
                  AI-driven anomaly detection continuously monitors your account
                  for suspicious activities, providing an additional layer of
                  protection.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative w-[391px] h-[858px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-xl bg-maroon shadow-[0px_0px_0px_2px_#fff] w-[391px] h-[357px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_tilt-in-top-1] opacity-[0]"
            data-animate-on-scroll
          >
            <img
              className="absolute top-[10px] left-[214px] w-24 h-[126px] object-cover"
              alt=""
              src="/image-22@2x.png"
            />
            <div className="absolute top-[119px] left-[12px] inline-block w-[368px] h-[194px]">
              <p className="m-0">Predictive Analytics:</p>
              <ul className="m-0 pl-6">
                <li className="mb-0">
                  Leverage the power of predictive analytics to make informed
                  decisions. Receive real-time market predictions based on
                  machine learning models trained on vast datasets.
                </li>
                <li className="mb-0">
                  Stay ahead of market movements and make timely investment
                  decisions with confidence.
                </li>
              </ul>
            </div>
          </div>
          <div
            className="absolute top-[501px] left-[0px] rounded-xl bg-maroon shadow-[0px_0px_0px_2px_#fff] w-[391px] h-[357px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_tilt-in-top-1] opacity-[0]"
            data-animate-on-scroll
          >
            <img
              className="absolute top-[10px] left-[249px] w-[114px] h-[109px] object-cover"
              alt=""
              src="/image-23@2x.png"
            />
            <div className="absolute top-[93px] left-[7px] inline-block w-[383px] h-[194px]">
              <p className="m-0">Smart Transaction Insights:</p>
              <ul className="m-0 pl-6">
                <li className="mb-0">
                  Receive intelligent insights into your transactions, helping
                  you understand spending patterns and optimize your financial
                  decisions.
                </li>
                <li>
                  AI analyzes transaction histories to identify potential
                  cost-saving opportunities and provides recommendations for
                  more efficient financial management.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[2013px] left-[0px] flex flex-row items-start justify-start gap-[552px] z-[5] text-6xl text-black lg:gap-[410px] md:gap-[0px] md:pl-[25px] md:pt-[1000px] md:box-border">
        <div className="relative w-[33px] h-[30px]" />
        <div className="relative rounded-3xs bg-burlywood w-[297px] h-[61px] overflow-hidden shrink-0">
          <div className="absolute top-[12px] left-[63px] font-black">
            How It Works
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[2222px] left-[1px] w-[1510px] flex flex-row items-start justify-center gap-[290px] z-[6] font-inherit lg:pr-[330px] lg:box-border md:flex-col md:gap-[193px] md:pl-[15px] md:pt-[950px] md:box-border">
        <div className="relative w-[402px] h-[907px]">
          <div
            className="absolute top-[0px] left-[0.5px] rounded-xl [background:linear-gradient(180deg,_#ffa94e,_#132638)] shadow-[0px_0px_0px_2px_#e9cc8a] w-[391px] h-[357px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-left] opacity-[0]"
            data-animate-on-scroll
          >
            <img
              className="absolute top-[9px] left-[226px] w-32 h-[136px] object-cover"
              alt=""
              src="/image-24@2x.png"
            />
            <div className="absolute top-[119px] left-[12px] inline-block w-[368px] h-[194px]">
              <p className="m-0">AI Integration:</p>
              <ul className="m-0 pl-6">
                <li className="mb-0">
                  Our AI system seamlessly integrates with the CryptoWallet,
                  constantly learning and adapting to the dynamic cryptocurrency
                  market.
                </li>
                <li>
                  Continuous learning ensures that the AI stays ahead of market
                  trends, providing you with the most relevant and up-to-date
                  information.
                </li>
              </ul>
            </div>
          </div>
          <div
            className="absolute top-[550px] left-[0px] rounded-xl [background:linear-gradient(180deg,_#ffa94e,_#122637)] shadow-[0px_0px_0px_2px_#e9cc8a] w-[391px] h-[357px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-right] opacity-[0]"
            data-animate-on-scroll
          >
            <img
              className="absolute top-[12px] left-[215px] w-[165px] h-[124px] object-cover"
              alt=""
              src="/image-25@2x.png"
            />
            <div className="absolute top-[119px] left-[12px] inline-block w-[368px] h-[194px]">
              <p className="m-0">{`Automated Decision-Making: `}</p>
              <ul className="m-0 pl-6">
                <li className="mb-0">
                  Empower the AI to make automated decisions on your behalf,
                  based on predefined parameters and your personalized
                  preferences.
                </li>
                <li>
                  Set investment strategies, risk thresholds, and other
                  parameters, allowing the AI to execute transactions and
                  optimize your portfolio autonomously.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="relative rounded-xl [background:linear-gradient(180deg,_#f58f33,_#183044)] shadow-[0px_0px_0px_2px_#e9cc8a] w-[391px] h-[357px] overflow-hidden shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-left] opacity-[0]"
          data-animate-on-scroll
        >
          <img
            className="absolute top-[12px] left-[127px] w-[264px] h-[124px] object-cover"
            alt=""
            src="/image-26@2x.png"
          />
          <div className="absolute top-[119px] left-[12px] inline-block w-[368px] h-[194px]">
            <p className="m-0">User Interaction:</p>
            <ul className="m-0 pl-6">
              <li className="mb-0">
                Interact with the AI through natural language commands. Ask for
                market insights, set investment goals, or seek personalized
                recommendations effortlessly.
              </li>
              <li>
                The AI understands and responds in real-time, making your
                experience intuitive and efficient.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3226px] left-[0px] flex flex-row items-start justify-start gap-[557px] z-[7] text-6xl lg:gap-[420px] md:gap-[0px] md:pl-[30px] md:pt-[1600px] md:pb-0 md:box-border">
        <div className="relative w-[23px] h-[37px]" />
        <div className="relative rounded-3xs bg-gray-100 shadow-[0px_0px_0px_2px_#6d5e7b] w-[297px] h-[61px] overflow-hidden shrink-0">
          <div className="absolute top-[12px] left-[92px] font-black">
            Roadmap
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3439px] left-[1px] w-[1510px] flex flex-row items-start justify-center gap-[290px] z-[8] font-inherit lg:pr-[330px] lg:box-border md:flex-col md:gap-[190px] md:pl-[15px] md:pt-[1600px] md:box-border">
        <div className="relative w-[391px] h-[921px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-xl bg-gray-200 shadow-[0px_0px_0px_2px_#6d5e7b] w-[391px] h-[203px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in-left] opacity-[0]"
            data-animate-on-scroll
          >
            <img
              className="absolute top-[77px] left-[279px] w-[77px] h-[77px] object-cover"
              alt=""
              src="/image-27@2x.png"
            />
            <div className="absolute top-[21px] left-[12px] inline-block w-[368px] h-[150px]">
              <p className="m-0">Phase 1: Foundation</p>
              <p className="m-0">&nbsp;</p>
              <ul className="m-0 pl-6">
                <li className="mb-0">Assemble team</li>
                <li className="mb-0">Market research</li>
                <li className="mb-0">Define project scope</li>
                <li>Plan technical architecture</li>
              </ul>
            </div>
          </div>
          <div
            className="absolute top-[365px] left-[0px] rounded-xl bg-gray-200 shadow-[0px_0px_0px_2px_#6d5e7b] w-[391px] h-[203px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in-right] opacity-[0]"
            data-animate-on-scroll
          >
            <img
              className="absolute top-[77px] left-[303px] w-[77px] h-[77px] object-cover"
              alt=""
              src="/image-27@2x.png"
            />
            <div className="absolute top-[21px] left-[12px] inline-block w-[368px] h-[150px]">
              <p className="m-0">Phase 2: Development</p>
              <p className="m-0">&nbsp;</p>
              <ul className="m-0 pl-6">
                <li className="mb-0">Build blockchain integration</li>
                <li className="mb-0">Develop AI algorithms</li>
                <li className="mb-0">Design user interface</li>
                <li>Implement smart contracts</li>
              </ul>
            </div>
          </div>
          <div
            className="absolute top-[718px] left-[0px] rounded-xl bg-gray-200 shadow-[0px_0px_0px_2px_#6d5e7b] w-[391px] h-[203px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in-left] opacity-[0]"
            data-animate-on-scroll
          >
            <img
              className="absolute top-[38px] left-[303px] w-[77px] h-[77px] object-cover"
              alt=""
              src="/image-27@2x.png"
            />
            <div className="absolute top-[21px] left-[12px] inline-block w-[368px] h-[150px]">
              <p className="m-0">Phase 3: Alpha Testing</p>
              <p className="m-0">&nbsp;</p>
              <ul className="m-0 pl-6">
                <li className="mb-0">Conduct internal testing</li>
                <li className="mb-0">Address bugs and optimize</li>
                <li>Limited user beta testing</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative w-[391px] h-[921px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-xl bg-gray-200 shadow-[0px_0px_0px_2px_#6d5e7b] w-[391px] h-[203px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in-right] opacity-[0]"
            data-animate-on-scroll
          >
            <img
              className="absolute top-[77px] left-[303px] w-[77px] h-[77px] object-cover"
              alt=""
              src="/image-27@2x.png"
            />
            <div className="absolute top-[21px] left-[12px] inline-block w-[368px] h-[150px]">
              <p className="m-0">{`Phase 4: Beta Launch `}</p>
              <p className="m-0">&nbsp;</p>
              <ul className="m-0 pl-6">
                <li className="mb-0">Open to wider audience</li>
                <li className="mb-0">Community engagement</li>
                <li>Security audit</li>
              </ul>
            </div>
          </div>
          <div
            className="absolute top-[365px] left-[0px] rounded-xl bg-gray-200 shadow-[0px_0px_0px_2px_#6d5e7b] w-[391px] h-[203px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in-left] opacity-[0]"
            data-animate-on-scroll
          >
            <img
              className="absolute top-[77px] left-[303px] w-[77px] h-[77px] object-cover"
              alt=""
              src="/image-27@2x.png"
            />
            <div className="absolute top-[21px] left-[12px] inline-block w-[368px] h-[150px]">
              <p className="m-0">Phase 5: Official Launch</p>
              <p className="m-0">&nbsp;</p>
              <ul className="m-0 pl-6">
                <li className="mb-0">Execute marketing strategy</li>
                <li className="mb-0">Full feature deployment</li>
                <li>Collect user feedback for continuous improvement</li>
              </ul>
            </div>
          </div>
          <div
            className="absolute top-[718px] left-[0px] rounded-xl bg-gray-200 shadow-[0px_0px_0px_2px_#6d5e7b] w-[391px] h-[203px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in-right] opacity-[0]"
            data-animate-on-scroll
          >
            <img
              className="absolute top-[77px] left-[303px] w-[77px] h-[77px] object-cover"
              alt=""
              src="/image-27@2x.png"
            />
            <div className="absolute top-[21px] left-[12px] inline-block w-[368px] h-[150px]">
              <p className="m-0">Phase 6: Ongoing Enhancement</p>
              <p className="m-0">&nbsp;</p>
              <ul className="m-0 pl-6">
                <li className="mb-0">Continuous development</li>
                <li className="mb-0">Community building</li>
                <li className="mb-0">Partnerships and integrations</li>
                <li>Regulatory compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[4483px] left-[1px] flex flex-row items-center justify-start gap-[416px] z-[9] text-center text-lg lg:gap-[280px] md:flex-col md:pl-[30px] md:pt-[2400px] md:box-border">
        <div className="relative w-[18px] h-[26px]" />
        <div className="relative inline-block w-[644px] h-[113px] shrink-0 md:text-smi md:w-[340px]">
          Embark on this exciting journey with us as we reshape the future of
          cryptocurrency management. Join the AI-Enhanced CryptoWallet community
          and experience the power of intelligent financial technology. Your
          journey into the future of finance begins now!
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[4818px] left-[8px] flex flex-row items-center justify-start gap-[13px] z-[10] text-center text-[14px] font-inika lg:pb-0 lg:box-border md:pt-[2660px] md:box-border">
        <img
          className="relative rounded-21xl w-[30px] h-[30px] object-cover"
          alt=""
          src="/circled-c@2x.png"
        />
        <b className="relative">Copy Right</b>
      </div>
      <HeaderSection />
    </div>
  );
};

export default AIWallet;
