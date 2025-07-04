import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section
      id="Specal-offer"
      className="flex justify-wrap items-center
    max-lg:flex-col-reverse gap-10  max-container "
    >
      <div className="flex-1 ">
        <img
          src={offer} 
          width={773}
          height={687}     
          className="object-container w-full"  
        />

        
      </div>
      <div className="flex flex-1 flex-col max-[1020px]:items-center ">
        <h1
          className="mt-10 font-palanquin text-4xl
         font-bold lg:max-w-lg"
        >
          <span className="text-coral-red"> Special</span> Offer
        </h1>
        <p className="mt-4  info-text ">
          Ensuring premium quality, our shoes are crafted with the finest
          materials and cutting-edge technology. Experience unparalleled comfort
         </p><p className="mt-4  info-text "> and durability with every step you take. providing you with the
          confidence to conquer any challenge. Step into a world of superior
          craftsmanship and discover the difference that quality makes in your
          footwear.
        </p>
        <div className="mt-11 flex gap-4 ">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button label="Learn more" backgroundColor="bg-white"
          borderColor="border-slate-gray"
          textColor="text-slate-gray" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
