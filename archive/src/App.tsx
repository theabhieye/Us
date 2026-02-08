import { useEffect, useRef, useState } from 'react';
import { Music, Pause } from 'lucide-react';

function App() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);



  return (
    <div className="min-h-screen bg-[#f5f1eb] text-gray-800">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <section className="min-h-[70vh] flex items-center justify-center fade-in">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-5xl font-serif text-gray-800 leading-relaxed">
              I'm not good at saying things out loud.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light">
              Isliye shayad yeh likh raha hoon.
            </p>
          </div>
        </section>

        <div className="h-32"></div>

        <section className="fade-in space-y-12">
          <h2 className="text-3xl font-serif text-gray-700 mb-8 section-title">The dates that matter</h2>

          <div className="space-y-6 pl-4 border-l-2 border-gray-300">
            <div className="date-item">
              <p className="text-2xl font-light text-gray-800">04 Nov 2023</p>
              <p className="text-gray-600 mt-2 interactive-text">The day you chose me</p>
            </div>

            <div className="date-item">
              <p className="text-2xl font-light text-gray-800">14 Aug 2000</p>
              <p className="text-gray-600 mt-2 interactive-text">The day the world got you</p>
            </div>

            <div className="date-item">
              <p className="text-2xl font-light text-gray-800">27 Jun 2000</p>
              <p className="text-gray-600 mt-2 interactive-text">The day I started waiting to meet you</p>
            </div>
          </div>
        </section>

        <div className="h-32"></div>

        <section className="fade-in">
          <h2 className="text-3xl font-serif text-gray-700 mb-8 section-title">Our first date</h2>
          <div className="space-y-6">
            <img
              src="https://i.ibb.co/93nZMc3C/Our-First-date.png"
              alt="Our first date"
              className="w-full max-w-md mx-auto rounded-lg shadow-md image-hover"
              onMouseEnter={() => setHoveredImage('first-date')}
              onMouseLeave={() => setHoveredImage(null)}
            />
            <p className="text-lg text-gray-600 leading-relaxed text-center md:text-left interactive-text">
              It wasn't perfect.<br/>
              But it was comfortable.<br/>
              And comfort, I've learned, matters more than excitement.
            </p>
          </div>
        </section>

        <div className="h-32"></div>

        <section className="fade-in">
          <h2 className="text-3xl font-serif text-gray-700 mb-8 section-title">The Starbucks conversation</h2>
          <div className="space-y-6">
            <img
              src="https://i.ibb.co/8QK52RV/Our-first-in-deep-starbuck-converstion.jpg"
              alt="Our deep conversation"
              className="w-full max-w-md mx-auto rounded-lg shadow-md image-hover"
              onMouseEnter={() => setHoveredImage('starbucks')}
              onMouseLeave={() => setHoveredImage(null)}
            />
            <p className="text-lg text-gray-600 leading-relaxed interactive-text">
              This is where we stopped performing.<br/>
              Where the real conversations started.<br/>
              Where I realized — this feels different.
            </p>
          </div>
        </section>

        <div className="h-32"></div>

        <section className="fade-in">
          <h2 className="text-3xl font-serif text-gray-700 mb-8 section-title">When you wrote to me</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src="https://i.ibb.co/FkHKwPk5/Her-long-text-on-whatsapp-screen-short-1.png"
                alt="Your message"
                className="w-full rounded-lg shadow-md image-hover"
                onMouseEnter={() => setHoveredImage('msg1')}
                onMouseLeave={() => setHoveredImage(null)}
              />
              <img
                src="https://i.ibb.co/tNMm2DW/Her-long-text-on-whatsapp-screen-short-2.png"
                alt="Your message continued"
                className="w-full rounded-lg shadow-md image-hover"
                onMouseEnter={() => setHoveredImage('msg2')}
                onMouseLeave={() => setHoveredImage(null)}
              />
            </div>
            <div className="bg-white/50 p-6 rounded-lg interactive-text">
              <p className="text-lg text-gray-700 leading-relaxed">
                You trusted me with your words.<br/>
                Your honesty.<br/>
                Your fears.<br/><br/>
                I don't take that lightly.
              </p>
            </div>
          </div>
        </section>

        <div className="h-32"></div>

        <section className="fade-in">
          <h2 className="text-3xl font-serif text-gray-700 mb-8 section-title">When I posted about you</h2>
          <div className="space-y-6">
            <img
              src="https://i.ibb.co/Xx5QVNDT/birthday.png"
              alt="Instagram story"
              className="w-full max-w-sm mx-auto rounded-lg shadow-md image-hover"
              onMouseEnter={() => setHoveredImage('insta')}
              onMouseLeave={() => setHoveredImage(null)}
            />

            <p className="text-lg text-gray-600 leading-relaxed text-center interactive-text">
              I don't do this.<br/>
              I don't post.<br/>
              But some people feel wrong to hide.
            </p>
          </div>
        </section>

        <div className="h-32"></div>

        <section className="fade-in">
          <h2 className="text-3xl font-serif text-gray-700 mb-8 section-title">A moment of peace</h2>
          <div className="space-y-6">
            <img
              src="https://i.ibb.co/Q7KVvFbn/Just-a-random-photo-where-we-both-are-in-peace.jpg"
              alt="Peaceful moment"
              className="w-full max-w-md mx-auto rounded-lg shadow-md image-hover"
              onMouseEnter={() => setHoveredImage('peace')}
              onMouseLeave={() => setHoveredImage(null)}
            />
            <p className="text-lg text-gray-600 leading-relaxed text-center interactive-text">
              No words needed here.<br/>
              Just presence.
            </p>
          </div>
        </section>

        <div className="h-32"></div>

        <section className="fade-in">
          <h2 className="text-3xl font-serif text-gray-700 mb-8 section-title">Holi with you</h2>
          <div className="space-y-6">
            <img
              src="https://i.ibb.co/SwtNv8Wb/Our-holi-celebaration-together-i-dont-tell-my-parent-about-that-i-m-person-who-dont-do-that.jpg"
              alt="Holi celebration"
              className="w-full max-w-md mx-auto rounded-lg shadow-md image-hover"
              onMouseEnter={() => setHoveredImage('holi')}
              onMouseLeave={() => setHoveredImage(null)}
            />
            <p className="text-lg text-gray-600 leading-relaxed interactive-text">
              I didn't tell my parents I was celebrating.<br/>
              I don't usually do things like this.<br/>
              But with you, some rules feel less important.
            </p>
          </div>
        </section>

        <div className="h-32"></div>

        <section className="fade-in">
          <h2 className="text-3xl font-serif text-gray-700 mb-8 section-title">Every single day</h2>
          <div className="space-y-6">
            <img
              src="https://i.ibb.co/6cPZ4t8W/Our-longest-snap-steak.jpg"
              alt="Snap streak"
              className="w-full max-w-md mx-auto rounded-lg shadow-md image-hover"
              onMouseEnter={() => setHoveredImage('streak')}
              onMouseLeave={() => setHoveredImage(null)}
            />
            <p className="text-lg text-gray-600 leading-relaxed interactive-text">
              Not grand gestures.<br/>
              Just showing up.<br/>
              Consistently.<br/>
              Because that's what matters.
            </p>
          </div>
        </section>

        <div className="h-32"></div>

        <section className="fade-in">
          <h2 className="text-3xl font-serif text-gray-700 mb-8 section-title">Ahmedabad</h2>
          <div className="space-y-6">
            <img
              src="https://i.ibb.co/wFD73MLm/When-we-go-to-ahemnded-for-dantya-function.jpg"
              alt="Ahmedabad function"
              className="w-full max-w-md mx-auto rounded-lg shadow-md image-hover"
              onMouseEnter={() => setHoveredImage('ahmedabad')}
              onMouseLeave={() => setHoveredImage(null)}
            />
            <p className="text-lg text-gray-600 leading-relaxed interactive-text">
              You're not just in my moments.<br/>
              You're in my plans.
            </p>
          </div>
        </section>

        <div className="h-32"></div>

        <section className="fade-in min-h-[60vh] flex items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif text-gray-800 section-title">What I promise</h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              <p className="interactive-text">
                I don't promise perfection.<br/>
                I promise presence.
              </p>
              <p className="interactive-text">
                Main wada nahi karta ki sab asaan hoga.<br/>
                Par itna zaroor hai —<br/>
                tumhe kabhi akela feel nahi hone dunga.
              </p>
              <p className="interactive-text">
                I won't always say the right thing.<br/>
                But I'll always mean what I say.
              </p>
              <p className="interactive-text">
                I won't always be loud about my feelings.<br/>
                But you'll always feel them.
              </p>
              <p className="text-gray-600 italic interactive-text">
                That's my promise.<br/>
                Not perfect.<br/>
                But present.
              </p>
            </div>
          </div>
        </section>

        <div className="h-32"></div>

        <section className="fade-in min-h-[50vh] flex items-center justify-center">
          <div className="text-center space-y-8">
            <p className="text-2xl md:text-3xl font-serif text-gray-800 leading-relaxed interactive-text">
              Jaan,<br/>
              you're not alone.<br/>
              You never will be.
            </p>
            <div className="pt-12">
              <p className="text-gray-500 font-light interactive-text">
                — Someone who's quietly on your side
              </p>
            </div>
          </div>
        </section>

        <div className="h-32"></div>
      </div>
    </div>
  );
}

export default App;
