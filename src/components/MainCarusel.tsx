// don't remember about import img from src/images/ and add here your img for carusell in exactly format and import

import img1 from "../images/mobile-image-hero-1.jpg";
import img2 from "../images/mobile-image-hero-2.jpg";
import img3 from "../images/mobile-image-hero-3.jpg";

// here add new things for carusel

export const caruselData: {
  title: string;
  more: string;
  img: string;
}[] = [
  {
    title: "Discover innovative ways to decorate",
    more: "We provide unmatched quality, comfort and style for property owners across the country. Our experts cmbine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    img: img1,
  },
  {
    title: "We are avilable all across the globe",
    more: "With stores all over the world, it's eas for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    img: img2,
  },
  {
    title: "Manufactured with the best materials",
    more: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    img: img3,
  },
];
