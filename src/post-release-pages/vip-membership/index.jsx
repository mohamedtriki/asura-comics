/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
//
// import Head from 'next/head';
//
// const vip = () => {
//   function myFunction() {
//     const dots = document.getElementById('dots');
//     const moreText = document.getElementById('more');
//     const btnText = document.getElementById('myBtn');
//
//     if (dots.style.display === 'none') {
//       dots.style.display = 'inline';
//       btnText.innerHTML = 'view more';
//       moreText.style.display = 'none';
//     } else {
//       dots.style.display = 'none';
//       btnText.innerHTML = 'view less';
//       moreText.style.display = 'inline';
//     }
//   }
//   function myFunction2() {
//     const dots = document.getElementById('dots2');
//     const moreText = document.getElementById('more2');
//     const btnText = document.getElementById('myBtn2');
//
//     if (dots.style.display === 'none') {
//       dots.style.display = 'inline';
//       btnText.innerHTML = 'view more';
//       moreText.style.display = 'none';
//     } else {
//       dots.style.display = 'none';
//       btnText.innerHTML = 'view less';
//       moreText.style.display = 'inline';
//     }
//   }
//   function myFunction3() {
//     const dots = document.getElementById('dots3');
//     const moreText = document.getElementById('more3');
//     const btnText = document.getElementById('myBtn3');
//
//     if (dots.style.display === 'none') {
//       dots.style.display = 'inline';
//       btnText.innerHTML = 'view more';
//       moreText.style.display = 'none';
//     } else {
//       dots.style.display = 'none';
//       btnText.innerHTML = 'view less';
//       moreText.style.display = 'inline';
//     }
//   }
//   return (
//     <div className="vip-pg">
//       <Head>
//         <title>Asura Scans-VIP Membership</title>
//       </Head>
//
//       <img src="img/vib-bg.png" className="p-0 desktop w-100 banner" />
//       <img src="img/vib-bg-mob.png" className="p-0 mobile w-100 " />
//
//       <div className="p-0">
//         <div className="header">
//           <div className="row m-0 p-0 position-relative" />
//         </div>
//
//         <div className="row m-0 p-0 position-relative section-margin vip-section">
//           <div className="container main-container p-0">
//             <div className="row m-0 p-0 position-relative header-content text-center">
//               <h2>VIP Membership</h2>
//               <p className="color-grey px-sm-0 px-3">
//                 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
//                 <br />
//                 {' '}
//                 rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
//                 <br />
//                 {' '}
//                 explicabo.
//               </p>
//             </div>
//             <div className="row m-0 p-0 position-relative my-sm-5 mt-2">
//               <div className="col-sm-4">
//                 <div className="content border-purple m-topvip">
//                   <div className="d-flex align-items-center">
//                     <img src="img/basic.png" />
//                     <h4 className="font-48 ms-3">Basic</h4>
//                   </div>
//                   <p className="font-14 color-grey mt-sm-4 mt-4 mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem arem base et.</p>
//                   <div className="desktop m-0 p-0 pt-sm-3">
//                     <ul className="color-grey listing">
//                       <li>Ad-free access</li>
//                       <li>Exclusive sneak peeks of unreleased series</li>
//                       <li>Gain site credits equal to the value of the VIP payment, which can be spent on series&apos; advance chapters</li>
//                       <li>Offline reading on our app</li>
//                       <li>Select one fully translated series to unlock and read. Choose again from the first day of each month*</li>
//                     </ul>
//                   </div>
//                   <div className="mobile read-more">
//                     <span id="dots" className="" />
//                     <span id="more" className="">
//                       <ul className="color-grey listing">
//                         <li>Ad-free access</li>
//                         <li>Exclusive sneak peeks of unreleased series</li>
//                         <li>Gain site credits equal to the value of the VIP payment, which can be spent on series&apos; advance chapters</li>
//                         <li>Offline reading on our app</li>
//                         <li>Select one fully translated series to unlock and read. Choose again from the first day of each month*</li>
//                       </ul>
//                     </span>
//                     <button type="button" className="mobile font-12 font-600 color-purple" onClick={myFunction} id="myBtn">View more</button>
//                   </div>
//
//                   <div className="d-flex justify-content-center my-4">
//                     <h3 className="color-purple font-48">$5.00</h3>
//                     <a className="dropdown-toggle d-flex align-items-center font-600 ms-3" href="src/post-release-pages/vip-membership/index#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
//                       <span className="me-1">Per 1 month</span>
//                       <svg width="24" height="24" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M4.66699 7.14648L8.00033 10.4798L11.3337 7.14648H4.66699Z" fill="#7334AE" />
//                       </svg>
//                     </a>
//                     <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
//                       <li><a className="dropdown-item" href="src/post-release-pages/vip-membership/index#">per week</a></li>
//                       <li><a className="dropdown-item" href="src/post-release-pages/vip-membership/index#">per year</a></li>
//                     </ul>
//                   </div>
//                   <div className="button-sec d-flex justify-content-center">
//                     <button type="button" className="btn theme-btn w-100 h-52">Subscribe</button>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-sm-4">
//                 <div className="content border-pink min-height-717">
//                   <div className="d-flex">
//                     <div className="me-auto align-items-center d-flex">
//                       <img src="img/standard.png" />
//                       <h4 className="font-48 ms-3">Standard</h4>
//                     </div>
//                     <div className="ms-auto ps-2">
//                       <img src="img/standard1.png" className="ms-4 flame" />
//                     </div>
//                   </div>
//                   <p className="font-14 color-grey mt-4 mb-0">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentiu voluptatum.</p>
//                   <div className="desktop m-0 p-0 pt-sm-3">
//                     <ul className="color-grey listing">
//                       <li>All benefits of VIP Silve</li>
//                       <li>Select three fully translated series to unlock and read. Choose again from the first day of each month*</li>
//                       <li>Gain site credits equal to the value of the VIP payment, which can be spent on series&apos; advance chapters</li>
//                       <li>Own a completed series after paying for 6 months of VIP Gold status (either consecutively or upfront)**</li>
//                     </ul>
//                   </div>
//
//                   <div className="mobile read-more">
//                     <span id="dots2" className="" />
//                     <span id="more2" className="">
//                       <ul className="color-grey listing">
//                         <li>All benefits of VIP Silve</li>
//                         <li>Select three fully translated series to unlock and read. Choose again from the first day of each month*</li>
//                         <li>Gain site credits equal to the value of the VIP payment, which can be spent on series&apos; advance chapters</li>
//                         <li>Own a completed series after paying for 6 months of VIP Gold status (either consecutively or upfront)**</li>
//                       </ul>
//                     </span>
//                     <button type="button" className="mobile font-12 font-600 color-purple" onClick={myFunction2} id="myBtn2">View more</button>
//                   </div>
//
//                   <div className="d-flex justify-content-center my-4 mt-5">
//                     <h3 className="color-pink font-48">$10.00</h3>
//                     <a className="dropdown-toggle d-flex align-items-center font-600 ms-3" href="src/post-release-pages/vip-membership/index#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
//                       <span className="me-1 color-pink">Per 1 month</span>
//                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7 10.0488L12 15.0488L17 10.0488H7Z" fill="#CA2962" />
//                       </svg>
//                     </a>
//                     <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
//                       <li><a className="dropdown-item" href="src/post-release-pages/vip-membership/index#">per week</a></li>
//                       <li><a className="dropdown-item" href="src/post-release-pages/vip-membership/index#">per year</a></li>
//                     </ul>
//                   </div>
//                   <div className="button-sec d-flex justify-content-center">
//                     <button type="button" className="btn theme-btn w-100 h-52 bg-pink">Subscribe</button>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-sm-4">
//                 <div className="content border-purple m-topvip">
//                   <div className="d-flex align-items-center">
//                     <img src="img/diamond.png" />
//                     <h4 className="font-48 ms-3 mt-3">Diamond</h4>
//                   </div>
//                   <p className="font-14 color-grey mt-4 mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem arem base et.</p>
//                   <div className="desktop m-0 p-0 pt-sm-3">
//                     <ul className="color-grey listing">
//                       <li>All benefits of VIP Silver</li>
//                       <li>Gain access to the full library of completed series available on Wuxiaworld</li>
//                       <li>Own a completed series after paying for 3 months of VIP Diamond status (either consecutively or upfront)**</li>
//                     </ul>
//                   </div>
//
//                   <div className="mobile read-more">
//                     <span id="dots3" className="" />
//                     <span id="more3" className="">
//                       <ul className="color-grey listing">
//                         <li>All benefits of VIP Silver</li>
//                         <li>Gain access to the full library of completed series available on Wuxiaworld</li>
//                         <li>Own a completed series after paying for 3 months of VIP Diamond status (either consecutively or upfront)**</li>
//                       </ul>
//                     </span>
//                     <button type="button" className="mobile font-12 font-600 color-purple" onClick={myFunction3} id="myBtn3">View more</button>
//                   </div>
//
//                   <div className=" my-4 mt-sm-5 pt-sm-3">
//                     <div className=" d-flex justify-content-center mt-5">
//                       <h3 className="color-purple font-48">$20.00</h3>
//                       <a className="dropdown-toggle d-flex align-items-center font-600 ms-3" href="src/post-release-pages/vip-membership/index#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
//                         <span className="me-1">Per 1 month</span>
//                         <svg width="24" height="24" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           <path d="M4.66699 7.14648L8.00033 10.4798L11.3337 7.14648H4.66699Z" fill="#7334AE" />
//                         </svg>
//                       </a>
//                       <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
//                         <li><a className="dropdown-item" href="src/post-release-pages/vip-membership/index#">per week</a></li>
//                         <li><a className="dropdown-item" href="src/post-release-pages/vip-membership/index#">per year</a></li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div className="button-sec d-flex justify-content-center">
//                     <button type="button" className="btn theme-btn w-100 h-52">Subscribe</button>
//                   </div>
//                 </div>
//               </div>
//
//             </div>
//           </div>
//
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default vip;
