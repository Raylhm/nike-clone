import { shoe8 } from "../assets/images";
import Button from "../components/Button";

function SuperQuality() {
  return (
    <section
      id="About-us"
      className="flex justify-between items-start 
    max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col max-[1020px]:items-center ">
        <h2
          className="mt-10 font-palanquin text-4xl
         font-bold lg:max-w-lg"
        >
          We provide You with
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> Quality </span>
          Shoes
        </h2>
        <p
          className="mt-4 lg:max-w-lg info-text "
        >
          Ensuring premium quality, our shoes are crafted with the finest materials and cutting-edge technology. Experience unparalleled comfort and durability with every step you take. 
          providing you with the confidence to conquer any challenge. Step into a world of superior craftsmanship and discover the difference that quality makes in your footwear.
        </p>
        <div className="mt-11 ">
        <Button label="View details" /></div>
      </div>
      <div className="flex-1 w-full flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className=" object-contain"
        /> 
      </div>
    </section>
  );
}

export default SuperQuality;
