import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CTO, TechStart Inc.',
      content: 'Hesbon delivered exceptional results on our e-commerce platform. His full-stack expertise and attention to detail made the project a huge success.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      position: 'DevOps Manager, CloudTech',
      content: 'Working with Hesbon on our infrastructure automation was fantastic. He reduced our deployment time significantly and improved system reliability.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      position: 'Product Manager, InnovateLabs',
      content: 'Hesbon is a true professional who understands both technical requirements and business needs. His solutions are always scalable and well-architected.',
      rating: 5,
    },
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1" aria-label={`Rating: ${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Floating background shapes */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-20 -z-10 animate-gradient-float1"
        style={{ transform: `translateX(-50%) translateY(${offsetY * 0.2}px)` }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 -z-10 animate-gradient-float2"
        style={{ transform: `translateX(${offsetY * -0.1}px) translateY(${offsetY * 0.15}px)` }}
      ></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">What Clients Say</h2>
          <div className="w-28 h-1 bg-gradient-to-r from-blue-500 to-green-400 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Testimonials from clients and colleagues who have experienced the quality of my work.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="animated-card p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 duration-300 rounded-2xl text-white"
            >
              <StarRating rating={t.rating} />
              <blockquote className="mt-4 mb-6 leading-relaxed italic">"{t.content}"</blockquote>
              <div className="border-t pt-4 flex flex-col">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-blue-200">{t.position}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Slider {...settings}>
            {testimonials.map((t, i) => (
              <div key={i} className="px-2">
                <div className="animated-card p-6 shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300 rounded-2xl text-white">
                  <StarRating rating={t.rating} />
                  <blockquote className="mt-4 mb-6 leading-relaxed italic">"{t.content}"</blockquote>
                  <div className="border-t pt-4 flex flex-col">
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-blue-200">{t.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient1 {
          0% { background: linear-gradient(45deg, #6EE7B7, #3B82F6); }
          50% { background: linear-gradient(45deg, #3B82F6, #F472B6); }
          100% { background: linear-gradient(45deg, #6EE7B7, #3B82F6); }
        }
        @keyframes gradient2 {
          0% { background: linear-gradient(135deg, #F9A8D4, #8B5CF6); }
          50% { background: linear-gradient(135deg, #8B5CF6, #FCD34D); }
          100% { background: linear-gradient(135deg, #F9A8D4, #8B5CF6); }
        }
        @keyframes float1 {
          0% { transform: translateX(-50%) translateY(0) scale(1); }
          50% { transform: translateX(-50%) translateY(-20px) scale(1.05); }
          100% { transform: translateX(-50%) translateY(0) scale(1); }
        }
        @keyframes float2 {
          0% { transform: translateX(0) translateY(0) scale(1); }
          50% { transform: translateX(-10px) translateY(15px) scale(1.03); }
          100% { transform: translateX(0) translateY(0) scale(1); }
        }

        @keyframes cardGradient {
          0% { background: linear-gradient(135deg, #3B82F6, #6EE7B7); }
          50% { background: linear-gradient(135deg, #F472B6, #3B82F6); }
          100% { background: linear-gradient(135deg, #3B82F6, #6EE7B7); }
        }

        .animate-gradient-float1 {
          animation: gradient1 15s ease infinite, float1 25s ease-in-out infinite;
        }
        .animate-gradient-float2 {
          animation: gradient2 20s ease infinite, float2 30s ease-in-out infinite;
        }

        .animated-card {
          animation: cardGradient 12s ease infinite;
          background-size: 400% 400%;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
