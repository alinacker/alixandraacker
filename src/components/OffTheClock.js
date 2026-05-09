import React, { useEffect, useRef, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
  Marker,
} from 'react-simple-maps';
import SEO from './SEO';
import ShelfObjects from './OffTheClockShelfObjects';
import './OffTheClock.css';

const offClockImage = (filename) => `${process.env.PUBLIC_URL}/off-the-clock/${filename}`;
const europeGeoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';
const travelCities = {
  london: [-0.1276, 51.5072],
  milan: [9.19, 45.4642],
  sofia: [23.3219, 42.6977],
};
// Derived from the current map projection so the plane starts at Milan and lands at Sofia.
const flightPlanePath = 'M 162.78 161.68 C 194 149 225 163 252.54 180.6';

const moments = [
  {
    title: 'Getting offline and making things.',
    body: 'A summer at a sustainable vineyard in Oregon, harvesting grapes, making jam, and taking care of ducklings. The best reset I know.',
    images: [
      { src: offClockImage('afewmoments_1.png'), alt: 'A vineyard at sunset framed by grape leaves' },
      { src: offClockImage('afewmoments_2.png'), alt: 'Making jam with berries while ducklings walk nearby' },
      { src: offClockImage('afewmoments_3.png'), alt: 'A red barn beside a pond at a sustainable vineyard' },
    ],
  },
  {
    title: 'Where technology meets humanity.',
    body: 'Volunteering with therapy dogs at the US Department of State. Diplomacy has many forms.',
    images: [
      { src: offClockImage('technology_humanity_1.png'), alt: 'Alixandra volunteering with a therapy dog' },
    ],
  },
  {
    title: 'Taking things too seriously, in the best way.',
    body: 'Elected Punt Admiral of Clare College MCR. I ran a tight ship ensuring smooth sailing along the River Cam for students, professors, and alumni.',
    images: [
      { src: offClockImage('takingthingseriously_1.png'), alt: 'Punting along the River Cam near Clare College' },
    ],
  },
  {
    title: 'A chapter worth marking.',
    body: 'Cambridge, 2025. The gown was heavier than expected.',
    images: [
      { src: offClockImage('chapter_worth_making_1.png'), alt: 'Graduates gathered in Cambridge gowns' },
      { src: offClockImage('chapter_worth_making_2.png'), alt: 'Alixandra walking down stone steps in Cambridge formal dress' },
    ],
  },
  {
    title: 'The work, up close.',
    body: 'Running an AI governance simulation with Google DeepMind in London, thinking about what happens when frontier AI meets real institutions.',
    images: [
      { src: offClockImage('work_upclose_1.png'), alt: 'Running an AI governance simulation in London' },
      { src: offClockImage('work_upclose_2.png'), alt: 'Science 2030 group photo from an AI governance simulation' },
      { src: offClockImage('work_upclose_3.png'), alt: 'Science 2030 group photo from an AI governance simulation' },
    ],
  },
  {
    title: 'Making and looking.',
    body: "Some art I've made, some I've stood in front of for too long. Both feel necessary.",
    images: [
      { src: offClockImage('makingandholding_1.png'), alt: 'Alixandra presenting a colorful artwork on a wall' },
      { src: offClockImage('makingandlooking1.png'), alt: 'Artwork displayed at a portfolio award exhibition' },
      { src: offClockImage('makingandlooking2.png'), alt: 'Clay on a pottery wheel in a ceramics studio' },
    ],
  },
];

