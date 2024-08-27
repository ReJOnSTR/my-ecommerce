import { Button } from "@/components/ui/button";
const NeuralUniverse = () => {
  return (
    <section className="font-montserrat ">
      <div className="w-full  mx-auto px-4 max-sm:py-28 ">
        <div className="flex flex-col-reverse md:flex-row gap-40 max-sm:gap-10">
          <div className="w-full md:w-1/2 ">
            <img
              src="https://r.resimlink.com/mgOJUalrQ9F.png"
              alt="Neural Universe"
              className="w-[966.667px] h-[700px] max-sm:h-[403px] object-cover "
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-8 justify-center items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-bold text-[#BDBDBD] ">SUMMER 2020</h3>
            <h2 className="text-5xl font-bold text-[#252B42] ">
              Part of the Neural <br /> Universe
            </h2>
            <p className="text-2xl font-normal text-[#737373] ">
              We know how large objects will act, <br /> but things on a small
              scale.
            </p>
            <div className="flex gap-4 flex-col sm:flex-row">
              <a href="#" className="w-full sm:w-auto">
                <Button variant="default" size="sm">
                  SHOP NOW
                </Button>
              </a>
              <a href="#" className="w-full sm:w-auto">
                <Button variant="outline" size="sm">
                  READ MORE
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuralUniverse;
