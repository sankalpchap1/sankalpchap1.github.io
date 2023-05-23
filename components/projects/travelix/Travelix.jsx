import React, { useEffect } from "react";
import { InlineMath, BlockMath } from "react-katex";
import { ProjectTitle, ProjectSubTitle } from "../common";
import Img from "../../common/Img";
import Prism from "prismjs";
import { featuresData } from "./data";
import Features3 from "./Features3";

import "prismjs/themes/prism.css";
import "prismjs/components/prism-java.min.js";
import "prism-themes/themes/prism-holi-theme.css";
import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "prismjs/plugins/toolbar/prism-toolbar.min";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min";

const swapNodesCode = `private static void swapNodes(int pos1, int pos2) { 
  // first modify the position array 
  positionArray[vertexArray[pos1]] = pos2; 
  positionArray[vertexArray[pos2]] = pos1;
  // then we actually switch the vertex Array
  int tempVertices = vertexArray[pos1];
  vertexArray[pos1] = vertexArray[pos2];
  vertexArray[pos2] = tempVertices;
  // Finally switch the bandwidth values in the Heap array
  int dummy = heapArray[pos1];
  heapArray[pos1] = heapArray[pos2];
  heapArray[pos2] = dummy;
}`;

const dijkstrajWithHeapCode = `// Initialize the vertex heap
VertexHeap.init(n);
// add nodes from src
Vertex[] vertices = graph.getVertices();
Vertex temp = vertices[source];
while (temp != null) {
    status[temp.getVertexId()] = FRINGE;
    dad[temp.getVertexId()] = source;
    bw[temp.getVertexId()] = temp.getEdgeWeight();
    VertexHeap.insert(temp.getVertexId(), bw[temp.getVertexId()]);
    temp = temp.getNext();
}

// add nodes for unseen in heap and update status, dad and bw for unseen and fringe
while (VertexHeap.getSize() != 0) {
    int maxIndex = VertexHeap.popMax(0);
    status[maxIndex] = INTREE;
    Vertex node = vertices[maxIndex];
    while (node != null) {
        if (status[node.getVertexId()] == UNSEEN) {
            status[node.getVertexId()] = FRINGE;
            dad[node.getVertexId()] = maxIndex;
            bw[node.getVertexId()] = Math.min(bw[maxIndex], node.getEdgeWeight());
            VertexHeap.insert(node.getVertexId(), bw[node.getVertexId()]);
        } else if (status[node.getVertexId()] == FRINGE
                && bw[node.getVertexId()] < Math.min(bw[maxIndex], node.getEdgeWeight())) {
            VertexHeap.delete(node.getVertexId());
            dad[node.getVertexId()] = maxIndex;
            bw[node.getVertexId()] = Math.min(bw[maxIndex], node.getEdgeWeight());
            VertexHeap.insert(node.getVertexId(), bw[node.getVertexId()]);
        }
        node = node.getNext();
    }
}`;

