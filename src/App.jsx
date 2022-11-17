import { Fragment, useEffect, useState } from "react";
import { BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";

function App() {
  // const [grid, setGrid] = useState(
  //   new Array(4).fill(1).map((row) =>
  //     new Array(4).fill("").map((doc) => {
  //       doc = Math.floor(Math.random() * 5);
  //       return doc;
  //     })
  //   )
  // );
  const [grid, setGrid] = useState([
    [1, 1, 2, 3],
    [4, 5, 5, 3],
    [4, 8, 8, 2],
  ]);

  const [showNumber, setShow] = useState(
    new Array(grid.length)
      .fill("")
      .map(() => new Array(grid[0].length).fill(false))
  );

  let [prev, setPrevious] = useState(undefined);

  function shuffleMultiArray(multArr) {
    let mutationArray = [...multArr];
    mutationArray.map((row, rowIndex) =>
      mutationArray[rowIndex].sort(() => Math.random() - 0.5)
    );
    setGrid(mutationArray);
    setShow(
      new Array(grid.length)
        .fill("")
        .map(() => new Array(grid[0].length).fill(false))
    );
  }

  function clickHandler(colI, rowI) {
    let revealedGrid = [...showNumber];
    revealedGrid[rowI][colI] = true;
    setShow(revealedGrid);

    if (prev) {
      if (grid[prev.rowI][prev.colI] !== grid[rowI][colI]) {
        setTimeout(() => {
          revealedGrid[rowI][colI] = false;
          revealedGrid[prev.rowI][prev.colI] = false;
          setShow([...revealedGrid]);
        }, 500);
        setPrevious(undefined);
      } else {
        setPrevious(undefined);
      }
    } else {
      setPrevious({ rowI, colI });
    }
  }
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center bg-charcoal py-2">
      <div className="px-4 py-4 text-center uppercase font-bold text-gray-400 text-xl">
        Play if you can I challenge you
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2" key={grid[0][0]}>
        {grid.map((row, rowI) => (
          <Fragment key={rowI}>
            {row.map((col, colI) => {
              return (
                <button
                  className={`w-24 h-24 rounded text-white bg-gray-400 flex justify-center items-center active:bg-gray-500  ring-0 focus:outline-offset-2 focus:outline-white active:ring-1 active:ring-white disabled:bg-gray-500 
                  ${showNumber[rowI][colI] ? "animate-change-scale" : ""}
                  `}
                  disabled={showNumber[rowI][colI]}
                  key={colI}
                  onClick={() => clickHandler(colI, rowI)}
                >
                  {showNumber[rowI][colI] ? col : ""}
                </button>
              );
            })}
          </Fragment>
        ))}
      </div>
      <div className="flex gap-4">
        <button
          className="px-4 py-1.5 rounded text-white bg-gray-400 flex justify-center items-center active:bg-gray-500  ring-0 focus:outline-offset-2 focus:outline-white active:ring-1 active:ring-white mt-4 disabled:bg-gray-500"
          onClick={() => shuffleMultiArray(grid)}
        >
          Shuffle
        </button>
      </div>
      <Socials />
    </div>
  );
}

export default App;
const Socials = () => {
  return (
    <div className="flex flex-col sm:flex-row md:gap-4 justify-center items-center">
      <a
        className="flex space-x-2 px-4 py-1.5 rounded text-white bg-gray-400 flex justify-center items-center active:bg-gray-500  ring-0 focus:outline-offset-2 focus:outline-white active:ring-1 active:ring-white mt-4 disabled:bg-gray-500"
        href="https://github.com/yuvrajdahal/"
        target="_blank"
      >
        <BsGithub className="md:text-2xl" />
        <span>yuvrajdahal</span>
      </a>
      <a
        className="flex space-x-2 px-4 py-1.5 rounded text-white bg-gray-400 flex justify-center items-center active:bg-gray-500  ring-0 focus:outline-offset-2 focus:outline-white active:ring-1 active:ring-white mt-4 disabled:bg-gray-500"
        href="https://twitter.com/yuvrajdl"
        target="_blank"
      >
        <BsTwitter className="md:text-2xl" />
        <span>yuvrajdahal</span>
      </a>
    </div>
  );
};
