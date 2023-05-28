import { IconCheck } from "@tabler/icons-react";
import Image from "next/image";
import codeConverterImage from "../../../assets/images/code-converter.png";
import HeaderWidget from "../../common/HeaderWidget";

const methodData = {
  header: {
    title: "Dataset and Preprocessing",
  },
  content:
    "We are using Yelp Dataset which provides a comprehensive subset of business, review, and user data in JSON format, intended for personal, educational, and academic use. The dataset includes various JSON files containing relevant information for analysis and research purposes. Yelp provides various json files such as follows",
  items: [
    {
      title: "Business.json – 150,346 businesses",
      description:
        "Business information such as name, location (state, address, zip code), geographic location and categories. More information about categories can be found here",
    },
    {
      title: "User.json – 1,987,897 users",
      description: "User data such as name, review_count, photo, friends, etc.",
    },
    {
      title: "Reviews.json – 6,990,280 reviews",
      description:
        "User-Business review information with various columns such as stars, comments, tags, etc",
    },
  ],
  content2:
    "The Yelp dataset contains a vast amount of data, making the corresponding JSON files very large. To handle this big data, we developed a CSV parser that converts the JSON files into CSV format. The converted CSV files served as a starting point for our recommendation algorithms, allowing us to efficiently access the necessary data. In the implementation, we utilized the Pandas library to read and manipulate the data, allowing us to develop more complex algorithms to extract insights from the dataset. The utilization of CSV format and Pandas library helped us effectively manage and process the data, providing a more streamlined and efficient approach to analyzing the Yelp dataset.",
  content3:
    "At Travelix, our recommendation system relied on three primary datasets: Business, Users, and Reviews. Due to the large size of these datasets, we employed a preprocessing step to divide the Business data by state. We identified the top ten states based on the highest number of businesses and used them for generating recommendations. Further categorization of the Business data was carried out to focus on the three main categories of interest: Hotels & Travel, Restaurants, and Nightlife. This enabled us to create more focused and relevant recommendations for our users based on their interests and preferences. Some of the subcategories are as follows",
  items2: [
    {
      title: "Hotels & Travel",
      description:
        "Ski Resorts, Hotels, Airports, Hostels, Motorcycle and RV Rental",
    },
    {
      title: "Restaurants",
      description:
        "Cafes, Caribbean, Chinese, Dinner Theater, Hawaiian, Indian, Sushi Bars",
    },
    {
      title: "Nightlife",
      description:
        "Bars, Comedy Clubs, Jazz & Blues, Karaoke, Music Venues, Pool Halls",
    },
  ],
  image: {
    src: codeConverterImage,
    alt: "Colorful Image",
  },
  isReversed: false,
  isAfterContent: false,
};

const Methodology = () => (
  <div
    className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${
      methodData.isAfterContent ? "pb-16 pt-1 md:pb-20" : "py-16 md:py-20"
    }`}
  >
    {methodData.header && (
      <HeaderWidget
        header={methodData.header}
        titleClassname="text-3xl sm:text-5xl"
      />
    )}
    <div className="mx-auto max-w-6xl md:px-8">
      <div
        className={`md:flex ${
          methodData.isReversed ? "md:flex-row-reverse" : ""
        } md:gap-16`}
      >
        <div className="self-center">
          {methodData.content && (
            <div className="mb-12 text-lg text-gray-600 dark:text-slate-400">
              {methodData.content}
            </div>
          )}
          {methodData.items && (
            <div className="ml-16 space-y-8">
              {methodData.items.map(({ title, description }, index) => (
                <div key={`item-content-${index}`} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-900 text-gray-50">
                      <IconCheck className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    {title && (
                      <h3 className="text-lg font-medium leading-6 text-gray-400 dark:text-white">
                        {title}
                      </h3>
                    )}
                    {description && (
                      <p className="mt-2 text-gray-600 dark:text-slate-400">
                        {description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="mx-auto max-w-6xl md:px-8">
            <div
              className={`md:flex ${
                methodData.isReversed ? "md:flex-row-reverse" : ""
              } md:gap-16`}
            >
              <div className="self-center md:basis-1/2">
                {methodData.content2 && (
                  <div className="mb-12 mt-12 text-lg text-gray-600 dark:text-slate-400">
                    {methodData.content2}
                  </div>
                )}
              </div>
              <div aria-hidden="true" className="mt-10 md:mt-0 md:basis-1/2">
                {methodData.image && (
                  <div className="relative m-auto mt-14 max-w-4xl">
                    <Image
                      src={methodData.image.src}
                      width={300}
                      height={300}
                      alt={methodData.image.alt}
                      sizes="(max-width: 768px) 100vw, 432px"
                      className="mx-auto w-full rounded-lg bg-gray-500 shadow-lg"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {methodData.content3 && (
            <div className="mb-12 mt-12 text-lg text-gray-600 dark:text-slate-400">
              {methodData.content3}
            </div>
          )}
          {methodData.items2 && (
            <div className="ml-16 space-y-8">
              {methodData.items2.map(({ title, description }, index) => (
                <div key={`item-content-${index}`} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-900 text-gray-50">
                      <IconCheck className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    {title && (
                      <h3 className="text-lg font-medium leading-6 text-gray-400 dark:text-white">
                        {title}
                      </h3>
                    )}
                    {description && (
                      <p className="mt-2 text-gray-600 dark:text-slate-400">
                        {description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default Methodology;
