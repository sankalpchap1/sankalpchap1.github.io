import { IconCheck } from "@tabler/icons-react";
import HeaderWidget from "./HeaderWidget";
import Image from "next/image";
import travel2 from "../../../assets/images/travel2.jpg";

const method2Data = {
  header: {
    title: "Recommendation Engine",
  },
  content:
    "Travelix is a revolutionary platform designed to provide highly personalized travel recommendations to individuals seeking to optimize their travel experiences. We recognized a gap in the market for a product that not only streamlines the planning process, but also delivers tailored recommendations tailored to the unique preferences of each user. To achieve this goal, we invested heavily in the development of a robust recommendation engine capable of providing three distinct types of recommendations: non-personalized, matrix factorization-based personalized, and auto-encode paired up with collaborative filtering-based personalized recommendations. Our cutting-edge approach leverages advanced algorithms, including user-user collaborative filtering and clustering, to analyze vast amounts of data and generate highly targeted recommendations.",
  content2:
    "At Travelix, we believe that travel should be accessible and enjoyable for everyone, and we are committed to providing our users with the most comprehensive and customized travel recommendations available. As mentioned, Travelix provides three different kinds of recommendations as follows",
  items: [
    {
      title: "Non-personalized recommendations",
      description:
        "To recommend trending places to visit right now for selected state",
    },
    {
      title: "Personalized recommendations using Matrix Factorization",
    },
    {
      title:
        "Personalized recommendations using Auto Encode and Collaborative Filtering",
      description:
        "Recommendations based on similar users using User-User Collaborative Filtering and Clustering algorithms.",
    },
  ],
  content3:
    " Non-personalized recommendations (NPR) are a class of recommendation systems that leverage the collective wisdom of a user community to identify the most popular items. This approach entails computing the popularity score of each item by aggregating ratings assigned by all users for that item. Subsequently, unexplored items are ranked in descending order based on their popularity score, and the top-ranked items are recommended to each user.",
  image1: {
    src: travel2,
    alt: "Colorful Image",
  },
  isReversed: false,
  content4:
    "Matrix Factorization is a technique used in machine learning and recommendation systems to decompose a matrix into two lower-rank matrices. In the context of recommendation systems, the matrix represents the user-item interactions, where the rows represent the users, the columns represent the items, and the values represent the ratings or preferences of the users for the items. By factorizing the matrix into lower-rank matrices, Matrix Factorization can identify latent factors that explain the observed user-item interactions, such as user preferences or item characteristics. Matrix Factorization can be used to make personalized recommendations to users based on their preferences and past behavior. The benefits of Matrix Factorization in recommendation systems include improved accuracy, scalability, and interpretability of the recommendations. Additionally, Matrix Factorization can handle sparse data, which is common in recommendation systems where users have only rated a small fraction of the available items.",
  content5:
    "We implement the Matrix Factorization algorithm for implicit feedback data using the MF_implicit class that takes as input the training rating matrix train_mat, the number of latent factors latent, the learning rate lr, and the regularization weight reg. The class contains the methods negative_sampling() to sample negative user-item pairs to train the model, train() to train the model for a given number of epochs, and predict() to generate the recommendation list for each user. In the train() method, the model is trained using stochastic gradient descent by minimizing the difference between the predicted and actual ratings of the user-item pairs. The predict() method generates the top 50 ranked list of recommendations for each user based on the learned latent factors.",
  isReversedMF: true,
  isAfterContent: false,
  matrix_header: {
    title: "Matrix Factorization",
  },
  npr_header: {
    title: "Non Personalized Recommendation",
  },
  aecf_header: {
    title: "Auto Encoder and Collaborative Filtering",
  },
  content6:
    "Autoencoders and collaborative filtering are both widely used techniques in the field of machine learning and for designing Recommendation engines. Autoencoders are a type of neural network that can learn to compress and reconstruct high-dimensional data, such as images, while minimizing the reconstruction error. Collaborative filtering, on the other hand, is a technique used for recommendation systems, where the system predicts user preferences based on past behavior and similarity to other users. By analyzing user behavior and preferences, collaborative filtering can suggest products, services, or content that users are likely to enjoy.",
  content7:
    "We have implemented an autoencoder-based collaborative filtering algorithm for personalized recommendation in a travel recommendation system. The autoencoder model is trained on a sparse matrix of user ratings, with the goal of learning embeddings that capture user preferences. The learned embeddings are then used to compute similarity scores between users and items, which are used to predict the ratings of the items for each user. The model is evaluated using the root mean squared error (RMSE) metric on a held-out test set, and the top recommended items for a given user are returned based on the predicted ratings.",
  content8:
    "To implement the Autoencoder, we used 3 hidden dense layers with 64, 32 and 16 neurons during encoding and 2 hidden layers with 32 and 64 neurons during decoding. We are using the ReLU activation function in the hidden layers. We are also sandwiching the dropout layers between all the hidden layers and the last hidden layer and output layer. In the output layer we are using the “sigmoid” as the activation function. To train the Autoencoder as defined above, we are using the “Adam” optimizer and “Binary Cross-Entropy” loss function. After this we train the model taking a batch size of 32 and training the model for 200 epochs. We also implemented a learning rate scheduler to find the optimal hyperparameter during training. We shuffle the data before each epoch and use a validation set as well.",
  content9:
    "Autoencoders can help solve problems in recommendation systems by learning a low-dimensional representation of the data that captures the underlying structure and patterns in the user-item interactions. This can be useful in handling the sparsity and high dimensionality of the data, as well as improving the accuracy and relevance of the recommendations. Autoencoders can also be used in conjunction with other techniques such as collaborative filtering, content-based filtering, and hybrid methods to further improve the performance and robustness of the recommendation system.",
};

