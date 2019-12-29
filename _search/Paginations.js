// import React,{useState} from "react";
// import Pagination from 'react-bootstrap/Pagination';
// import Cards from './Cards';

// const Paginations = ({ docsPerPage, totalDocs }) => {
//   const pageNumbers = [];
//   const [currentPage, setCurrentPage] = useState(1);

//   let LastDocIndex = currentPage * docsPerPage;
//   let FirstDocIndex = LastDocIndex - docsPerPage;
//   let currentDocs = totalDocs.slice(FirstDocIndex, LastDocIndex); 

//   for (let i = 1; i <= Math.ceil(totalDocs.length / docsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <div>
//       <Pagination size="sm">
//         {pageNumbers.map(number => (
//           <Pagination.Item onClick={() => setCurrentPage(number)} key={number}>
//             {number}
//           </Pagination.Item>
//         ))}
//       </Pagination>
//       <Cards docs={currentDocs} />
//     </div>
//   );
// };

// export default Paginations;


import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import Cards from "./Cards";

const Paginations = ({ docsPerPage, totalDocs, updateC2}) => {
  const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState(1);
  const [tabStart, setTabStart] = useState(1);
  let [c2 , setC2] = useState(-1)
  const [showPre, setShowPre] = useState(false);
  const [showNext, setShowNext] = useState(true);


console.log(totalDocs)
  let LastDocIndex = currentPage * docsPerPage;
  let FirstDocIndex = LastDocIndex - docsPerPage;
  let currentDocs = totalDocs.slice(FirstDocIndex, LastDocIndex);

  let barLength = 0;

  for (let i = tabStart; i <= Math.ceil(totalDocs.length / docsPerPage); i++) {
    barLength++;
    pageNumbers.push(i);
    if (barLength == 10) {
      //setShowNext(true)
      break;
    }
  }
  let pre, next;
  if (showPre) {
    if(tabStart <= 1){
      pre = <Pagination.Prev disabled />;
    }else{
      pre = <Pagination.Prev onClick={() =>{
        setC2(c2--)
        updateC2(c2)
        setTabStart(tabStart - 3)
      }} />;
    }
  } else {
    pre = <Pagination.Prev disabled />;
  }
  if (showNext) {
    if(tabStart+9 >= Math.ceil(totalDocs.length / docsPerPage)){
      next = <Pagination.Next disabled />;
    }else{
      next = <Pagination.Next onClick={() => {
        //setShowPre(true);
        console.log(totalDocs.length)
        setC2(c2++)
        console.log('C2 from pagination', c2)
        updateC2(c2)
        setTabStart(tabStart + 3)
        setShowPre(true)
      }} />;
    }
  } else {
    next = <Pagination.Next disabled />;
    //setShowPre(true);
  }

  return (
    <div>
      <Pagination size="sm">
        {pre}
        {pageNumbers.map(number => (
          <Pagination.Item onClick={() => setCurrentPage(number)} key={number}>
            {number}
          </Pagination.Item>
        ))}
        {next}
      </Pagination>
      <Cards docs={currentDocs} />
    </div>
  );
};

export default Paginations;