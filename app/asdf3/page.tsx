"use client"
// import Image from "next/image";
// import "../components/canvasFiber.ts"

// import plata from "/public/playa.png"

export default function Home() {

  if (true) {
    import("../../components/tercerTuto.js")
  }

  return (
    <main  className="relative flex min-h-screen min-w-screen w-screen flex-col items-center justify-between">
      <div id="tercerTuto" className="fixed"></div>
      
      {/* <div className="absolute flex flex-col w-[40rem]">
        <div className="self-center flex w-full max-w-[1198px] flex-col mt-8 px-5 max-md:max-w-full">
          <div className="justify-between items-start self-center flex w-full gap-5 -ml-5 pl-16 max-md:max-w-full max-md:flex-wrap">
            <div className="items-start self-stretch flex w-[657px] max-w-full justify-between gap-5 pr-px max-md:flex-wrap max-md:justify-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cf44efb-b7ec-4923-8517-16e75957976c?"
                className="aspect-[7.58] object-contain object-center w-[91px] fill-white overflow-hidden self-center max-w-full my-auto"
              />
              <div className="bg-indigo-950 self-stretch flex w-px h-[66px] flex-col grow shrink-0 basis-auto" />
              <div className="items-start self-center flex w-[499px] max-w-full justify-between gap-5 my-auto max-md:flex-wrap max-md:justify-center">
                <div className="text-white text-sm font-medium leading-4 tracking-widest underline uppercase self-stretch">
                  Home
                </div>
                <div className="text-white text-sm font-medium leading-4 tracking-widest uppercase self-stretch">
                  About
                </div>
                <div className="text-white text-sm font-medium leading-4 tracking-widest uppercase self-stretch">
                  Pricing
                </div>
                <div className="text-white text-sm font-medium leading-4 tracking-widest uppercase self-stretch">
                  Tokens
                </div>
                <div className="text-white text-sm font-medium leading-4 tracking-widest uppercase self-stretch">
                  Blog
                </div>
                <div className="text-white text-sm font-medium leading-4 tracking-widest uppercase self-stretch whitespace-nowrap">
                  contact us
                </div>
              </div>
            </div>
            <div className="justify-center items-center bg-blue-700 self-center flex w-[210px] max-w-full flex-col my-auto p-5 rounded-[80px]">
              <div className="text-white text-center text-base font-bold leading-4 tracking-widest uppercase self-center whitespace-nowrap">
                Download App
              </div>
            </div>
          </div>
          <div className="text-white text-7xl font-bold leading-[79.992px] tracking-tighter self-center w-[738px] -ml-5 mt-60 max-md:max-w-full max-md:text-4xl max-md:mt-10">
            Buy, trade, and hold 350+ cryptocurrencies
          </div>
          <div className="text-white text-lg leading-8 self-center w-[568px] -ml-5 mt-2 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aenean dis placerat.
          </div>
          <div className="items-start flex w-[429px] max-w-full justify-between gap-5 mt-12 self-start max-md:flex-wrap max-md:mt-10">
            <div className="justify-center items-center bg-blue-700 flex flex-col flex-1 px-5 py-7 rounded-[80px]">
              <div className="text-white text-center text-base font-bold leading-4 tracking-widest uppercase self-center whitespace-nowrap">
                Download App
              </div>
            </div>
            <div className="justify-center items-center bg-white bg-opacity-10 flex flex-col flex-1 px-5 py-7 rounded-[80px]">
              <div className="text-white text-center text-base font-bold leading-4 tracking-widest uppercase self-center whitespace-nowrap">
                view pricing
              </div>
            </div>
          </div>
          <div className="text-white text-center text-lg leading-8 self-center whitespace-nowrap mt-72 max-md:mt-10">
            Finance flow has been featured on
          </div>
          <div className="justify-between items-start self-center flex w-full gap-5 -ml-5 mt-11 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4370a8a2-87f7-4507-a070-8d7a12f5211a?"
              className="aspect-[7.08] object-contain object-center w-full overflow-hidden flex-1 my-auto"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b036dd9-a3da-4ab1-a808-451e19cde782?"
              className="aspect-[6.03] object-contain object-center w-full overflow-hidden flex-1"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4267ffdc-04c4-4e9a-99d3-845ada101eb2?"
              className="aspect-[6.1] object-contain object-center w-full overflow-hidden flex-1"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d884aded-44e3-4793-bc68-f6fcfec9de53?"
              className="aspect-[6.21] object-contain object-center w-full overflow-hidden flex-1"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e5e9b24-4a70-47bc-b56f-52e820182815?"
              className="aspect-[5.58] object-contain object-center w-full justify-center items-center overflow-hidden flex-1"
            />
          </div>
          <div className="text-white text-center text-5xl font-bold leading-[55.02px] self-center whitespace-nowrap mt-44 max-md:max-w-full max-md:mt-10">
            Build your crypto portfolio
          </div>
          <div className="text-white text-center text-lg leading-8 self-center max-w-[496px] mt-4 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </div>
          <div className="self-stretch mt-20 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[29%] max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col w-[325px] max-md:mt-9">
                  <div className="bg-indigo-950 self-stretch flex w-full flex-col px-5 py-12 rounded-[40px]">
                    <div className="justify-center items-center bg-blue-700 flex w-[68px] h-[68px] flex-col rounded-3xl self-start max-md:ml-1" />
                    <div className="text-white text-lg font-bold leading-6 tracking-wider uppercase whitespace-nowrap mt-5 self-start max-md:ml-1">
                      Send & Receive
                    </div>
                    <div className="text-white text-base leading-7 w-full mt-2.5 self-start max-md:ml-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Feugiat nulla suspendisse tortor aene.
                    </div>
                  </div>
                  <div className="bg-indigo-950 self-stretch flex w-full grow flex-col mt-8 px-5 py-12 rounded-[40px]">
                    <div className="justify-center items-center bg-blue-700 flex w-[68px] h-[68px] flex-col rounded-3xl self-start max-md:ml-1" />
                    <div className="text-white text-lg font-bold leading-6 tracking-wider uppercase whitespace-nowrap mt-5 self-start max-md:ml-1">
                      100% Secure Wallet
                    </div>
                    <div className="text-white text-base leading-7 w-full mt-2.5 self-start max-md:ml-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Feugiat nulla suspendisse tortor aene.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0">
                <div className="bg-blue-700 flex grow flex-col w-full mx-auto pt-12 pb-[482px] px-5 rounded-[40px] max-md:max-w-full max-md:mt-9">
                  <div className="text-white text-xl font-bold leading-7 tracking-wider uppercase whitespace-nowrap ml-3.5 self-start max-md:ml-2.5">
                    iOS & Android App
                  </div>
                  <div className="text-white text-base leading-7 w-[383px] max-w-full ml-3.5 mt-6 -mb-24 self-start max-md:ml-2.5 max-md:mb-2.5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    amet, morbi non at sed neque.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[29%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col w-[325px] max-md:mt-9">
                  <div className="bg-indigo-950 self-stretch flex w-full flex-col px-5 py-12 rounded-[40px]">
                    <div className="justify-center items-center bg-blue-700 flex w-[68px] h-[68px] flex-col rounded-3xl self-start max-md:ml-1" />
                    <div className="text-white text-lg font-bold leading-6 tracking-wider uppercase whitespace-nowrap mt-5 self-start max-md:ml-1">
                      Trading Charts
                    </div>
                    <div className="text-white text-base leading-7 w-full mt-2.5 self-start max-md:ml-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Feugiat nulla suspendisse tortor aene.
                    </div>
                  </div>
                  <div className="bg-indigo-950 self-stretch flex w-full grow flex-col mt-8 px-5 py-12 rounded-[40px]">
                    <div className="justify-center items-center bg-blue-700 flex w-[68px] h-[68px] flex-col rounded-3xl self-start max-md:ml-1" />
                    <div className="text-white text-lg font-bold leading-6 tracking-wider uppercase whitespace-nowrap mt-5 self-start max-md:ml-1">
                      Real Time Trading
                    </div>
                    <div className="text-white text-base leading-7 w-full mt-2.5 self-start max-md:ml-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Feugiat nulla suspendisse tortor aene.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-center items-center bg-blue-700 self-center flex w-[210px] max-w-full flex-col mt-12 px-5 py-7 rounded-[80px] max-md:mt-10">
            <div className="text-white text-center text-base font-bold leading-4 tracking-widest uppercase self-center whitespace-nowrap">
              Download App
            </div>
          </div>
          <div className="text-white text-5xl font-bold leading-[55.02px] w-[475px] max-w-full mr-20 mt-52 self-end max-md:mr-2.5 max-md:mt-10">
            Earn daily rewards on your idle tokens
          </div>
          <div className="text-white text-lg leading-8 w-[470px] max-w-full mr-11 mt-5 self-end max-md:mr-2.5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </div>
          <div className="items-start flex w-[303px] max-w-full grow flex-col mr-52 mt-10 self-end max-md:mr-2.5">
            <div className="items-start self-stretch flex justify-between gap-4">
              <div className="justify-center items-center bg-blue-700 self-stretch flex w-[46px] h-[46px] flex-col grow shrink-0 basis-auto rounded-xl" />
              <div className="text-white text-lg leading-8 self-center whitespace-nowrap my-auto">
                Lowest fees in market
              </div>
            </div>
            <div className="items-start self-stretch flex justify-between gap-4 mt-4">
              <div className="justify-center items-center bg-blue-700 self-stretch flex w-[46px] h-[46px] flex-col grow shrink-0 basis-auto rounded-xl" />
              <div className="text-white text-lg leading-8 self-center whitespace-nowrap my-auto">
                Fast and secure transactions
              </div>
            </div>
            <div className="items-start self-stretch flex justify-between gap-4 mt-4">
              <div className="bg-blue-700 self-stretch flex w-[46px] h-[46px] flex-col grow shrink-0 basis-auto rounded-xl" />
              <div className="text-white text-lg leading-8 self-center whitespace-nowrap my-auto">
                256-bit secure encryption
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[470px] max-w-full flex-col ml-40 mt-96 px-5 self-start max-md:mt-10">
          <div className="text-white text-5xl font-bold leading-[55.02px] w-full self-start max-md:max-w-full">
            Earn daily rewards on your idle tokens
          </div>
          <div className="text-white text-lg leading-8 mt-5 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </div>
          <div className="items-start flex w-[279px] max-w-full grow flex-col mt-10 self-start">
            <div className="items-start self-stretch flex justify-between gap-4">
              <div className="justify-center items-center bg-blue-700 self-stretch flex w-[46px] h-[46px] flex-col grow shrink-0 basis-auto rounded-xl" />
              <div className="text-white text-lg leading-8 self-center whitespace-nowrap my-auto">
                100% Private data
              </div>
            </div>
            <div className="items-start self-stretch flex justify-between gap-4 mt-4">
              <div className="justify-center items-center bg-blue-700 self-stretch flex w-[46px] h-[46px] flex-col grow shrink-0 basis-auto rounded-xl" />
              <div className="text-white text-lg leading-8 self-center whitespace-nowrap my-auto">
                99.99% Uptime guarantee
              </div>
            </div>
            <div className="items-start self-stretch flex justify-between gap-4 mt-4">
              <div className="justify-center items-center bg-blue-700 self-stretch flex w-[46px] h-[46px] flex-col grow shrink-0 basis-auto rounded-xl" />
              <div className="text-white text-lg leading-8 self-center whitespace-nowrap my-auto">
                24/7 Dedicated support
              </div>
            </div>
          </div>
        </div>
        <div className="items-center bg-blue-700 self-stretch flex w-full flex-col mt-72 pt-32 pb-28 px-5 max-md:max-w-full max-md:mt-10">
          <div className="flex mb-0 w-[589px] max-w-full flex-col ml-36 self-start max-md:mb-2.5">
            <div className="text-white text-5xl font-bold leading-[55.02px] max-md:max-w-full">
              Explore endless possibilities with FinanceFlow
            </div>
            <div className="text-white text-lg leading-8 mt-6 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              nulla suspendisse tortor aene.
            </div>
            <div className="justify-center items-center bg-white flex w-[210px] max-w-full grow flex-col mt-10 px-5 py-7 rounded-[80px] self-start">
              <div className="text-blue-700 text-center text-base font-bold leading-4 tracking-widest uppercase self-center whitespace-nowrap">
                Download App
              </div>
            </div>
          </div>
        </div>
        <div className="items-center self-stretch flex w-full flex-col mt-52 max-md:max-w-full max-md:mt-10">
          <div className="self-center flex w-full max-w-[1197px] items-start justify-between gap-5 px-5 max-md:max-w-full max-md:flex-wrap">
            <div className="text-white text-5xl font-bold leading-[55.02px] max-w-[443px] self-center grow shrink-0 basis-auto my-auto">
              What our users say?
            </div>
            <div className="justify-center items-center bg-blue-700 self-stretch flex w-[210px] max-w-full flex-col px-5 py-7 rounded-[80px]">
              <div className="text-white text-center text-base font-bold leading-4 tracking-widest uppercase self-center whitespace-nowrap">
                Download App
              </div>
            </div>
          </div>
          <div className="items-start self-stretch flex w-full flex-col mt-8 max-md:max-w-full">
            <div className="self-stretch w-full px-5 max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[9%] max-md:w-full max-md:ml-0">
                  <div className="text-white text-lg leading-8 items-start opacity-30 bg-indigo-950 w-[131px] max-w-full grow mx-auto pt-16 pb-28 rounded-[40px] max-md:mt-7 max-md:pb-2.5">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    commodo dolor fermentum dignissim et pellentesque egestas
                    mauris, faucibus. Tellus nisi amet non at phasellus faucibus
                    senectus in”
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[41%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-start bg-indigo-950 flex grow flex-col w-full mx-auto pt-16 pb-20 px-5 rounded-[40px] max-md:max-w-full max-md:mt-7">
                    <div className="text-white text-lg leading-8 max-md:max-w-full">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In commodo dolor fermentum dignissim et pellentesque
                      egestas mauris, faucibus. Tellus nisi amet non at
                      phasellus faucibus senectus in”
                    </div>
                    <div className="text-white text-base font-bold leading-5 tracking-wider uppercase whitespace-nowrap ml-28 mt-9 self-start max-md:ml-2.5">
                      John carter
                    </div>
                    <div className="text-white text-base leading-5 tracking-wider uppercase whitespace-nowrap ml-28 mt-3 self-start max-md:ml-2.5">
                      Role, Company
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[41%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-start opacity-30 bg-indigo-950 flex grow flex-col w-full mx-auto pt-16 pb-20 px-5 rounded-[40px] max-md:max-w-full max-md:mt-7">
                    <div className="text-white text-lg leading-8 max-md:max-w-full">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In commodo dolor fermentum dignissim et pellentesque
                      egestas mauris, faucibus. Tellus nisi amet non at
                      phasellus faucibus senectus in”
                    </div>
                    <div className="text-white text-opacity-30 text-base font-bold leading-5 tracking-wider uppercase whitespace-nowrap ml-28 mt-9 self-start max-md:ml-2.5">
                      John carter
                    </div>
                    <div className="text-slate-100 text-opacity-30 text-base leading-5 tracking-wider uppercase whitespace-nowrap ml-28 mt-3 self-start max-md:ml-2.5">
                      Role, Company
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[9%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-start opacity-30 bg-indigo-950 flex w-[131px] max-w-full grow flex-col mx-auto pl-5 pt-16 pb-24 rounded-[40px] max-md:mt-7">
                    <div className="text-white text-lg leading-8">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In commodo dolor fermentum dignissim et pellentesque
                      egestas mauris, faucibus. Tellus nisi amet non at
                      phasellus faucibus senectus in”
                    </div>
                    <div className="text-white text-opacity-30 text-base font-bold leading-5 tracking-wider uppercase mt-9 -mb-5 max-md:mb-2.5">
                      John carter
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-center w-full max-w-[1198px] mt-52 px-5 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col mt-12 max-md:max-w-full max-md:mt-10">
                <div className="text-white text-5xl font-bold leading-[55.02px] max-md:max-w-full">
                  Get started today
                </div>
                <div className="text-white text-lg leading-8 mt-6 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Feugiat nulla suspendisse tortor aene.
                </div>
                <div className="items-start flex w-[245px] max-w-full grow flex-col mt-12 self-start max-md:mt-10">
                  <div className="items-start flex w-full gap-4 self-start">
                    <div className="justify-center items-center bg-blue-700 self-stretch flex w-[46px] h-[46px] flex-col rounded-xl" />
                    <div className="text-white text-lg leading-8 self-center whitespace-nowrap my-auto">
                      Download app
                    </div>
                  </div>
                  <div className="items-start flex w-full gap-4 mt-4 self-start">
                    <div className="bg-blue-700 self-stretch flex w-[46px] h-[46px] flex-col rounded-xl" />
                    <div className="text-white text-lg leading-8 self-center whitespace-nowrap my-auto">
                      Create a free account
                    </div>
                  </div>
                  <div className="items-start flex w-[168px] max-w-full gap-4 mt-4 self-start">
                    <div className="justify-center items-center bg-blue-700 self-stretch flex w-[46px] h-[46px] flex-col rounded-xl" />
                    <div className="text-white text-lg leading-8 self-center whitespace-nowrap my-auto">
                      Start trading
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-indigo-950 flex w-[662px] h-[400px] flex-col mx-auto rounded-[40px] max-md:max-w-full max-md:mt-10" />
            </div>
          </div>
        </div>
        <div className="self-center flex w-full max-w-[1191px] items-start justify-between gap-5 mt-44 px-5 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="text-white text-5xl font-bold leading-[55.02px] max-w-[503px] self-center grow shrink-0 basis-auto my-auto max-md:max-w-full">
            Browse our latest news
          </div>
          <div className="text-white text-lg leading-8 self-stretch max-w-[461px] grow shrink-0 basis-auto max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non
            neque orci amet, amet .
          </div>
        </div>
        <div className="self-center w-full max-w-[1198px] mt-14 px-5 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="bg-indigo-950 flex w-full grow flex-col flex-1 mx-auto pt-48 pb-11 px-5 rounded-[40px] max-md:mt-7">
                <div className="text-white text-sm font-medium leading-5 tracking-wider uppercase whitespace-nowrap items-start bg-blue-700 w-[109px] max-w-full pl-3.5 pr-4 py-2.5 rounded-[1000px] self-start max-md:ml-1">
                  Products
                </div>
                <div className="text-white text-2xl font-bold leading-8 self-stretch w-full mt-6 max-md:mx-1">
                  The Basics about Cryptocurrency
                </div>
                <div className="text-white text-lg leading-8 self-stretch w-full mt-3.5 max-md:mx-1">
                  Lorem ipsum dolor sit ametero irseo, consectetur adipiscing
                  elit. Scelerisque viverra donec diammeo.
                </div>
                <div className="bg-white bg-opacity-10 self-stretch flex w-full h-px flex-col mt-12 max-md:mt-10 max-md:mx-1" />
                <div className="text-white text-base font-bold leading-5 tracking-wider uppercase self-center whitespace-nowrap mt-8">
                  Alex Turner
                </div>
                <div className="text-white text-base leading-5 tracking-wider uppercase self-center whitespace-nowrap mt-3">
                  August 2, 2021
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-indigo-950 flex w-full grow flex-col flex-1 mx-auto pt-48 pb-11 px-5 rounded-[40px] max-md:mt-7">
                <div className="text-white text-sm font-medium leading-5 tracking-wider uppercase whitespace-nowrap items-start bg-blue-700 w-[109px] max-w-full pl-3.5 pr-4 py-2.5 rounded-[1000px] self-start max-md:ml-1">
                  Products
                </div>
                <div className="text-white text-2xl font-bold leading-8 self-stretch w-full mt-6 max-md:mx-1">
                  The Basics about Cryptocurrency
                </div>
                <div className="text-white text-lg leading-8 self-stretch w-full mt-3.5 max-md:mx-1">
                  Lorem ipsum dolor sit ametero irseo, consectetur adipiscing
                  elit. Scelerisque viverra donec diammeo.
                </div>
                <div className="bg-white bg-opacity-10 self-stretch flex w-full h-px flex-col mt-12 max-md:mt-10 max-md:mx-1" />
                <div className="text-white text-base font-bold leading-5 tracking-wider uppercase self-center whitespace-nowrap mt-8">
                  Alex Turner
                </div>
                <div className="text-white text-base leading-5 tracking-wider uppercase self-center whitespace-nowrap mt-3">
                  August 2, 2021
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-indigo-950 flex w-full grow flex-col flex-1 mx-auto pt-48 pb-11 px-5 rounded-[40px] max-md:mt-7">
                <div className="text-white text-sm font-medium leading-5 tracking-wider uppercase whitespace-nowrap items-start bg-blue-700 w-[109px] max-w-full pl-3.5 pr-4 py-2.5 rounded-[1000px] self-start max-md:ml-1">
                  Products
                </div>
                <div className="text-white text-2xl font-bold leading-8 self-stretch w-full mt-6 max-md:mx-1">
                  The Basics about Cryptocurrency
                </div>
                <div className="text-white text-lg leading-8 self-stretch w-full mt-3.5 max-md:mx-1">
                  Lorem ipsum dolor sit ametero irseo, consectetur adipiscing
                  elit. Scelerisque viverra donec diammeo.
                </div>
                <div className="bg-white bg-opacity-10 self-stretch flex w-full h-px flex-col mt-12 max-md:mt-10 max-md:mx-1" />
                <div className="text-white text-base font-bold leading-5 tracking-wider uppercase self-center whitespace-nowrap mt-8">
                  Alex Turner
                </div>
                <div className="text-white text-base leading-5 tracking-wider uppercase self-center whitespace-nowrap mt-3">
                  August 2, 2021
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center items-center bg-white bg-opacity-10 self-center flex w-[242px] max-w-full flex-col mt-10 px-5 py-7 rounded-[80px]">
          <div className="text-white text-center text-base font-bold leading-4 tracking-widest uppercase self-center whitespace-nowrap">
            View All Articles
          </div>
        </div>
        <div className="self-center flex w-full max-w-[1193px] items-start justify-between gap-5 mt-32 px-5 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="text-white text-5xl font-bold leading-[55.02px] max-w-[397px] grow shrink-0 basis-auto self-start">
            Download our app
          </div>
          <div className="text-white text-lg leading-8 max-w-[461px] grow shrink-0 basis-auto self-start max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non
            neque orci amet, amet .
          </div>
        </div>
        <div className="self-center w-full max-w-[1198px] mt-12 px-5 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="bg-indigo-950 grow w-full mx-auto px-12 py-10 rounded-[40px] max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[99%] max-md:w-full max-md:ml-0">
                    <div className="flex flex-col mt-5 max-md:max-w-full max-md:mt-10">
                      <div className="text-white text-5xl font-bold leading-[55.02px] whitespace-nowrap self-start max-md:max-w-full">
                        Download for iOS
                      </div>
                      <div className="text-white text-lg leading-8 mt-6 max-md:max-w-full">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sed nulla integer in pellentesque tortor semper
                        elementum. Felis.
                      </div>
                      <div className="justify-center items-center bg-blue-700 flex w-[193px] max-w-full flex-col mt-10 px-5 py-7 rounded-[80px] self-start">
                        <div className="text-white text-center text-base font-bold leading-4 tracking-widest uppercase whitespace-nowrap mr-3 self-end max-md:mr-2.5">
                          App Store
                        </div>
                      </div>
                      <div className="bg-gray-900 flex w-[3px] h-[66px] flex-col mt-80 rounded-sm self-start max-md:mt-10" />
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[1%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="bg-gray-900 flex w-1 h-[103px] flex-col mt-[590px] mx-auto rounded-sm max-md:mt-10" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-indigo-950 flex grow flex-col w-full mx-auto pt-16 pb-96 px-5 rounded-[40px] max-md:max-w-full max-md:mt-10">
                <div className="text-white text-5xl font-bold leading-[55.02px] self-center whitespace-nowrap max-md:max-w-full">
                  Download for Android
                </div>
                <div className="text-white text-lg leading-8 mt-6 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris sed nulla integer in pellentesque tortor semper
                  elementum. Felis.
                </div>
                <div className="justify-center items-center bg-blue-700 flex mb-0 w-[202px] max-w-full flex-col ml-10 mt-10 px-5 py-7 rounded-[80px] self-start max-md:ml-2.5 max-md:mb-2.5">
                  <div className="text-white text-center text-base font-bold leading-4 tracking-widest uppercase whitespace-nowrap mr-3 self-end max-md:mr-2.5">
                    PLAY STORE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="items-start bg-indigo-950 self-stretch flex w-full flex-col mt-32 pt-16 pb-9 px-5 max-md:max-w-full max-md:mt-10">
          <div className="self-center flex w-full max-w-[1203px] flex-col max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/304568aa-2077-425d-ac4c-7183d8ea1550?"
              className="aspect-[7.58] object-contain object-center w-[91px] fill-white overflow-hidden self-center max-w-full"
            />
            <div className="self-center flex w-full items-start justify-between gap-5 mt-28 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
              <div className="items-start flex flex-col w-[280px] mt-1 self-start">
                <div className="justify-center text-white text-lg font-bold leading-6 tracking-wider uppercase self-stretch whitespace-nowrap items-center border-b-[color:var(--white,#FFF)] pt-1.5 pb-9 border-b border-solid">
                  Menu
                </div>
                <div className="justify-between items-start self-stretch flex w-full gap-5 mt-9 pl-px">
                  <div className="items-start self-stretch flex flex-col">
                    <div className="text-white text-sm font-bold leading-4 tracking-widest uppercase self-stretch whitespace-nowrap">
                      Home
                    </div>
                    <div className="text-white text-sm leading-4 tracking-widest uppercase self-stretch whitespace-nowrap mt-5">
                      About
                    </div>
                    <div className="text-white text-sm leading-4 tracking-widest uppercase self-stretch whitespace-nowrap mt-5">
                      Pricing
                    </div>
                  </div>
                  <div className="items-start self-stretch flex flex-col">
                    <div className="text-white text-sm leading-4 tracking-widest uppercase self-stretch whitespace-nowrap">
                      Tokens
                    </div>
                    <div className="text-white text-sm leading-4 tracking-widest uppercase self-stretch whitespace-nowrap mt-5">
                      Blog
                    </div>
                    <div className="text-white text-sm leading-4 tracking-widest uppercase self-stretch whitespace-nowrap mt-5">
                      contact us
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-center bg-white bg-opacity-10 flex flex-col pt-12 pb-11 px-5 rounded-[40px] self-start max-md:max-w-full">
                <div className="text-white text-lg font-bold leading-6 tracking-wider uppercase whitespace-nowrap ml-3.5 self-start max-md:ml-2.5">
                  Download our Application
                </div>
                <div className="text-white text-lg leading-8 w-[420px] max-w-full ml-3.5 mt-3.5 self-start max-md:ml-2.5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris sed nulla integer{" "}
                </div>
                <div className="items-start flex w-[411px] max-w-full gap-4 ml-3.5 mt-8 self-start max-md:ml-2.5">
                  <div className="justify-center items-center bg-blue-700 flex flex-col flex-1 px-5 py-7 rounded-[80px]">
                    <div className="text-white text-center text-base font-bold leading-4 tracking-widest uppercase whitespace-nowrap mr-3 self-end max-md:mr-2.5">
                      App Store
                    </div>
                  </div>
                  <div className="justify-center items-center bg-blue-700 flex flex-col flex-1 px-5 py-7 rounded-[80px]">
                    <div className="text-white text-center text-base font-bold leading-4 tracking-widest uppercase whitespace-nowrap mr-3 self-end max-md:mr-2.5">
                      PLAY STORE
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white bg-opacity-30 self-stretch flex w-full h-px flex-col mt-32 max-md:max-w-full max-md:mt-10" />
            <div className="text-white text-center text-base leading-7 self-stretch whitespace-nowrap mt-7 max-md:max-w-full">
              All rights reserved
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
}
