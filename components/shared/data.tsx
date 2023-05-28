import { FeaturesProps, ContentProps, ContactProps } from "./types";
import cameraFrontImg from "../../assets/images/camera-front.jpg";
import cameraBackImg from "../../assets/images/camera-back.jpg";
import {
  IconArrowsRightLeft,
  IconBrandTailwind,
  IconBulb,
  IconComponents,
  IconListCheck,
  IconRocket,
  IconMapPin,
  IconClock,
  IconPhoneCall,
} from "@tabler/icons-react";

export const featuresData: FeaturesProps = {
  header: {
    title: (
      <>
        What you get with <span className="whitespace-nowrap">Travelix</span>
      </>
    ),
    subtitle: "",
    highlight: "Features",
  },
  items: [
    {
      title: "Personalised Recommendations",
      description:
        "Recommendations based on travel history and user preferences, which uses Matrix Factorization, combination of Auto Encoder and colloborative filtering techniques",
      icon: IconBrandTailwind,
    },
    {
      title: "Data-driven recommendations",
      description:
        "Uses Yelp Dataset to provide trustworthy recommendations that are accurate and reliable",
      icon: IconComponents,
    },
    {
      title: "Complete Itinerary",
      description:
        "Provides a complete travel itinerary, including hotels, travel, restaurants and events to save users time and effort in researching and planning their trip",
      icon: IconListCheck,
    },
    {
      title: "User-friendly interface",
      description:
        "Boasts an intuitive user interface inspired by Netflix, enabling a seamless user experience alon with live fetching of business logos from Google to enhance the visual appeal of our recommendations",
      icon: IconRocket,
    },
    {
      title: "Trending Recommendations",
      description:
        "Recommend trending places to visit right now, which will attract users who are looking for popular and trendy destinations",
      icon: IconArrowsRightLeft,
    },
    {
      title: "Collaborative filtering & Auto Encoder",
      description:
        "Tool uses advanced technqiues of Auto Encoder and Collaborative Filtering techniques to offer the most relevant recommendations to our users",
      icon: IconBulb,
    },
  ],
};

// Content data
export const contentData: ContentProps = {
  header: {
    title: "Motivation Behind Travelix",
    subtitle:
      " Need for Personalized Travel Recommendation Systems plus no existing solutions as of now gives rise to Travelix. Travelix would be useful for people who are looking for personalized travel recommendations that match their interests and budget and could be used by travel enthusiasts, families, couples, and anyone else who wants to plan a trip. Moreover, personalized recommendations help travelers discover new places and activities that they might have otherwise missed. By taking into account a user's travel history, Travelix can suggest destinations that the user may not have considered before, opening up new possibilities for travel experiences. Overall, the motivation behind Travelix is to create a tool that simplifies travel planning, saves time and effort, and provides personalized recommendations that help travelers make the most of their trips. Travelix aims to solve this problem by using advanced recommendation algorithms that analyze user preferences, travel history, and destination data to provide personalized travel recommendations. ",
    highlight: "Introduction",
  },
  content: " ",
  items: [
    {
      title: "Personalized Recommendation System",
      description:
        " In today's time of destination weddings and annual vacationt rips, there is utmost need for Travelix.  Recommendation systems in the field of travel and tourism domain are very less compared to other domains.",
    },
    {
      title: "No Existing Solutions",
      description:
        " Traditional travel planning involves a lot of research and effort to find destinations, accommodations, and activities that match the traveler preferences and budget. Some tools such as TripAdvisor and Expedia do not offer any level of personalization for users. Infact they are just search based web engines.",
    },
    {
      title: "Travelix",
      description:
        " By offering a one-stop solution for all travel needs, including flights, accommodations, restaurants, events, and attractions, Travelix makes it easy for travelers to plan their trips without the need for extensive research.",
    },
  ],
  image: {
    src: cameraFrontImg,
    alt: "Colorful Image",
  },
  isReversed: false,
  isAfterContent: false,
};

// Content2 data
export const content2Data: ContentProps = {
  header: {
    title: "Introduction",
    subtitle:
      " Travelix is a personalized travel recommendation system designed to provide customized recommendations to users based on their preferences, budget, and travel history. Overall, the Travelix tool aims to simplify the process of planning a trip, providing users with personalized travel recommendations based on their interests and budget. It is a novel tool that fills a gap in the market by offering a personalized approach to travel recommendations. In this report, we will present the details of the Travelix Product, including its features, target users, the challenges encountered during development, and the methodology used to build the tool. Additionally, we will discuss the data sources used for the development of the tool and finally, we will demonstrate the usefulness of Travelix by evaluating our system and conducting user testing and providing feedback on the results obtained from the system.",
  },
  content: "",
  items: [
    {
      title: "TravelFlix UI: Streamlined Wanderlust",
      description:
        "A User Interface similar to Netflix for Travel Needs. Live loading of Images of hotels and places along with seamless smooth User Expereince.",
    },
    {
      title: "Travelix 3FRS: Customized Journeys Unfold",
      description:
        "Travelix 3 Fold Recommender System : Non-personalized recommendations,  Personalized recommendations, Using Matrix Factorization, AutoEncoder + Collaborative Filtering.",
    },
    {
      title: "TravelHub: Yelp-powered Expedition",
      description:
        "One stop solution for user’s travel needs. Using Yelp Dataset for establishing the user business ratings matrix, covering 2M users and around 150K businesses.",
    },
  ],
  image: {
    src: cameraBackImg,
    alt: "Colorful Image",
  },
  isReversed: true,
  isAfterContent: true,
};

export const contactData: ContactProps = {
  header: {
    title: "Get in Touch",
    subtitle: "Feel free to contact me.",
    // highlight: "Contact",
  },
  items: [
    {
      title: "My Address",
      description: ["Texas A&M University", "College Station, TX"],
      icon: IconMapPin,
    },
    {
      title: "Contact",
      description: [
        "Mobile: +1 (979) 344-8130",
        "Mail: sankalpchap1@gmail.com",
      ],
      icon: IconPhoneCall,
    },
    {
      title: "Working hours",
      description: [
        "Monday - Friday: 08:00 - 17:00",
        "Saturday & Sunday: 08:00 - 12:00",
      ],
      icon: IconClock,
    },
  ],
  form: {
    title: "Ready to Get Started?",
    inputs: [
      {
        type: "text",
        name: "name",
        placeholder: "Your name",
      },
      {
        type: "email",
        name: "email",
        placeholder: "Your email address",
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: "textarea",
      placeholder: "Write your message...",
    },
    btn: {
      title: "Send Message",
      type: "submit",
    },
  },
};