const readingLists = [
  {
    category: 'AI & Technology',
    books: [
      {
        title: 'How Not to Use AI',
        author: 'Abi Awomosu',
        type: 'Article',
        status: 'Reading',
        color: '#f3c46b',
        coverImage: offClockImage('nottouse.jpg'),
        detail: 'A practical counterweight to AI hype: useful for thinking about institutional adoption, failure modes, and what responsible use looks like in ordinary settings.',
      },
      {
        title: 'The Alignment Problem',
        author: 'Brian Christian',
        type: 'Book',
        status: 'Reference',
        color: '#8a2f2f',
        coverImage: offClockImage('thealignmentproblem.jpg'),
        detail: 'One of the clearest narrative accounts of how machine learning systems pick up values, incentives, and mistakes from the worlds we train them on.',
      },
      {
        title: 'Atlas of AI',
        author: 'Kate Crawford',
        type: 'Book',
        status: 'Reference',
        color: '#1f4338',
        coverImage: offClockImage('atlasofai.jpg'),
        detail: 'A grounding text for the material, environmental, and political economy behind AI systems.',
      },
      {
        title: 'Power and Progress',
        author: 'Daron Acemoglu & Simon Johnson',
        type: 'Book',
        status: 'Reading',
        color: '#c77c43',
        coverImage: offClockImage('powerandprogress.jpg'),
        detail: 'A useful frame for asking who benefits from technological change, and what it takes for new tools to strengthen rather than erode shared prosperity.',
      },
      {
        title: 'The Coming Wave',
        author: 'Mustafa Suleyman',
        type: 'Book',
        status: 'Reading',
        color: '#1f2430',
        coverImage: offClockImage('thecomingwave.jpg'),
        detail: 'A broad, urgent view of frontier technology governance and the containment problem for powerful general-purpose systems.',
      },
      {
        title: "The Innovator's Dilemma",
        author: 'Clayton M. Christensen',
        type: 'Book',
        status: 'On deck',
        color: '#326f9b',
        coverImage: offClockImage('theinnovatordillema.jpg'),
        detail: 'Strategy reading for thinking about how new technologies unsettle incumbents, reshape markets, and reward institutions that can adapt before the incentives are obvious.',
      },
    ],
  },
  {
    category: 'Everything Else',
    books: [
      {
        title: 'Dune',
        author: 'Frank Herbert',
        type: 'Book',
        status: 'Reading',
        color: '#b8894d',
        coverImage: offClockImage('dune.jpg'),
        detail: 'Politics, ecology, religion, empire, and incentives, disguised as science fiction and still somehow relaxing.',
      },
      {
        title: 'Intermezzo',
        author: 'Sally Rooney',
        type: 'Book',
        status: 'Reading',
        color: '#47515f',
        coverImage: offClockImage('intermezzo.jpg'),
        detail: 'A quieter fiction read about grief, intimacy, and the complicated ways people try to stay close to one another.',
      },
      {
        title: 'The Art of Thinking Clearly',
        author: 'Rolf Dobelli',
        type: 'Book',
        status: 'Reference',
        color: '#7b6a55',
        coverImage: offClockImage('theartofthinkingclearly.jpg'),
        detail: 'Short reminders on cognitive biases and decision-making traps, best read in small doses.',
      },
      {
        title: 'Ten Principles for Good Design',
        author: 'Dieter Rams',
        type: 'Book',
        status: 'Reference',
        color: '#8f7a58',
        coverImage: offClockImage('theprincipalofgooddesign.jpg'),
        detail: 'A compact design touchstone: less, but better; useful far beyond product design.',
      },
      {
        title: 'International Development',
        author: 'Kingsbury, McKay, Hunt, McGillivray & Clark',
        type: 'Textbook',
        status: 'Reference',
        color: '#5d6c64',
        coverImage: offClockImage('internationaldevelopement.jpg'),
        detail: 'A development studies anchor for questions about growth, institutions, aid, and uneven global outcomes.',
      },
    ],
  },
];

const radarItems = [
  { label: 'How I AI', emoji: '🤖' },
  { label: 'Empire', emoji: '🏛️' },
  { label: '99% Invisible', emoji: '🏙️' },
  { label: "You're Wrong About", emoji: '🔎' },
  { label: 'The Good Robot', emoji: '🦾' },
  { label: 'Dissect', emoji: '🎧' },
  { label: 'In Our Time', emoji: '📚' },
];

