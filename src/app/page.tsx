import HomeDealCards from "./_components/HomeDealCards/HomeDealCards";
import FeaturedProducts from "./_components/FeaturedProducts/FeaturedProducts";
import Categories from "./_components/Categories/Categories";
import HeroSection from "./_components/HeroSection/HeroSection";
import NewsletterSection from "./_components/Newslettersection/Newslettersection";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <Categories />
      <HomeDealCards />
      <FeaturedProducts />
      <NewsletterSection/>
    </>
  );
}
