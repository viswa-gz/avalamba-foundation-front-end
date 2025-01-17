import { FC } from "react";
import { H2 } from "@/components/common/Heading/H2";
import { Section } from "@/components/common/Section/Section";
// import { ObjectivesData } from '@/pages/content'
// import { Paragraph } from "@/components/common/Paragraph/Paragraph";
import Image from "next/image";
import Link from "next/link";

const ObjectivesData = [
  {
    src: "/Objectives/new/1.jpg",
    head: "The Temple",
    text: "To preserve our temples which act as the anchor to our civilization by means of arranging Uzhavara pani ( cleaning by devotees), supporting the community around the temple like priests, musicians, cleaners and everyone else involved directly or indirectly , arrange for pooja in rural temples that is left unattended, provide regular annadanam to people.",
    href: "/donation/temple",
  },
  {
    src: "/Objectives/new/2.jpeg",
    head: "Vedic Traditions",
    text: "With rapidly dwindling vedic community, support would be extended to vaidikas such as agnihotris, ganapatis, vedapatashalas and support conducting yagnas.",
    href: "/donation/vedic-traditions",
  },
  {
    src: "/Objectives/new/3.jpeg",
    head: "Performing Arts",
    text: "Promote our rich performing arts, both classical and folk art by conducting events bringing in the best of dharmic talent, provide scholarships and constitute endowment awards, take up research projects on complex sahitya available to us in the form of several krithis.",
    href: "/donation/performing-arts",
  },
  {
    src: "/Objectives/new/4.jpg",
    head: "Research & Documentation",
    text: "A treasure trove of texts, inscriptions, oral traditions, manuscripts available in our country which needs meticulous documentation and research in depth. The aim would be to fund research projects that involve in preserving this rich cultural content.",
    href: "/donation/research-documentation",
  },
  {
    src: "/Objectives/new/5.jpeg",
    head: "Gauraksha",
    text: "To protect gaumata ,specifically endangered Indian breeds from extinction. The aim is to provide support in all possible ways, by assisting gaushalas and small farms in selling their products so that they remain self-sustainable and distress sale to the meat industry is avoided",
    href: "/donation/gauraksha",
  },
  {
    src: "/Objectives/new/6.jpg",
    head: "Other Activities",
    text: "Extending legal help towards civilizational causes and collaborate with organisations that work towards making social impact and changes on ground and also provide emergency Medical and educational aid to the needy of our country",
    href: "/donation/other",
  },
];

export const Objectives: FC = () => {
  return (
    <Section id="Objectives">
      <div className="w-[90%] flex flex-col space-y-16  pt-8">
        <H2 text="Objectives" className="lg:text-4xl  lg:font-bold" />
        <div className="flex flex-wrap gap-4 w-full justify-center   ">
          {ObjectivesData.map((data, k) => (
            <Link
              href={data.href}
              key={k}
              className="lg:w-[30%] xsm:w-[90%] lg:h-[400px]  2xl:h-[700px]  overflow-hidden  relative bg-black group transition-all duration-100 ease-in-out "
            >
              <Image
                src={data.src}
                alt="hello"
                className="w-full h-full opacity-60 object-cover"
                width={454}
                height={580}
              />
              <div className="absolute w-full h-full flex flec-col justify-center  items-center  text-white  top-0">
                <div className="   flex space-y-4 flex-col">
                  <h2 className="xsm:text-lg md:text-2xl 2xl:text-4xl text-center font-semibold">
                    {data.head}
                  </h2>
                  {/* <H2 text={data.head} className="text-2xl" /> */}
                  {/* <div className="font-semibold text-base  2xl:text-xl group-hover:opacity-100  group-hover:h-14  h-0  opacity-0 w-4/5 mx-auto text-center transition-all duration-100 pt-2"> */}
                  <div className="font-normal text-base mx-auto text-center group-hover:opacity-100  opacity-0 group-hover:inline-block hidden transition-all duration-200  w-[90%]">
                    {data.text}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
    // <></>
  );
};

{
  /* <div className="flex flex-wrap gap-y-3">
{ObjectivesData.map((i, k) => (
  <div
    key={k}
    className="containe text-[#fff ] lg:w-1/2 xsm:w-full text-[#fff]"
  >
    <img src={i.src} alt="Avatar" className="image" />
    <div className="overlay backround-color-overlay-home  flex flex-col  ">
      <div className="felx flex-col space-y-4 w-4/5 m-6">
        <h3 className="lg:text-2xl font-bold  xsm:text-md">
          {i.head}
        </h3>

        <Paragraph
          text={i.text}
          className="font-medium lg:text-lg xsm:text-[10px] "
        />
      </div>
    </div>
  </div>
))} */
}
{
  /* {ObjectivesData.map((data, k) => (
  <div key={k} className={`w-[30%] h-[580px]  `}>
    {data.src}
  </div>
))} */
}

{
  /* <div className="container">
              <img src="img_avatar.png" alt="Avatar" className="image" />
              <div className="overlay">
                  <div className="text">Hello World</div>
              </div>
          </div> */
}
{
  /* </div> */
}
