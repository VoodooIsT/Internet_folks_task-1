import Image from 'next/image';

const CardData = [
  {
    image: "/card1.png",
    name: "Grilled  Tomatoes at Home",
    desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    image: "/card2.png",
    name: "Snacks for Travel",
    desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    image: "/card3.png",
    name: "Post-workout Recipes",
    desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
];

export default function Home() {
  return (
    <>
      <section className="w-screen h-screen flex flex-col-reverse md:flex-row">
        <div className="w-full h-1/2 md:w-1/2 md:h-full md:pl-24 md:pt-10 p-10">
          <Image
            src={"/logo_hero.png"}
            alt="logo"
            width="100"
            height="100"
            className="hidden md:block"
          ></Image>

          <div className="md:w-[362px] w-full mt-20 flex flex-col items-center md:items-start">
            <div className="text-[62px] text-[#0E2368] font-bold text-center md:text-left">
              Discover the <span className="text-[#E23744]">Best</span> Food and
              Drinks
            </div>
            <div className="text-[#444957] text-[1rem] font-normal mt-5 text-center md:text-left">
              Naturally made Healthcare Products for the better care & support
              of your body.
            </div>
            <button className="bg-[#E23744] w-[190px] h-[63px] text-white font-bold text-lg rounded-[34px] mt-10">
              Explore More
            </button>
          </div>
        </div>

        {/* **********************  Right side  ************************** */}

        <div className="w-full h-1/2 md:w-1/2 md:h-full">
          <Image
            src={"/pizza_hero.png"}
            alt="pizza_hero"
            className="w-full h-full"
            width="600"
            height="600"
          ></Image>

          <Image
            src={"/wave_hero.png"}
            alt="wave_hero"
            className="md:w-[52%] md:h-[110%] w-full h-[52%] absolute top-0 right-0"
            width="600"
            height="600"
          ></Image>
        </div>
      </section>

      {/***************************************Section 2 ****************************************** */}

      <section className="w-screen h-screen flex items-end ">
        <main className="w-full h-[70%] bg-[#1E2A5D0A] flex justify-evenly items-center px-10 md:px-0">
          <Image
            src={"/s-2_hero.png"}
            alt="s-2_hero"
            className="hidden md:block md:w-[480px] md:h-full"
            width="600"
            height="600"
          ></Image>
          <div className="w-full h-full md:w-[447px] md:h-[320px] flex flex-col justify-around items-center md:items-start">
            <div className="font-semibold text-[45px] text-[#0E2368]">
              About Us
            </div>
            <div className="font-normal text-base leading-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. t has survived
              not only five centuries.
            </div>
            <button className="bg-[#E23744] w-[190px] h-[63px] text-base font-semibold text-white rounded-[34px] mt-3">
              Read More
            </button>
          </div>
        </main>
      </section>

      {/***************************************Section 3 ****************************************** */}

      <section className="w-screen min-h-screen px-5 py-16 md:py-32 md:px-32 relative">
        <div className="w-full h-full flex flex-col justify-between">
          <div className="text-[#0E2368] font-semibold text-[56px] leading-[42px] text-center md:text-left">
            Latest Articles
          </div>

          <div className="w-full flex justify-between flex-wrap min-h-[554px] gap-10 mt-10">
            {CardData.map((card, idx) => (
              <div key={idx} className="border w-full md:w-[400px] rounded-[21px] p-5 flex flex-col justify-around">
                <Image
                  src={card.image}
                  alt="card1"
                  className="w-full rounded-[21px]"
                  width="300"
                  height="257"
                ></Image>
                <div className="text-[#0E2368] font-bold text-xl mt-5 md:mt-0">
                  {card.name}
                </div>
                <div className="font-normal text-base mt-5 mb-5">
                  {card.desc}
                </div>
                <button className="w-[131px] h-[42px] text-base font-semibold text-[#424961] rounded-[21px] border border-[#424961]">
                  Read more
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="w-28 h-[29px] mt-10 md:mt-0 absolute bottom-0 md:bottom-10 left-[37%] md:left-[45%] flex justify-between">
          <div className="w-[28px]  border flex items-center justify-center">
            <Image
              src={"/leftArrow.png"}
              width={10}
              height={16}
              alt="left-arrow"
            ></Image>
          </div>
          <div className="w-[28px]">1/2</div>
          <div className="w-[28px] border flex items-center justify-center">
            <Image
              src={"/rightArrow.png"}
              width={10}
              height={16}
              alt="right-arrow"
            ></Image>
          </div>
        </div>
      </section>

      {/***************************************footer ****************************************** */}

      <footer className="min-h-[363px] w-screen bg-[#F8F8F8] mt-10 flex md:flex-row flex-col px-10 md:px-0">
        <div className="w-1/3  h-full md:py-20">
          <Image
            src={"/logo_hero.png"}
            alt="logo"
            className="w-[161px] h-[125px] ml-28 mt-16"
            width="300"
            height="300"
          ></Image>
        </div>

        <div className="md:w-1/3 w-full md:h-full md:py-20 py-10">
          <div className="text-[#0E2368] font-semibold text-lg">Contact Us</div>
          <div className="font-normal text-[#646874] text-sm mt-5">
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road,
            <br /> Phartosh Gate near YTM
            <br />
            Market, XYZ-343434
          </div>
          <div className="font-normal text-[#646874] text-sm mt-5">
            example2020@gmail.com
          </div>
          <div className="font-normal text-[#646874] text-sm mt-5">
            (904) 443-0343
          </div>
        </div>

        <div className="md:w-1/3 w-full md:h-full md:py-20 py-10 flex md:justify-between md:flex-row flex-col">
          <div>
            <div className="text-[#0E2368] font-semibold text-lg">More</div>
            <div className="font-normal text-[#646874] text-sm mt-5">
              About Us
            </div>
            <div className="font-normal text-[#646874] text-sm mt-5">
              Products
            </div>
            <div className="font-normal text-[#646874] text-sm mt-5">
              Career
            </div>
            <div className="font-normal text-[#646874] text-sm mt-5">
              Contact Us
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-col justify-between md:pr-16 mt-10 md:mt-10">
            <div>
              <div className="text-[#0E2368] font-semibold text-lg md:block hidden">
                Social Links
              </div>
              <div className="flex gap-10 mt-3 justify-center">
                <div className="w-8 h-8  flex justify-center items-center">
                  <Image
                    src={"/insta.png"}
                    alt="insta"
                    width={21}
                    height={19}
                  ></Image>
                </div>
                <div className="w-8 h-8  flex justify-center items-center">
                  <Image src={"/x.png"} alt="x" width={21} height={19}></Image>
                </div>
                <div className="w-8 h-8  flex justify-center items-center">
                  <Image
                    src={"/fb.png"}
                    alt="fb"
                    width={21}
                    height={19}
                  ></Image>
                </div>
              </div>
            </div>

            <div className="font-normal text-[#646874] text-sm md:block flex justify-center">
              © 2022 Food Truck Example
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
