import FeaturedServices from "./components/featured_services";
import OurServices from "./components/our_services";
import WhatWeDoHero from "./components/what_we_do_hero";

export default function WhatWeDo() {
  return (
    <div>
      <WhatWeDoHero />
      <OurServices />
      <FeaturedServices />
    </div>
  );
}