const plantSpecies = 'monstera';

const getPrefersReducedMotion = () => (
  typeof window !== 'undefined'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches
);

const getBookLight = (index, total, groupIndex, lampOn) => {
  if (!lampOn) return 0.64;

  const bookPosition = (index + 0.5) / total;
  const lampPosition = groupIndex === 0 ? 1.04 : 1.34;
  const rowDistance = groupIndex === 0 ? 0.42 : 0.18;
  const distance = Math.hypot(bookPosition - lampPosition, rowDistance);
  const light = Math.max(0, 1 - distance * 0.9);

  return 0.82 + Math.pow(light, 1.3) * 0.32;
};

const OffTheClock = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [lampOn, setLampOn] = useState(true);
  const [flicker, setFlicker] = useState(0.5);
  const [plantWiggle, setPlantWiggle] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getPrefersReducedMotion);
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const hoverTimersRef = useRef([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionPreferenceChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleMotionPreferenceChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMotionPreferenceChange);
    };
  }, []);

  useEffect(() => {
    if (!lampOn || prefersReducedMotion) {
      setFlicker(lampOn ? 0.5 : 0);
      return undefined;
    }

    let current = 0.5;
    let target = 0.5;
    const intervalId = window.setInterval(() => {
      if (Math.random() < 0.08) {
        target = Math.random();
      } else if (Math.random() < 0.26) {
        target = 0.4 + Math.random() * 0.35;
      }

      current += (target - current) * 0.22;
      setFlicker(current);
    }, 140);

    return () => window.clearInterval(intervalId);
  }, [lampOn, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setPlantWiggle(0);
      return undefined;
    }

    let isMounted = true;
    const timeouts = [];

    const scheduleTimeout = (callback, delay) => {
      const timeoutId = window.setTimeout(callback, delay);
      timeouts.push(timeoutId);
    };

    const scheduleWiggle = () => {
      scheduleTimeout(() => {
        if (!isMounted) return;
        setPlantWiggle(1);
        scheduleTimeout(() => setPlantWiggle(-0.6), 600);
        scheduleTimeout(() => setPlantWiggle(0.3), 1200);
        scheduleTimeout(() => {
          setPlantWiggle(0);
          scheduleWiggle();
        }, 1800);
      }, 4200 + Math.random() * 5200);
    };

    scheduleWiggle();

    return () => {
      isMounted = false;
      timeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, [prefersReducedMotion]);

  useEffect(() => (
    () => {
      hoverTimersRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    }
  ), []);

  const handlePlantHover = () => {
    if (prefersReducedMotion) return;

    hoverTimersRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    setPlantWiggle(1);
    hoverTimersRef.current = [
      window.setTimeout(() => setPlantWiggle(-0.5), 300),
      window.setTimeout(() => setPlantWiggle(0.2), 600),
      window.setTimeout(() => setPlantWiggle(0), 900),
    ];
  };

  useEffect(() => {
    if (!selectedBook) return undefined;

    const previousOverflow = document.body.style.overflow;
    const hiddenElements = [
      document.querySelector('.header'),
      document.querySelector('.footer'),
      document.querySelector('.off-clock-content'),
    ].filter(Boolean);

    document.body.style.overflow = 'hidden';
    hiddenElements.forEach((element) => {
      element.setAttribute('aria-hidden', 'true');
      element.setAttribute('inert', '');
    });
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedBook(null);
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) {
        return;
      }

      const focusableElements = dialogRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      hiddenElements.forEach((element) => {
        element.removeAttribute('aria-hidden');
        element.removeAttribute('inert');
      });
      window.removeEventListener('keydown', handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [selectedBook]);

  return (
    <div className="off-clock-page">
      <SEO
        title="Off the Clock — Alixandra Acker"
        description="A personal snapshot of what Alixandra Acker is reading, making, visiting, and thinking about outside of work."
        path="/off-the-clock"
        image="/off-the-clock/afewmoments_1.png"
      />

      <div className="off-clock-content">
        <section className="off-clock-hero">
          <div className="container">
            <p className="off-clock-kicker">Outside the CV</p>
            <h1 className="page-title">Off the Clock</h1>
            <p className="page-subtitle">
              A snapshot of what I'm doing, reading, and thinking about when I'm
              not working.
            </p>
          </div>
        </section>

        <section className="off-clock-section off-clock-mind">
          <div className="container">
            <div className="off-clock-panel off-clock-panel-featured">
              <span className="off-clock-section-label">On My Mind</span>
              <p>
                The question I keep returning to outside of formal research:
                whether the institutions we're building to govern AI are moving
                fast enough to matter, or whether we're writing excellent
                frameworks for a world that's already moved on. No clean answer
                yet.
              </p>
            </div>
          </div>
        </section>

        <section className="off-clock-section">
          <div className="container-wide">
            <div className="off-clock-section-header">
              <span className="off-clock-section-label">A Few Moments</span>
              <h2>Some photos from the last little while.</h2>
            </div>

            <div className="moments-grid">
              {moments.map((moment) => (
                <article className="moment-card" key={moment.title}>
                  <div
                    className={`moment-card-image ${
                      moment.images?.length > 1 ? 'moment-card-image-collage' : ''
                    }`}
                  >
                    {moment.images?.map((image) => (
                      <img
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                      />
                    ))}
                  </div>
                  <div className="moment-card-body">
                    <h3>{moment.title}</h3>
                    <p>{moment.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="off-clock-section off-clock-reading">
          <div className="container-wide">
            <div className="off-clock-section-header">
              <span className="off-clock-section-label">What I'm Reading</span>
              <h2>A mix of what's on my nightstand and what's shaped how I think.</h2>
            </div>

            <div
              className={`rendered-bookshelf ${lampOn ? 'bookshelf-lamp-on' : 'bookshelf-lamp-off'}`}
              role="region"
              aria-label="Interactive bookshelf"
            >
              {readingLists.map((group, groupIndex) => (
                <div
                  className={`shelf-row ${groupIndex === readingLists.length - 1 ? 'shelf-row-with-objects' : ''}`}
                  key={group.category}
                >
                  <div className="shelf-row-heading">
                    <h3>{group.category}</h3>
                    <span>{group.books.length} items</span>
                  </div>
                  <div className="shelf-books">
                    {group.books.map((book, bookIndex) => (
                      <button
                        type="button"
                        className={`book-cover-button ${book.coverImage ? 'book-cover-button-image' : ''}`}
                        key={`${group.category}-${book.title}`}
                        style={{
                          '--book-color': book.color,
                          '--book-light': getBookLight(bookIndex, group.books.length, groupIndex, lampOn),
                        }}
                        aria-label={`${book.title} by ${book.author}`}
                        onClick={(event) => {
                          triggerRef.current = event.currentTarget;
                          setSelectedBook({ ...book, category: group.category });
                        }}
                      >
                        {book.coverImage && (
                          <img
                            src={book.coverImage}
                            alt=""
                            className="book-cover-image"
                            loading="lazy"
                            aria-hidden="true"
                          />
                        )}
                        <span className="book-cover-type">{book.type}</span>
                        <span className="book-cover-title">{book.title}</span>
                        <span className="book-cover-author">{book.author}</span>
                      </button>
                    ))}
                  </div>
                  {groupIndex === readingLists.length - 1 && (
                    <ShelfObjects
                      lampOn={lampOn}
                      flicker={flicker}
                      plantSpecies={plantSpecies}
                      plantWiggle={plantWiggle}
                      onLampToggle={() => setLampOn((current) => !current)}
                      onPlantHover={handlePlantHover}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="off-clock-section">
          <div className="container">
            <div className="off-clock-panel">
              <span className="off-clock-section-label">On My Radar</span>
              <h2>Podcasts and ideas in rotation.</h2>
              <div className="radar-tags" aria-label="Podcasts on my radar">
                {radarItems.map((item, index) => (
                  <span
                    className="radar-tag"
                    key={item.label}
                    style={{ '--radar-delay': `${index * 0.16}s` }}
                  >
                    <span className="radar-emoji" aria-hidden="true">
                      {item.emoji}
                    </span>
                    <span>{item.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="off-clock-section off-clock-recent">
          <div className="container">
            <div className="recent-note">
              <div className="recent-travel-map" aria-hidden="true">
                <ComposableMap
                  className="europe-map"
                  projection="geoAzimuthalEqualArea"
                  projectionConfig={{
                    rotate: [-12, -52, 0],
                    scale: 500,
                  }}
                  width={360}
                  height={210}
                >
                  <Geographies geography={europeGeoUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          className="europe-map-country"
                          tabIndex={-1}
                          style={{
                            default: { outline: 'none' },
                            hover: { outline: 'none' },
                            pressed: { outline: 'none' },
                          }}
                        />
                      ))
                    }
                  </Geographies>
                  <Line
                    from={travelCities.milan}
                    to={travelCities.sofia}
                    className="flight-route-line"
                  />
                  <text className="map-plane map-plane-animated" aria-hidden="true">
                    ✈
                    <animateMotion
                      dur="5.8s"
                      repeatCount="indefinite"
                      path={flightPlanePath}
                      rotate="auto"
                    />
                  </text>
                  <text
                    className="map-plane map-plane-static"
                    x="268.5"
                    y="197.24"
                    aria-hidden="true"
                  >
                    ✈
                  </text>
                  <Marker coordinates={travelCities.london}>
                    <g className="map-marker map-marker-home">
                      <path d="M0 -17C-8 -17 -14 -11 -14 -3c0 10 14 22 14 22S14 7 14 -3C14 -11 8 -17 0 -17Z" />
                      <circle cx="0" cy="-3" r="5" />
                      <text y="33">London home</text>
                    </g>
                  </Marker>
                  <Marker coordinates={travelCities.milan}>
                    <g className="map-marker map-marker-city">
                      <circle r="5" />
                      <text y="19">Milan</text>
                    </g>
                  </Marker>
                  <Marker coordinates={travelCities.sofia}>
                    <g className="map-marker map-marker-city">
                      <circle r="5" />
                      <text y="19">Sofia</text>
                    </g>
                  </Marker>
                </ComposableMap>
              </div>
              <span className="off-clock-section-label">Recently</span>
              <p>
                Milan for the weekend: Olympic spectating, good aperitivo, better
                architecture, and a reminder that some cities just know how to
                exist. Next up: Bulgaria, which I know almost nothing about,
                which is exactly the point.
              </p>
            </div>
          </div>
        </section>
      </div>

      {selectedBook && (
        <div
          className="book-detail-overlay"
          onClick={() => setSelectedBook(null)}
        >
          <div
            ref={dialogRef}
            className="book-detail-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="book-detail-title"
            tabIndex="-1"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="book-detail-close"
              onClick={() => setSelectedBook(null)}
              aria-label="Close book details"
            >
              ×
            </button>
            <div
              className={`book-detail-cover ${selectedBook.coverImage ? 'book-detail-cover-image' : ''}`}
              style={{ '--book-color': selectedBook.color }}
              aria-hidden="true"
            >
              {selectedBook.coverImage ? (
                <img src={selectedBook.coverImage} alt="" />
              ) : (
                <>
                  <span>{selectedBook.type}</span>
                  <strong>{selectedBook.title}</strong>
                </>
              )}
            </div>
            <div className="book-detail-content">
              <span className="book-detail-kicker">{selectedBook.category}</span>
              <h2 id="book-detail-title">{selectedBook.title}</h2>
              <p className="book-detail-author">{selectedBook.author}</p>
              <p className="book-detail-status">{selectedBook.status}</p>
              <p className="book-detail-copy">{selectedBook.detail}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OffTheClock;
