import Slider from "./Sliders";
import BestsellerProducts from "./BestsellerProducts";
import FeaturedPosts from "./FeaturedPosts";
import FilterCard from "./FilterCard";
import NeuralUniverse from "./NeuralUniverse";
import SliderTwo from "./SliderTwo";

export default function PageContent() {
  return (
    <>
      <Slider />
      <FilterCard />
      <BestsellerProducts />
      <SliderTwo />
      <NeuralUniverse />
      <FeaturedPosts />
    </>
  );
}
