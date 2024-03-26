import HeroSlider from '@components/heroSlider/HeroSlider';
import NewsletterSignup from '@components/newsletterSignup/NewsletterSignup';
import RecommendedProducts from '@components/recommendedProducts/RecommendedProducts';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <RecommendedProducts />
      <NewsletterSignup />
    </div>
  );
}
