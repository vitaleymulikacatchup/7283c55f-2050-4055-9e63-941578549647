"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Coffee, Leaf, Flame, Users, Heart, Star, Mail } from "lucide-react";

export default function CoffeePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="small"
      background="animatedAurora"
      cardStyle="layered-gradient"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Brew & Bean"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Welcome to Brew & Bean"
          description="Discover handcrafted coffee made with passion. From rich espressos to creamy cappuccinos, experience the perfect cup every time."
          tag="Specialty Coffee"
          tagIcon={Coffee}
          buttons={[
            {
              text: "Explore Menu",
              href: "features"
            },
            {
              text: "Visit Us",
              href: "contact"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764150219985-qmx8r778.jpg"
          imageAlt="Modern coffee shop interior with warm lighting"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="We craft more than coffee. We create moments. Every bean is carefully selected from sustainable farms, roasted fresh daily, and brewed to perfection by our skilled baristas."
          features={[
            {
              icon: Leaf,
              title: "Ethically Sourced",
              description: "Every bean is carefully selected from fair-trade and sustainable farms around the world"
            },
            {
              icon: Flame,
              title: "Fresh Roasted Daily",
              description: "We roast our beans in-house every morning to ensure peak freshness and flavor"
            },
            {
              icon: Users,
              title: "Expert Baristas",
              description: "Our skilled team crafts each drink with passion and attention to detail"
            },
            {
              icon: Heart,
              title: "Community Focused",
              description: "We're more than a coffee shop - we're a gathering place for our neighbors"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Our Specialty Menu"
          description="Explore our curated selection of signature drinks and seasonal specials crafted with love"
          tag="Featured Items"
          tagIcon={Coffee}
          features={[
            {
              title: "Classic Espresso",
              description: "Rich, bold, and perfectly balanced. Our signature espresso made from our house blend",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764150222007-6a6lfpab.jpg",
              imageAlt: "Classic espresso with crema"
            },
            {
              title: "Artisan Cappuccino",
              description: "Silky microfoam meets perfectly pulled espresso in our most requested drink",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764150224176-ubtizziq.jpg",
              imageAlt: "Barista preparing cappuccino"
            },
            {
              title: "Cold Brew Concentrate",
              description: "Smooth, refreshing, and full of flavor. Perfect for hot summer days",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764150229384-mdd03icw.jpg",
              imageAlt: "Cold brew being poured over ice"
            },
            {
              title: "Single Origin Pour Over",
              description: "Experience the unique characteristics of beans from a single farm",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764150232114-jmu4r7zj.jpg",
              imageAlt: "Premium coffee beans"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Loved by Our Community"
          description="See what our customers are saying about their Brew & Bean experience"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Regular Customer",
              testimonial: "The best coffee I've had in the city. The baristas really know their craft, and the atmosphere is perfect for both work and catching up with friends.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764150236801-hdkrohis.jpg",
              imageAlt: "Portrait of Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Chen",
              role: "Coffee Enthusiast",
              testimonial: "Finally found a place that takes coffee seriously. The single origin pour overs are exceptional, and they're always experimenting with new blends.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764150238372-sq5e9ap9.jpg",
              imageAlt: "Portrait of James Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Local Artist",
              testimonial: "Brew & Bean has become my creative sanctuary. The warm ambiance, great coffee, and friendly staff make it the perfect spot to work on my projects.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764150239677-pnypsalo.jpg",
              imageAlt: "Portrait of Emma Rodriguez"
            },
            {
              id: "4",
              name: "Michael Park",
              role: "Tech Professional",
              testimonial: "I'm a coffee purist, and this place gets it right every single time. The consistency and quality are unmatched. Worth every visit.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764150240896-6gpaez2k.jpg",
              imageAlt: "Portrait of Michael Park"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Connected"
          tagIcon={Mail}
          title="Stay Updated with Our Latest Brews"
          description="Subscribe to our newsletter for weekly specials, new blend announcements, and exclusive barista tips"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. You can unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Brew & Bean"
          columns={[
            {
              items: [
                {
                  label: "Menu",
                  href: "features"
                },
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Reviews",
                  href: "testimonials"
                }
              ]
            },
            {
              items: [
                {
                  label: "Location",
                  href: "#"
                },
                {
                  label: "Hours",
                  href: "#"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              items: [
                {
                  label: "Privacy Policy",
                  href: "#"
                },
                {
                  label: "Terms of Service",
                  href: "#"
                },
                {
                  label: "Careers",
                  href: "#"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}