const unionFindCode = `public int find(int node) {
  if (parent[node] != node) {
      // implementing the path compression to optimize the future searches
      parent[node] = find(parent[node]);
  }
  return parent[node];
}`;
// Add the content of this doc section
const Travelix = (props) => {
  const { project } = props;
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      className="snap-start flex flex-col items-center py-20 bg-AAprimary"
    >
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <ProjectTitle name={project.title} />

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2 ">
          <div className="w-full space-y-4 sm:text-base text-sm ">
            <div className="flex flex-col font-Header ">
              <ProjectSubTitle name="Abstract" />
              <span className="text-gray-400  tracking-wide">
                &emsp;TRAVELIX is a personalized travel recommendation system
                that provides recommendations to users based on their
                preferences and travel history. The tool will analyze user
                preferences and destination data (granular to State level) to
                recommend Restaurants, Hotels and Nightlife that match the
                user's preferences.
              </span>
            </div>

            <div className="font-Header tracking-wide">
              <ProjectSubTitle name="Introduction" />
              <span className="text-gray-400 mb-4">
                &emsp;Need for Personalized Travel Recommendation Systems plus
                no existing solutions as of now gives rise to Travelix. Travelix
                would be useful for people who are looking for personalized
                travel recommendations that match their interests and budget and
                could be used by travel enthusiasts, families, couples, and
                anyone else who wants to plan a trip. Moreover, personalized
                recommendations help travelers discover new places and
                activities that they might have otherwise missed. By taking into
                account a user's travel history, Travelix can suggest
                destinations that the user may not have considered before,
                opening up new possibilities for travel experiences. Overall,
                the motivation behind Travelix is to create a tool that
                simplifies travel planning, saves time and effort, and provides
                personalized recommendations that help travelers make the most
                of their trips. Travelix aims to solve this problem by using
                advanced recommendation algorithms that analyze user
                preferences, travel history, and destination data to provide
                personalized travel recommendations.
              </span>
            </div>

            <Features3 {...featuresData} />

            <div className="flex flex-col font-Header tracking-wide">
              <ProjectSubTitle name="Random Graph Generation" />
              <span className="text-gray-400 mb-4">
                We are expected to construct two graphs G1 and G2 (each with
                5000 vertices) that are sparse and dense in terms of vertex
                degree. G1 must have an average vertex degree of 6, and each
                vertex in G2 must be adjacent to approximately 20% of the other
                randomly picked vertices. I created the following models to
                represent various graph attributes.
              </span>
              <span className="text-gray-400 mb-4">
                <ul>
                  <li>
                    Vertex - Used to store the attributes of a vertex in the
                    graph
                    <ul>
                      <li>
                        vertexId (int) - denotes the current vertex number
                      </li>
                      <li>
                        edgeWeight (int) - the edge weight between this vertex
                        and the connected vertex
                      </li>
                      <li>
                        degree (int) - used to keep track of the degree of each
                        vertex
                      </li>
                      <li>
                        next (Vertex) - denotes the next vertex in the linked
                        list
                      </li>
                    </ul>
                  </li>
                  <li>
                    Edge - Used to store the attributes of edges in the graph
                    and has vertex1, vertex2, and edgeWeight as its parameters
                  </li>
                  <li>
                    Graph - This is a container to store the attributes of the
                    graph such as graph type (Sparse or Dense), number of
                    vertices, and Vertex[ ] which stores the head of the
                    adjacency list (implemented in the form of LinkedList) of
                    ith vertex at ith index in the array.
                  </li>
                </ul>
              </span>

              <span className="text-gray-400 mb-4">
                &emsp;I build these random graphs in two parts. Firstly, each
                vertex is connected to its next vertex thus forming a cycle to
                ensure that graph has only one strongly connected component. For
                example, V0 is connected to V1 and V4999, V2 is connected to V1
                and V3 and so on. After this step, each vertex will have a
                degree of two which results in a total edge count of 5000. In
                the second part, we randomly pick two vertices and add an edge
                if there isn’t already existing one, and increase the degree of
                both vertices. We keep repeating this process until the average
                degree of the vertex is reached the target degree which is 6 in
                the case of the sparse graph and 1000 for the dense one. This
                results in the generation of random graphs having approximately
                15000 edges for the sparse graph and 2.5 million for the dense
                graph. I record the graph generation time and print the average
                vertex degree (as calculated below) for the sparse graph and the
                average percentage of adjacent vertices connected in for the
                dense graph.
              </span>
              <span
                className="text-gray-400 mb-4"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <BlockMath math="\text{Average Degree} = 2 * \frac{\text{Number of edges}}{\text{Number of vertices}}" />
              </span>
              <span className="text-gray-400 mb-4">
                &emsp;Because both graphs are weighted, when I create an edge
                between any two vertices, I apply a random edge weight
                (generated by the Random library from the java.util package)
                with a weight limit of 20000. I tried numerous settings for this
                weight limit option, rang- ing from 10 to 50,000. Because the
                Random library was producing a random integer (not a float), the
                number of buckets for the dense network was relatively smaller
                for the lower weight limit, resulting in saturating the maximum
                bandwidth to the weight limit (a possible solution to this was
                to generate the weights as floats, ensuring enough buckets in
                order to prevent saturation). When I upped the weight limit to
                20000, the maximum bandwidth obtained from the algorithms for
                the dense graphs was about 19000.
              </span>
            </div>

            <div className="flex flex-col font-Header tracking-wide">
              <ProjectSubTitle name="Heap Structure" />
              <span className="text-gray-400 mb-4">
                &emsp;We are required to implement the maximum heap subroutine,
                which performs fundamental heap operations such as inserting,
                deleting, and fetching the maximum element. We are supposed to
                use this subroutine in Dijkstra’s algorithm to efficiently
                discover the fringe with the greatest bandwidth. As we are
                supposed to find the vertex information for which the edge has
                the maximum bandwidth, the actual implementation becomes a bit
                complex. To keep track of vertexId, actual bandwidth of fringes,
                and indices throughout the heap functionalities, I create three
                arrays as follows
              </span>
              <span className="text-gray-400 mb-4">
                <ul>
                  <li>
                    heapArray - To store the actual bandwidth of the fringe (D
                    array as per problem statement)
                  </li>
                  <li>
                    vertexArray - Retrieve the vertex Id from the
                    heap-referenced index (H array as per problem description)
                  </li>
                  <li>
                    positionArray - Maps vertexId’s to the index. This array is
                    used to get the index referenced within the heap from Vertex
                    Number. Basically opposite of the vertexArray (which maps
                    from index to Vertex Id). This is the P array as per the
                    project description.
                  </li>
                </ul>
              </span>
              <span className="text-gray-400 mb-4">
                Functional methods are implemented as follows
              </span>
              <span className="text-gray-400 mb-4">
                <ul>
                  <li>
                    <b>init</b> - Constructor for the VertexHeap class, which
                    takes in the maxSize parameter and initializes all three
                    arrays.
                  </li>
                  <li>
                    <b>swapNodes</b> - This method is used to swap the position
                    of two vertices, which is used during the heapify process.
                    As we are referencing the vertices are linked to all the
                    arrays, and they need to be updated. The following code
                    implements the functionality explained above.
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <pre
                        className="language-java line-numbers copy-to-clipboard"
                        style={{
                          width: "fit-content",
                        }}
                      >
                        <code className="language-java">{swapNodesCode}</code>
                      </pre>
                    </span>
                  </li>
                  <li>
                    <b>maxHeapify</b> - This is a recursive function to adjust
                    the position of the vertices if it does not follow the heap
                    rules. For a heap of n elements, heapify takes O(logn) time
                  </li>
                  <li>
                    <b>insert</b> - We pass in the vertex Id and the
                    corresponding bandwidth as arguments, insert this bandwidth
                    in the heap array at the last position and then perform
                    heapify on this element.
                  </li>
                  <li>
                    <b>popMax</b> - This function takes the index as an input,
                    deletes that element from the heap, then returns. I made it
                    general enough to test exhaustively, despite the fact that
                    in Dijkstra’s approach, we are always required to fetch the
                    element at index 0. In order to maintain the right
                    connection, we must additionally alter all three arrays. In
                    the end, we reduce the size of the heap by one.
                  </li>
                  <li>
                    <b>isLeaf</b> - returns if a vertex is a leaf node or not
                    according to the following logic
                    <span
                      className="text-gray-400 mb-4"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <BlockMath math="index \in \left( size , \frac{size}{2}\right]" />
                    </span>
                  </li>
                </ul>
              </span>
            </div>

            <div className="flex flex-col font-Header tracking-wide">
              <ProjectSubTitle name="Problem Statement" />
              <span className="text-gray-400 mb-4">
                Given a source node s and a destination node t in a network G,
                in which each edge E is associated with a certain bandwidth
                bw(E), construct a path from s to t in G whose bandwidth is
                maximized (the bandwidth of a path is equal to the minimum
                edge-bandwidth over all edges in the path). Here E<sub>st</sub>{" "}
                are the edges in the path from s to t.
              </span>
              <span
                className="text-gray-400 mb-4"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <BlockMath math="B_{W(s,t)}=\forall e\in E_{st} \text{ min}\{bw(e)\}" />
              </span>
            </div>

            <div className="flex flex-col font-Header tracking-wide">
              <ProjectSubTitle name="Routing Algorithms" />
              <span className="text-gray-400 mb-4">
                &emsp;This is the most important aspect of the project. After
                generating the random graphs, we now will apply various routing
                algorithms to discover the maximum bandwidth path between a
                given source node s and destination node t. We must implement
                three routing algorithms: Dijkstra’s without the heap,
                Dijkstra’s with the heap structure (which was explained in the
                previous section) to efficiently sort the fringes, and Kruskal’s
                algorithm, which involves generating a maximum spanning tree
                (MST) and then finding the path by applying Depth First Search
                on the source vertex. We then evaluate their performance based
                on the running time of these algorithms. The next subsections
                will go into the implementation details of these algorithms. I
                have maintained a separate folder in the repository for creating
                three different classes for each algorithm, which implements the
                apply method which takes the Graph, source, and destination as
                algorithms.
              </span>
              <ProjectSubTitle name="Dijkstra’s Algorithm Without Heap" />
              <span className="text-gray-400 mb-4">
                &emsp;Dijkstra’s algorithm is usually used to solve the shortest
                path problem in a graph, which can be modified to solve the
                maximum bandwidth problem as well. It is a greedy approach to
                finding the fringe with maximum bandwidth and is guaranteed to
                find the optimal maximum bandwidth path for the graphs having
                all positive edges. The implementation is highly derived from
                the pseudo-code provided in the class. To keep track of the
                multiple stages during algorithm processing, we employ three
                arrays: parent, status, and bw. I built the Status enum, which
                comprises three vertex states: UNSEEN, FRINGE, and INTREE. We
                begin by setting the status array to UNSEEN and filling the
                fringes from the source vertex. We iterate till the fringes
                exists and then choose the fringe with the most bandwidth,
                change its status to INTREE, and update its bandwidth in the bw
                array. In the end, the bandwidth array will contain the maximum
                bandwidth for all the vertices, and following the parent array,
                we can find the path which gives us the maximum bandwidth. Then
                we just print the node which eventually results in the reverse
                route from source to destination. Because we are keeping track
                of the fringes in an array, we will need to cycle over the whole
                array to determine the largest fringe, forcing the total
                Dijkstra algorithm to execute in O(n2) time. This can be
                improved by using the heap sort which is explained in the next
                section
              </span>
              <ProjectSubTitle name="Dijkstra’s Algorithm With Heap" />
              <span className="text-gray-400 mb-4">
                &emsp;In this modified version of Dijkstra’s algorithm, instead
                of traversing throughout the fringes, we use VertexHeap (defined
                above) to maintain the fringe with the highest bandwidth. We
                first initialize the VertexHeap with a size equal to the number
                of nodes in the graph by calling the init() method. Then we
                start from the source node and insert its neighbors to the heap,
                thus turning their status from UNSEEN to FRINGE. We then fetch
                the fringe with maximum vertex (in constant time) by calling the
                popMax() method at index 0 (remember the heap will store the
                fringe with maximum bandwidth at the top). Once retrieved, we
                remove it from the fringes array and update its status from
                FRINGE to INTREE. Then we repeat this process from the maximum
                fringe, looking at its neighbors and so on. The actual
                implementation is as follows
              </span>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <pre
                  className="language-java line-numbers copy-to-clipboard"
                  style={{
                    width: "fit-content",
                  }}
                >
                  <code className="language-java">{dijkstrajWithHeapCode}</code>
                </pre>
              </span>
              <span className="text-gray-400 mb-4">
                &emsp;The insertion and deletion in the Max-heap will take
                O(logn) time as we need to perform the heapify to adjust the
                heap after updating the heap array. It always maintains the
                vertex with maximum bandwidth at the top hence the retrieval is
                done in constant time. Hence total time complexity after using
                heap reduces to{" "}
                <InlineMath
                  className="text-gray-400 mb-4"
                  math="O((m+n) \log{n})"
                />{" "}
                which can be written as
                <InlineMath
                  className="text-gray-400 mb-4"
                  math="O(m \log{n})"
                />{" "}
                as <InlineMath className="text-gray-400 mb-4" math="n<<m" /> .
                This is a major improvement in the performance of Dijkstra’s
                algorithm and the results of this simulation confirm the same.
              </span>
            </div>

            <div className="flex flex-col font-Header tracking-wide">
              <ProjectSubTitle name="Kruskal’s Algorithm" />
              <span className="text-gray-400 mb-4">
                &emsp;A maximum spanning tree is a spanning tree of a weighted
                graph having maximum weight. Kruskal’s algorithm takes a bit
                different approach to solving the maximum bandwidth problem.
                Irrespective of the source and destination nodes, we first
                generate the maximum spanning tree and then apply the DFS from
                the source to find the maximum bandwidth path. As proved in the
                class, there exists only one path between any two vertices in
                the maximum spanning tree, and that path will be the maximum
                bandwidth path.
              </span>
              <span className="text-gray-400 mb-4">
                &emsp;I have implemented Kruskal’s algorithm using the
                pseudo-code presented in class with a few modifications in order
                to take advantage of the heap sort function. We first create a
                list of all the edges of the graph and use heapSort to sort the
                edges in non-increasing order of their edge weights (This would
                take{" "}
                <InlineMath
                  className="text-gray-400 mb-4"
                  math="O(m \log{n})"
                />{" "}
                time considering the graph has m edges). Additionally, I have
                implemented the UnionFind class in order to have the ability to
                use the operations MakeSet, Find, Union, maxHeapify, and
                sortEdges. This class keeps track of the parent and ranking for
                each vertex allowing us to use an iterative approach for the
                Find operation. We use the path compression as shown below as
                well which benefits the future searches for the vertices which
                fall under the path of a vertex (to root) on which the find
                operation is called.
              </span>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <pre
                  className="language-java line-numbers copy-to-clipboard"
                  style={{
                    width: "fit-content",
                  }}
                >
                  <code className="language-java">{unionFindCode}</code>
                </pre>
              </span>
              <span className="text-gray-400 mb-4">
                &emsp;Once the random graph is generated, we can generate the
                MST only once and use it for all 5 source-destination pairs.
                Hence I have implemented the generateMST() function to build the
                MST while the graph is being created, instead of creating it
                while the Kruskal algorithm is called on the 5 different
                source-destination pairs. This provides Kruskal’s algorithm an
                advantage since we only need to compute the MST once and then
                execute the DFS (which takes much less time than calculating the
                MST) on any number of s-t pairings. However, with Dijkstra’s
                algorithm, when the source node changes, we must recalculate the
                path, increasing the total complexity when we consider finding
                maximum bandwidth paths between multiple vertex pairs.
              </span>
            </div>

            <div className="flex flex-col font-Header tracking-wide">
              <ProjectSubTitle name="Testing and Results" />
              <Img
                src={"/images/routing-algorithms/sparse.png"}
                className={"object-contain rounded-lg mt-4 mb-4"}
                alt="My Image Not Found"
              />
              <Img
                src={"/images/routing-algorithms/dense.png"}
                className={"object-contain rounded-lg mb-4"}
                alt="My Image Not Found"
              />
              <span className="text-gray-400 mb-4">
                &emsp;I build five pairs of sparse and dense graphs, for which I
                randomly select 5 source-destination pairs and use all three
                algorithms to generate the maximum bandwidth path, to evaluate
                the randomness and performance of the graphs. Above are the
                detailed findings for both dense and sparse graphs. As
                previously stated, I isolate the MST-generating element of
                Kruskal’s algorithm from the real process and integrate it with
                the graph creation. The time taken to generate this MST is shown
                in the table above. As a result, while comparing Kruskal’s
                performance, we must include the MST-generation time as well as
                the actual algorithm running time (Depth First Search on the
                generated MST). In the folder submitted, I have attached the
                console log file which contains the actual results from one of
                the iterations of my testing, a snapshot of which can be seen in
                following figure. In the above table, I have also mentioned the
                time required to generate these random graphs (as explained in
                the 2nd section).
              </span>
              <Img
                src={"/images/routing-algorithms/console_log_sample.png"}
                className={"object-contain rounded-lg mt-4 mb-4"}
                alt="My Image Not Found"
              />
            </div>

            <div className="flex flex-col font-Header tracking-wide">
              <ProjectSubTitle name="Performance Analysis and Conclusion" />
              <span className="text-gray-400 mb-4">
                We know that the running time complexities for three algorithms
                are as follows
              </span>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Img
                  src={"/images/routing-algorithms/time-complexities.png"}
                  className={"object-contain rounded-lg mb-4"}
                  style={{ maxWidth: "400px" }}
                  alt="My Image Not Found"
                />
              </span>
              <span className="text-gray-400 mb-4">
                Based on the results in the preceding section, it is clear that
                for the sparse graph, Di- jkstra’s Algorithm with Maximum Heap
                outperforms Kruskal’s algorithm, while Dijkstra’s variant
                without heap performs the slowest among all three. Dijkstra’s
                sans heap is the slow- est in the case of a sparse graph, with a
                time complexity of{" "}
                <InlineMath className="text-gray-400 mb-4" math="O(n^2)" /> ,
                since we must traverse the whole fringes array to identify the
                fringe with the greatest bandwidth. As demonstrated in class,
                Dijkstra’s method with a heap structure and Kruskal’s approach
                with Union-Find operations both have an overall complexity time
                of{" "}
                <InlineMath
                  className="text-gray-400 mb-4"
                  math="O(m \log{n})"
                />{" "}
                . This is due to the fact that in the Union-Find procedure, the
                find and heapify operations require O(logn) time whereas
                insertion and deletion take constant time (as we always insert
                at the last position or delete the index and swap with the last
                element in the heap). In addition to Union-Find, we have
                introduced the Maximum Heap to our version of Kruskal’s
                algorithm for sorting the edges while creating the maximum
                spanning tree. After generating the MST, we run the DFS from the
                source to determine the maximum bandwidth path to a particular
                destination. As a result, even though the time complexity is
                theoretically{" "}
                <InlineMath
                  className="text-gray-400 mb-4"
                  math="O(m \log{n})"
                />{" "}
                , the actual running time for Kruskal and Dijkstra’s method will
                differ due to the constants in the Big-O no- tation. Although
                there may be a number of insertion and deletion operations, the
                time it takes to sort all edges in the graph and then execute
                DFS on all edges increases the constant value of total time
                complexity, which explains why it performs slower than
                Dijkstra’s heap implementation.
              </span>
              <span className="text-gray-400 mb-4">
                &emsp;In terms of algorithm performance, we notice a somewhat
                different pattern for the dense graph. Dijkstra’s heap method,
                like for the sparse graph, is the quickest of the three. This
                highlights the algorithm’s utility in both types of graphs and
                its ability to maintain an overall complexity time of{" "}
                <InlineMath
                  className="text-gray-400 mb-4"
                  math="O(m \log{n})"
                />{" "}
                despite the fact that the number of edges (about 2.5 million) is
                far more than the number of vertices. A fascinating result is
                obtained in the case of Kruskal’s running time complexity. For
                dense graphs, Kruskal’s algorithm runs 12 times slower (average
                time 3.074 s) as compared to Dijkstra’s without a heap (average
                time 276 ms). This was to be expected given the dense graphs’
                enormous number of edges. We had to utilize HeapSort in our
                implementation to sort through the edges, which is expensive on
                a dense graph and depends on the number of edges. As a result,
                sorting over two million edges becomes time-consuming, which
                explains Kruskal’s algorithm’s poor performance and a probable
                fault in the implementation that may be corrected.
              </span>
            </div>

            <div className="flex flex-col font-Header tracking-wide">
              <ProjectSubTitle name="Performance Analysis and Conclusion" />
              <span className="text-gray-400 mb-4">
                According to our performance investigation, Kruskal’s algorithm
                performs the poorest in dense graphs, and HeapSort accounts for
                the majority of the time consumption. This component of the
                implementation might be enhanced using a different sorting
                mechanism. One of the biggest concerns is Kruskal’s reliance on
                the number of edges, which means that the more edges there are,
                the slower this implementation runs. If another sorting approach
                (one example would be Radix sort) could sort over the edges
                faster, the implementation could perform better. The amount of
                improvement that might be made is debatable, but even decreasing
                it to be equivalent to Dijkstra’s different implementations
                would be advantageous.
              </span>
              <span className="text-gray-400 mb-4">
                &emsp;Overall, we were able to successfully design three
                alternative strategies for addressing the network optimization
                problem of calculating the maximum bandwidth path. As a result,
                we were able to assess the performance of each of these
                algorithms on sparse and dense networks. According to the
                findings, Dijkstra’s method with a heap took the least amount of
                time to execute and hence performed best for both types of
                graphs. The next section goes into great detail about the code
                structure and how to run it.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travelix;
