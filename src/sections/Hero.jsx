import { arrowRight } from "../assets/icons";
import { useState } from "react";
import Button from "../components/Button";
import { shoes, statistics } from "../constants";
import {bigShoe1} from "../assets/images";
import ShoeCard from "../components/ShoeCard.jsx";
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <section
      id="home"
      className="w-full  flex xl:flex-row flex-col justify-center 
      min-h-screen  gap-10 max-container"
    >
      <div
        className="relative xl:w-2/5 flex-col justify-center 
        items-start w-full max-xl:padding-x pt-28"
      >
        <p className="t-xl font-montserrat text-coral-red">
          Our summer collections
        </p>
        <h1
          className="mt-10 font-palanquin text-8xl
         max-sm:text-[72px]
         max-sm:Leading-[82px]
         font-bold"
        >
          <span
            className="xl:bg-white 
          xl:whitespace-nowrap
          relative z-10 pr-10"
          >
            The New arrival
          </span>
          <br />
          <span
            className="text-coral-red
          inline-block mt-3"
          >
            Nike{" "}
          </span>{" "}
          Shoes
        </h1>
        <p
          className="font-montserrat text-slate-gray text-lg mt-6 mb-14
        leading-8 sm:max-w-sm "
        >
          Discover stylish Nike arrivals,quality comfort, and inovation for your
          active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div
          className="flex justify-start items-start flex-wrap w-full mt-20 
          gap-16"
        >
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center 
      xl:min-h-screen 
      max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img 
        src={bigShoeImg}
        alt="shoe collection"
        widht={610}
        height={500}
        className="object-contain relative z-10"
         />
         <div className=" flex  sm:gap-6 
         gap-4 absolute -bottom-[5%] ml-7
         max-sm:w-full xl:items-center
          sm:left-[15%] max-sm:px-6 ">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard 
              imgURL={shoe}
              changeBigShoeImage={(shoe) =>setBigShoeImg(shoe)}
              bigShoeImg={bigShoeImg}/>
              
            </div>
            ))}



         </div>
      </div>
    </section>
  );
};

export default Hero;
