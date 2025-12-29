import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      linkName: 'https://www.linkedin.com/in/sarah-johnson',
      position: 'CTO, TechStart Inc.',
      linkPosition: 'https://www.linkedin.com/company/techstart-inc',
      content:
        'Hesbon delivered exceptional results on our e-commerce platform. His full-stack expertise and attention to detail made the project a huge success.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      linkName: 'https://www.linkedin.com/in/michael-chen',
      position: 'DevOps Manager, CloudTech',
      linkPosition: 'https://www.linkedin.com/company/cloudtech',
      content:
        'Working with Hesbon on our infrastructure automation was fantastic. He reduced our deployment time significantly and improved system reliability.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      linkName: 'https://www.linkedin.com/in/emily-rodriguez',
      position: 'Product Manager, InnovateLabs',
      linkPosition: 'https://www.linkedin.com/company/innovatelabs',
      content:
        'Hesbon is a true professional who understands both technical requirements and business needs. His solutions are always scalable and well-architected.',
      rating: 5,
    },
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1" aria-label={`Rating: ${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-700'}`}
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
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gray-900">
      {/* Navy gradient background shapes */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-40 -z-10 animate-navy-gradient1 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-40 -z-10 animate-navy-gradient2 blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-3">
            What Clients Say
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-gray-700 to-gray-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Testimonials from clients and colleagues who have experienced the quality of my work.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg transform hover:-translate-y-2 transition-transform duration-700 animate-float"
            >
              <StarRating rating={testimonial.rating} />
              <blockquote className="text-gray-200 mt-4 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>
              <div className="border-t border-gray-700 pt-4 flex flex-col">
                <a
                  href={testimonial.linkName}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-yellow-400 hover:underline mb-1"
                >
                  {testimonial.name}
                </a>
                <a
                  href={testimonial.linkPosition}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-sm hover:underline"
                >
                  {testimonial.position}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2">
                <div className="bg-gray-800 rounded-2xl p-6 shadow-lg transform hover:-translate-y-1 transition-transform duration-700 animate-float-small">
                  <StarRating rating={testimonial.rating} />
                  <blockquote className="text-gray-200 mt-4 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="border-t border-gray-700 pt-4 flex flex-col">
                    <a
                      href={testimonial.linkName}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-yellow-400 hover:underline mb-1"
                    >
                      {testimonial.name}
                    </a>
                    <a
                      href={testimonial.linkPosition}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 text-sm hover:underline"
                    >
                      {testimonial.position}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Tailwind custom animations */}
      <style jsx>{`
        @keyframes navyGradient1 {
          0% { background: linear-gradient(45deg, #1E3A8A, #1E40AF); }
          50% { background: linear-gradient(45deg, #1E40AF, #1E3A8A); }
          100% { background: linear-gradient(45deg, #1E3A8A, #1E40AF); }
        }
        @keyframes navyGradient2 {
          0% { background: linear-gradient(135deg, #1E40AF, #1E3A8A); }
          50% { background: linear-gradient(135deg, #1E3A8A, #1E50C0); }
          100% { background: linear-gradient(135deg, #1E40AF, #1E3A8A); }
        }
        .animate-navy-gradient1 { animation: navyGradient1 15s ease infinite alternate; }
        .animate-navy-gradient2 { animation: navyGradient2 20s ease infinite alternate; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes floatSmall {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-small { animation: floatSmall 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
