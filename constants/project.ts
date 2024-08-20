// projects.ts
export const projects = [
  {
    title: "Parkbuddy",
    description:
      "Developed a smart parking web app enabling users to pre-book slots with license plate details, location, date, and timing. Utilized Google Cloud Vision AI and a 5MP Raspberry Pi 4 camera for automated vehicle access via servo control, validating user credentials and slot reservations. Integrated Stripe for secure payments. Presented the IoT-based solution at IEEE IATMSI-2024 conference.",
    logo: "/parkbuddy.svg",
    link: "https://parkbuddy.vercel.app/",
    github: "https://github.com/swayamterode/Parkbuddy",
    image: "/parkbuddy-mockup.png",
    alt: "Parkbuddy",
    imageDiv: "w-0 md:w-[40%] lg:w-[35%] relative overflow-hidden",
    className:
      "object-contain lg:rotate-[8deg] absolute top-12 lg:scale-105 lg:top-16 lg:left-10",
  },
  {
    title: "Watchflix",
    description:
      "Stream seamlessly with user-friendly interface powered by Tailwind CSS and React. Discover movies effortlessly using mood-based searches through the Open AI API. Enjoy a global experience with multilingual support. Secure logins and sign-ups through Firebase, and comprehensive movie data fetched via the TMDB API.",
    logo: "/watchflix.svg",
    link: "https://watchflix-gpt-ai.web.app/",
    github: "https://github.com/swayamterode/WatchflixGPT",
    image: "/Watchflix.app.png",
    alt: "WatchFlix",
    imageDiv: "w-[40%] relative overflow-hidden",
    className: "object-contain absolute left-12 h-full w-full scale-125",
  },
];
