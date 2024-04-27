// PhotoSlider.jsx
import React from "react";
import { motion } from "framer-motion";
import training from "./logo/training.svg";
import code from "./logo/code.svg";
import iot from "./logo/iot.svg";
import aii from "./logo/aia.svg";
import cloud from "./logo/cloud.svg";
import main from "./logo/main.svg";


import votreImageUrl from "./jjjj.jpg"
const photos = [
  training,
code,iot,aii, cloud,main
];

const PhotoSlider = () => {
  const duplicatedPhotos = [
    ...photos,
    ...photos,
    ...photos,
   
  ];

  return (
    <div className="  w-full  pb-20 text-white relative bg-midNightBlueColor "   
    style={{
      backgroundImage: `url(${votreImageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
    >
      

      <h1 className=" text-5xl  font-bold text-center py-10 ">Our Services</h1>
      <div className="flex justify-center">
        <div
          className="md:w-3/4 mx-auto sm:w-4/5 lg:w-3/4 w-4/5 inline-flex flex-nowrap overflow-hidden "
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)",
          }}
        >
          <motion.div
            className="flex"
            animate={{
              x: ["-100%", "0%"],
              transition: {
                ease: "linear",
                duration: 20,
                repeat: Infinity,
              },
            }}
          >
            {duplicatedPhotos.map((photoUrl, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-1/3 lg:w-1/6 md:w-1/5 sm:w-1/4 m-auto "
              >
                <img
                  src={photoUrl}
                  alt={`Photo ${index + 1}`}
                  className="m-auto"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PhotoSlider;

// import React, { useEffect, useRef } from 'react';
// import '../App.css'; // Make sure to import the Tailwind CSS file

// const PhotoSlider = () => {
//   const logosRef = useRef(null);

//   useEffect(() => {
//     const ul = logosRef.current;
//     ul.insertAdjacentHTML('afterend', ul.outerHTML);
//     ul.nextSibling.setAttribute('aria-hidden', 'true');
//   }, []);

//   return (
//     <main className="relative min-h-screen flex flex-col justify-center bg-slate-900 ">
//       <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
//         <div className="text-center">
//           <div
//             className="w-full inline-flex flex-nowrap overflow-hidden"
//             style={{
//               maskImage: 'linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)',
//             }}
//           >
//             <ul ref={logosRef} className="flex items-center justify-center md:justify-start space-x-8 animate-infinite-scroll">
//               <li>
//                 <img src="./hey.png" alt="Facebook"  />
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default PhotoSlider;
