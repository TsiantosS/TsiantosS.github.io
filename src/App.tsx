import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faBuilding,
  faCar,
  faCheckCircle,
  faEnvelope,
  faMapMarkerAlt,
  faArrowRight,
  faPhoneVolume,
  faClock,
  faBriefcase,
  faTree,
  type IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const PHONE_NUMBER = "6974965107";
const EMAIL = "example@example.com";

interface StepProps {
  icon: IconDefinition;
  title: string;
  desc: string;
}

const Step = ({ icon, title, desc }: StepProps) => (
  <div className="flex flex-col items-center hover:scale-102 transition-all cursor-pointer group">
    <div className="text-5xl text-cyan-400 mb-6 border-2 border-cyan-400 p-6 rounded-lg aspect-square flex items-center justify-center
                      transition-all
                      group-hover:bg-gradient-to-br group-hover:from-cyan-400 group-hover:to-cyan-600
                      group-hover:border-white group-hover:text-white">
      <a href="#book">
        <FontAwesomeIcon icon={icon} />
      </a>
    </div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{desc}</p>
  </div>
);

function App() {
  const images = [
    '/bg/window-cleaning-bg.jpg',
    '/bg/wheel-rim-cleaning-bg.png',
    '/bg/house-window-cleaning-bg.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Changes every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // const Testimonial = ({ text }) => (
  //   <div className="bg-white p-8 border border-cyan-100 relative shadow-sm hover:shadow-md transition">
  //     <div className="text-cyan-300 text-4xl font-serif absolute top-4 left-4 opacity-30">“</div>
  //     <p className="text-gray-500 text-sm italic leading-relaxed">{text}</p>
  //     <div className="mt-4 text-cyan-500 text-2xl">▼</div>
  //   </div>
  // );

  const services = [
    {
      title: "Καθαρισμός Γραφείου",
      icon: faBriefcase,
      items: ["Βιολογικός Καθαρισμός", "Παράθυρα", "Καναπέδες", "Χαλιά"],
      color: "border-cyan-400"
    },
    {
      title: "Καθαρισμός Καταστημάτος",
      icon: faBuilding,
      items: ["Βιτρίνες", "Εξωτερικοί χώροι", "Εσωτερικοί χώροι", "Καθαρισμός γραφείων"],
      color: "border-blue-400"
    },
    {
      title: "Καθαρισμός Επαγγελματικού Αυτοκινήτου",
      icon: faCar,
      items: ["Βιολογικός Καθαρισμός", "Εσωτερικό πλύσιμο", "Εξωτερικό πλύσιμο", "Δερμάτινα καθίσματα"],
      color: "border-teal-400"
    },
    {
      title: "Καθαρισμός Υπαίθριου Χώρου",
      icon: faTree,
      items: ["Καθαρισμός δαπέδων", "Πλύσιμο parking", "Μάζεμα φύλλων και σκόνης", "Μάζεμμα σκουπιδιών"],
      color: "border-green-400"
    }
  ];

  const MapSection = () => {
    const position: LatLngExpression = [39.6336446,22.4186442]; // [Latitude, Longitude]

    return (
      <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-full">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    );
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="flex items-center gap-8 text-sm font-medium text-gray-600">
          <img className="py-2" src="/logo/barbas-cleaning-nobg-cropped.png" width={"100"} />
          {/* <div className="text-2xl font-bold text-cyan-500">Barbas</div> */}
          <div className="hidden sm:flex items-center gap-2 text-lg font-bold text-gray-500">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-cyan-500" /> 
            Λάρισα
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-600">
          <a href="#how" className="hover:text-cyan-500 transition-colors">Διαδικασία</a>
          <a href="#services" className="hover:text-cyan-500 transition-colors">Υπηρεσίες</a>
          <a href="#book" className="bg-cyan-500 text-white px-4 py-2 rounded shadow hover:bg-cyan-600 transition">
            Κλείσε Ραντεβού
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-1000 scale-110 hover:scale-120"
          style={{
            backgroundImage: `url('${images[currentIndex]}')`,
            backgroundColor: '#4b5563', // Fallback gray
            backgroundBlendMode: 'overlay',
          }}
        >
          {/* Gradient Overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10"></div>
        </div>

        {/* Hero Content Card */}
        <div className="relative z-10 max-w-4xl backdrop-blur-md bg-white/70 border border-white/40 px-8 py-12 md:px-20 md:py-16 rounded-[2rem] shadow-2xl mx-auto">
          
          {/* Badge/Small Text */}
          <span className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-widest text-cyan-600 uppercase bg-cyan-100/50 rounded-full">
            Επαγγελματικος Καθαρισμος
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 leading-tight">
            Υπηρεσίες Καθαρισμού <br />
            στην <span className="text-cyan-700 relative">
              Λάρισα
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-cyan-500/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
              </svg>
            </span>
          </h1>

          <p className="text-lg md:text-xl mb-10 text-gray-600 leading-relaxed">
            Φροντίζουμε τον επαγγελματικό χώρο σας σαν να ήταν δικός μας. <br className="hidden md:block" />
            Εξειδικευμένες λύσεις για <span className="text-gray-900 font-semibold italic">μαγαζιά</span>,
            <span className="text-gray-900 font-semibold italic">γραφεία</span>, και επαγγελματικά <span className="text-gray-900 font-semibold italic"> αυτοκίνητα</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#book" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/30 text-white font-bold py-4 px-10 rounded-xl uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-3">
                ΚΛΕΙΣΕ ΡΑΝΤΕΒΟΥ <FontAwesomeIcon icon={faPhone} />
              </button>
            </a>
            
            <a href="#services" className="w-full sm:w-auto text-gray-600 hover:text-cyan-600 font-bold transition-colors py-4 px-8">
              Δες τις Υπηρεσίες <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      {/* <div className="py-10 bg-gray-50 flex flex-wrap justify-center gap-12 grayscale opacity-60">
        <span className="font-bold text-xl italic text-gray-400">TechLaunch</span>
        <span className="font-bold text-xl italic text-gray-400 border-2 border-gray-400 px-2">TECH COMPANY</span>
        <span className="font-bold text-xl italic text-gray-400">SMART REVIEW</span>
        <span className="font-bold text-xl italic text-gray-400">MOBWORLD</span>
      </div> */}

      {/* How It Works Section */}
      <section id="how" className="py-20 px-8 text-center">
        <h2 className="text-3xl font-light mb-2">Κλείσε τώρα <span className="text-cyan-500 border-b-2 border-cyan-500">Ραντεβού</span></h2>
        <p className="text-gray-400 mb-16 text-sm"></p>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <Step
            icon={faPhone}
            title="Τηλεφώνησέ μας"
            desc="Επικοινώνησε μαζί μας και πες μας πως μπορούμε να σε βοηθήσουμε."
          />
          <Step 
            icon={faClock}
            title="Κλείσε ραντεβού"
            desc="Θα συμφωνήσουμε τηλεφωνικώς ημέρα και ώρα. Θα δώσουμε μία εκτίμηση της τιμής."
          />
          <Step 
            icon={faBuilding}
            title="Καθαρισμός"
            desc="Θα έρθουμε με το επαγγελματικό όχημα να καθαρίσουμε στον χώρο σου."
          />
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50 px-8 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-3xl font-light mb-4">
              Οι <span className="text-cyan-500 border-b-2 border-cyan-500">Υπηρεσίες</span> μας
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Προσφέρουμε εξειδικευμένες λύσεις καθαρισμού προσαρμοσμένες στις δικές σας ανάγκες, 
              με έμφαση στη λεπτομέρεια και την ποιότητα.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`bg-white p-8 rounded-2xl shadow-sm border-t-4 ${service.color} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-left group`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-gray-50 p-4 rounded-full text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                    <FontAwesomeIcon icon={service.icon} size="lg" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-gray-800 italic">
                  {service.title}
                </h3>
                
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600 gap-3">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-cyan-400 text-sm" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* <button className="mt-8 text-sm font-semibold text-cyan-500 hover:text-cyan-700 flex items-center gap-2">
                  Μάθετε περισσότερα <span>→</span>
                </button> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-gray-50 px-8 text-center">
        <h2 className="text-3xl font-light mb-12">Don't take our <span className="text-cyan-500 border-b-2 border-cyan-500">word</span></h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Testimonial 
            text="Maid Services NYC is a wonderful service. I utilized their services to clean a one bedroom apartment. They were prompt, left the place spotless, and very professional."
          />
          <Testimonial 
            text="I had them out to help me clean my new place for an office dinner. I was very happy with the results. Jennifer came to the location on time. It is such a treat to have the home professionally cleaned."
          />
          <Testimonial 
            text="They did such a good job. Whether you want to give a unique gift or have your own home cleaned, Maid for you provides a large range of top-notch services that I highly recommend to anyone."
          />
        </div>
      </section> */}

      <section id="book" className="py-24 px-8 bg-white relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-50 z-0"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-col items-center center bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 md:p-16 shadow-2xl text-white overflow-hidden relative">
            
            <div className="flex justify-center mb-8">
              <div className="w-40 h-40 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center p-4">
                <img src="/logo/barbas-cleaning-nobg-cropped.png" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Έτοιμοι για ένα <span className="text-cyan-400">αστραφτερό</span> αποτέλεσμα;
            </h2>
            
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Η κράτηση γίνεται αποκλειστικά μέσω τηλεφώνου για να διασφαλίσουμε την καλύτερη δυνατή εξυπηρέτηση και την ακριβής εκτίμηση του χώρου σας.
            </p>

            {/* Phone Number Box */}
            <div className="inline-flex flex-col items-center group">
              <a 
                href={`tel:+30${PHONE_NUMBER}`}
                className="bg-cyan-500 hover:bg-cyan-400 text-white text-3xl md:text-5xl font-black py-6 px-10 rounded-2xl shadow-lg shadow-cyan-500/30 transition-all duration-300 flex items-center gap-6 group-hover:scale-105"
              >
                <FontAwesomeIcon icon={faPhoneVolume} className="animate-pulse text-2xl md:text-4xl" />
                {PHONE_NUMBER}
              </a>
              <div className="mt-4 flex items-center gap-6 text-sm font-medium text-cyan-200">
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faClock} /> Άμεση Εξυπηρέτηση
                </span>
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} /> Δωρεάν Εκτίμηση
                </span>
              </div>
            </div>

            {/* Availability Note */}
            <p className="mt-12 text-gray-400 text-sm italic">
              * Ώρες επικοινωνίας: καθημερινά 08:00 - 20:00.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 border-t border-gray-100 pt-2 pb-8 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12">
            
            {/* Left Side: Logo & Tagline */}
            <div className="max-w-xs">
              <img src="/logo/barbas-cleaning-nobg.png" width={"250"} />
              {/* <div className="text-3xl font-bold text-cyan-500 mb-4">Barbas</div> */}
              <p className="text-gray-400 text-sm leading-relaxed">
                Επαγγελματικές υπηρεσίες καθαρισμού για το σπίτι, την επιχείρηση και το αυτοκίνητό σας. 
                Κάνουμε τη ζωή σας πιο καθαρή και εύκολη.
              </p>
            </div>

            <MapSection />

            {/* Right Side: Contact Info */}
            <div className="flex flex-col gap-4 text-gray-600">
              <h4 className="font-bold text-gray-800 uppercase tracking-wider text-xs mb-2">Επικοινωνία</h4>
              
              <div className="flex items-center gap-3 hover:text-cyan-500 transition-colors">
                <FontAwesomeIcon icon={faEnvelope} className="text-cyan-400 w-5" />
                <a href={`mailto:${EMAIL}`} className="text-sm">{EMAIL}</a>
              </div>

              <div className="flex items-center gap-3 hover:text-cyan-500 transition-colors">
                <FontAwesomeIcon icon={faPhone} className="text-cyan-400 w-5" />
                <a href={`tel:+30${PHONE_NUMBER}`} className="text-sm">+30 {PHONE_NUMBER}</a>
              </div>

              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-cyan-400 w-5" />
                <span className="text-sm">Λάρισα, Ελλάδα</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright */}
          <div className="border-t border-gray-50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 uppercase tracking-widest">
            <p>© {new Date().getFullYear()} Barbas. All rights reserved.</p>
            <div>Made by <a href="https://tsiantosd.tech">TSIANTOSD</a></div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-cyan-500">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-500">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