const Methodology2 = () => (
  <div
    className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${
      method2Data.isAfterContent ? "pb-16 pt-1 md:pb-20" : "py-16 md:py-20"
    }`}
  >
    {method2Data.header && (
      <HeaderWidget
        header={method2Data.header}
        titleClassname="text-3xl sm:text-5xl"
      />
    )}
    <div className="mx-auto max-w-6xl md:px-8">
      <div
        className={`md:flex ${
          method2Data.isReversed ? "md:flex-row-reverse" : ""
        } md:gap-16`}
      >
        <div className="self-center">
          {method2Data.content && (
            <div className="mb-12 text-lg text-gray-600 dark:text-slate-400">
              {method2Data.content}
            </div>
          )}
          {method2Data.content2 && (
            <div className="mb-12 text-lg text-gray-600 dark:text-slate-400">
              {method2Data.content2}
            </div>
          )}
          {method2Data.items && (
            <div className="ml-16 space-y-8">
              {method2Data.items.map(({ title, description }, index) => (
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
            {method2Data.npr_header && (
              <HeaderWidget
                header={method2Data.npr_header}
                titleClassname="pt-12 text-2xl sm:text-4xl"
              />
            )}
            <div
              className={`md:flex ${
                method2Data.isReversed ? "md:flex-row-reverse" : ""
              } md:gap-16`}
            >
              <div className="self-center md:basis-1/2">
                {method2Data.content3 && (
                  <div className="mb-12 mt-12 text-lg text-gray-600 dark:text-slate-400">
                    {method2Data.content3}
                  </div>
                )}
              </div>
              <div aria-hidden="true" className="mt-10 md:mt-0 md:basis-1/2">
                {method2Data.image1 && (
                  <div className="relative m-auto mt-14 max-w-4xl">
                    <Image
                      src={method2Data.image1.src}
                      width={300}
                      height={300}
                      alt={method2Data.image1.alt}
                      sizes="(max-width: 768px) 100vw, 432px"
                      className="mx-auto w-full rounded-lg bg-gray-500 shadow-lg"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {method2Data.matrix_header && (
            <HeaderWidget
              header={method2Data.matrix_header}
              titleClassname="pt-16 text-3xl sm:text-4xl"
            />
          )}
          {method2Data.content4 && (
            <div className="mb-12 mt-12 text-lg text-gray-600 dark:text-slate-400">
              {method2Data.content4}
            </div>
          )}
          {method2Data.content5 && (
            <div className="mb-12 mt-12 text-lg text-gray-600 dark:text-slate-400">
              {method2Data.content5}
            </div>
          )}

          {method2Data.aecf_header && (
            <HeaderWidget
              header={method2Data.aecf_header}
              titleClassname="pt-16 text-3xl sm:text-4xl"
            />
          )}
          {method2Data.content6 && (
            <div className="mb-12 mt-12 text-lg text-gray-600 dark:text-slate-400">
              {method2Data.content6}
            </div>
          )}
          {method2Data.content7 && (
            <div className="mb-12 mt-12 text-lg text-gray-600 dark:text-slate-400">
              {method2Data.content7}
            </div>
          )}
          {method2Data.content8 && (
            <div className="mb-12 mt-12 text-lg text-gray-600 dark:text-slate-400">
              {method2Data.content8}
            </div>
          )}
          {method2Data.content9 && (
            <div className="mb-12 mt-12 text-lg text-gray-600 dark:text-slate-400">
              {method2Data.content9}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default Methodology2;
