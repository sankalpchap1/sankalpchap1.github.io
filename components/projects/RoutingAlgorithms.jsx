import React from "react";
import { ProjectTitle, ProjectSubTitle } from "./common";
// import { CopyBlock, dracula } from "react-code-blocks";
import { useEffect } from "react";
// import Prism from 'prismjs';
// import 'prismjs/themes/prism.css';
// import 'prismjs/components/prism-javascript';
// import katex from 'katex';
// import Index from './index.md'
// import { serialize } from 'next-mdx-remote/serialize';



const RoutingAlgorithms = (props) => {
  const { project } = props;
  console.log(props);
  return (
    <div id="aboutSection" data-aos="fade-up" className="snap-start flex flex-col items-center py-20 bg-AAprimary">
      {/* // ? 0.1 About Me */}
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <ProjectTitle name={project.title} />
        {/* // ? Paragraphs */}

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2 ">
          <div className="w-full space-y-4 sm:text-base text-sm ">

            <div className="flex flex-col font-Header ">
              <ProjectSubTitle name="Abstract" />
              <span className="text-gray-400  tracking-wide">
                Network optimization is a significant topic of current computer science and computer engineering study.
                In this course project, I have created a network routing protocol utilizing the data structures and algorithms learned in class CSE629 Analysis of Algorithms.
                This allowed me to transform my academic understanding into a real-world practical computer application.
                This module features random sparse and dense graph generation, and implementation of Dijkstra’s and Kruskal’s algorithms to solve the maximum bandwidth problem.
                In the end, I have presented a thorough analysis of the performances of these algorithms on dense and sparse graphs.
              </span>
            </div>

            <div className="font-Header tracking-wide">
              <ProjectSubTitle name="Introduction" />
              <span className="text-gray-400 mb-4">
                The goal of this project is to help us realize that translating algorithmic notions at a higher degree of abstraction into tangible implementations in a specific programming language is not always straightforward.
                Implementations usually urge you to focus on extra details of the techniques, which can result in significantly more knowledge. We concentrate on the Maximum Bandwidth Path problem, which is considered a significant network optimization challenge.
                Various techniques may be used to find the path with the best potential bandwidth between a given source and destination, but the performance is mainly dependent on the actual implementation of an algorithm and the data structures utilized beneath.
                First, we build two random weighted undirected graphs, one sparse and one dense with a large degree of vertices.
                We maintain this generation unpredictable enough to adequately assess the performance of methods.
                Furthermore, we employ two well-known algorithms - Dijkstra’s and Kruskal’s - to determine the maximum bandwidth path between the source and destination.
                However, we conduct a comprehensive examination of the running time of these algorithms after modifying them to use the heap sort rather than not utilizing one.
                In the later parts of this report, I go over the specifics of random graph generation, implementation of Dijkstra’s without heap algorithm, Dijkstra’s with heap algorithm, and Kruskal’s algorithm.
                Finally, I present the results in tabular format as well as a thorough performance comparison of these three routing algorithms.
              </span>
            </div>

            <div className="flex flex-col font-Header tracking-wide">
              <ProjectSubTitle name="Random Graph Generation" />
              <span className="text-gray-400 mb-4">
                We are expected to construct two graphs G1 and G2 (each with 5000 vertices) that are sparse and dense in terms of vertex degree.
                G1 must have an average vertex degree of 6, and each vertex in G2 must be adjacent to approximately 20% of the other randomly picked vertices.
                I created the following models to represent various graph attributes.
              </span>
              <span className="text-gray-400 mb-4">
                <ul>
                  <li>
                    Vertex - Used to store the attributes of a vertex in the graph
                    <ul>
                      <li>vertexId (int) - denotes the current vertex number</li>
                      <li>edgeWeight (int) - the edge weight between this vertex and the connected vertex</li>
                      <li>degree (int) - used to keep track of the degree of each vertex</li>
                      <li>next (Vertex) - denotes the next vertex in the linked list</li>
                    </ul>
                  </li>
                  <li>Edge - Used to store the attributes of edges in the graph and has vertex1, vertex2, and edgeWeight as its parameters</li>
                  <li>Graph - This is a container to store the attributes of the graph such as graph type (Sparse or Dense), number of vertices, and Vertex[ ] which stores the head of the adjacency list (implemented in the form of LinkedList) of ith vertex at ith index in the array.</li>
                </ul>
              </span>

              <span className="text-gray-400 mb-4">
                I build these random graphs in two parts.
                Firstly, each vertex is connected to its next vertex thus forming a cycle to ensure that graph has only one strongly connected component.
                For example, V0 is connected to V1 and V4999, V2 is connected to V1 and V3 and so on. After this step, each vertex will have a degree of two which results in a total edge count of 5000.
                In the second part, we randomly pick two vertices and add an edge if there isn’t already existing one, and increase the degree of both vertices.
                We keep repeating this process until the average degree of the vertex is reached the target degree which is 6 in the case of the sparse graph and 1000 for the dense one.
                This results in the generation of random graphs having approximately 15000 edges for the sparse graph and 2.5 million for the dense graph.
                I record the graph generation time and print the average vertex degree (as calculated below) for the sparse graph and the average percentage of adjacent vertices connected in for the dense graph.
              </span>
              {/* <span className="text-gray-400 mb-4">
                <div dangerouslySetInnerHTML={{ __html: katex.renderToString(math) }} />
              </span> */}
              <span className="text-gray-400 mb-4">
                Because both graphs are weighted, when I create an edge between any two vertices, I apply a random edge weight (generated by the Random library from the java.util package) with a weight limit of 20000.
                I tried numerous settings for this weight limit option, rang- ing from 10 to 50,000.
                Because the Random library was producing a random integer (not a float), the number of buckets for the dense network was relatively smaller for the lower weight limit, resulting in saturating the maximum bandwidth to the weight limit (a possible solution to this was to generate the weights as floats, ensuring enough buckets in order to prevent saturation).
                When I upped the weight limit to 20000, the maximum bandwidth obtained from the algorithms for the dense graphs was about 19000.
              </span>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default RoutingAlgorithms;