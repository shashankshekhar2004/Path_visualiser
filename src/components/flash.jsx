import React from "react";

const Flash = () => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show m-5"
      role="alert"
    >
      <ul className="list-group list-group-flush">
      <li className="list-group-item bg-light bg-gradient">
          User can move Origin and Distination anywhere in the Grid.
        </li>
      <li className="list-group-item">
          User can make walls by Left-Clicking in the Grid.
        </li>
        <li className="list-group-item bg-light bg-gradient">
        Dijkstra's Algorithm finds the shortest path between source node and destination node for any weighted,directed graph with non-negative weights.
        </li>
        <li className="list-group-item">
        Breadth First Search (BFS) is an algorithm for traversing or searching tree or graph data structures. It explores all the nodes at the present depth before moving on to the nodes at the next depth level.
        </li>
        <li className="list-group-item">
        Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node and explores as far as possible along each branch before backtracking.
        </li>
        {/* <li className="list-group-item bg-light bg-gradient">
          User can move Origin and Distination anywhere in the Grid
        </li> */}
        {/* <li className="list-group-item">
          User can make walls by Left-Clicking in the Grid
        </li> */}
        {/* <li className="list-group-item bg-light bg-gradient">
          And we are currently working on more functionalities and design of
          this Page. Thankyou!
        </li> */}
      </ul>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Flash;
