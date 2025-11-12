import React from 'react';
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

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4 rounded"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Testimonials from clients and colleagues who have experienced the quality of my work.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
            >
              <StarRating rating={testimonial.rating} />
              <blockquote className="text-gray-600 mt-4 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-blue-600 text-sm">{testimonial.position}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <StarRating rating={testimonial.rating} />
                  <blockquote className="text-gray-600 mt-4 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-blue-600 text-sm">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
