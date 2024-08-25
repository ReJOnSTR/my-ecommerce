import { Button } from "@/components/ui/button";
const NeuralUniverse = () => {
  return (
    <section className="font-montserrat ">
      <div className="w-full  mx-auto px-4 max-sm:py-28 ">
        <div className="flex flex-col-reverse md:flex-row gap-40 max-sm:gap-10">
          <div className="w-full md:w-1/2 ">
            <img
              src="https://s3-alpha-sig.figma.com/img/5f8c/e73d/1a41b674cbd12f927c7ea9a6ca0ce76c?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I~t~~LhoYAOGSw0MGvKURD3XgVuocySkphESr0TbZCw0iZRXfr~AOc-47aCYN6SHtnCC6l2U9ekqHHrIgMNyJgu3CL4W9K-wXRUcpiV7xBL8izO6u5qc-1ZBmywL2uK2~46JAbQLZhnjlyu84RWF0Mzu~0izWg44aiJTJ8j9fgNMZ10mxCTN-AnIOsFD6CFYDi0GsTOZpDZqCAAbGvac3Gv41Rk4ja01npcGfX-toWmttWALomutImwGJMEF~qfr5XA2JltCScvwzkIVIzlVrqmIjW1q4kXhBbQymMlOg~YN17FYJPi4dpHswJIXq4k99g0JD7fepJC3MZvg3OrGDA__"
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
