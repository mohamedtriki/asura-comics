/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/control-has-associated-label */

// const KeywordsBlock = ({ type = 'desktop', word }) => {
//   const alterClassName = () => {
//     if (type !== 'desktop') return 'container-style font-14 font-capital px-2 p-1 mx-2';
//     return 'container-style font-14 font-capital px-2 p-1 ms-2';
//   };

//   return <div className={alterClassName()}>{word}</div>;
// };

// const keywords = [
//   'read hoarding in hell',
//   'hoarding in hell english',
//   'hoarding in hell eng',
//   'download hoarding in hell eng',
//   'read hoarding in hell online',
// ];

const StandaloneCommentBlock = ({
  profileImage, username, postedAt, comment, children
}) => (
  <>
    {/* profile image */}
    <div className="me-auto">
      <img src={profileImage} className="person" />
    </div>

    {/* texts */}
    <div className="ms-auto px-sm-4">
      {/* user info */}
      <div className="m-d-flex m-align-center">
        <h5 className="font-24 color-purple mb-0">{username}</h5>
        <label className="color-grey ms-sm-0 ms-3">{postedAt}</label>
      </div>

      {/* comment text */}
      <p className="font-14">{comment}</p>

      {/* inner reactions */}
      <div className="d-flex mt-3 d-flex align-items-center">
        <a href="#" className="font-13 color-white pe-sm-4 pe-1">
          <img src={`${process.env.NEXT_PUBLIC_IMG_URL}img/comments-sec/likes.png`} />
          <span className="ps-1">216</span>
        </a>
        <a href="#" className="ps-sm-5 pe-sm-5 pe-2">
          <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 5.90131C9.84513 6.2813 9.49267 6.25279 9.2496 6.00593C7.8705 4.6053 6.47829 3.21756 5.09081 1.82515C5.06342 1.79766 5.0394 1.76683 4.9836 1.70302C4.95581 1.75072 4.94227 1.79066 4.91553 1.81748C3.51493 3.22437 2.11324 4.63018 0.71151 6.03599C0.550245 6.19771 0.396108 6.23663 0.229399 6.16442C0.109878 6.11261 0.0528518 6.00955 0 5.90131C0 5.84272 0 5.78413 0 5.72551C0.070404 5.63036 0.130189 5.52463 0.212799 5.44156C1.69275 3.95284 3.17543 2.46682 4.65767 0.980375C4.6898 0.948152 4.72166 0.915098 4.75715 0.886853C4.90294 0.770774 5.09745 0.770847 5.24307 0.886975C5.27852 0.915292 5.3104 0.948322 5.3425 0.980546C6.82477 2.46699 8.30743 3.95299 9.78737 5.4417C9.86991 5.52473 9.92967 5.63038 10 5.72551C10 5.7841 10 5.84272 10 5.90131Z"
              fill="#9BA7BF"
            />
          </svg>
        </a>
        <a href="#">
          <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 1.09869C9.84513 0.718699 9.49267 0.747212 9.2496 0.994065C7.8705 2.3947 6.47829 3.78244 5.09081 5.17485C5.06342 5.20234 5.0394 5.23317 4.9836 5.29698C4.95582 5.24928 4.94227 5.20934 4.91553 5.18252C3.51493 3.77563 2.11324 2.36982 0.71151 0.964014C0.550245 0.802285 0.396108 0.763373 0.229399 0.835583C0.109878 0.887385 0.0528518 0.990452 0 1.09869C0 1.15728 0 1.21587 0 1.27449C0.070404 1.36964 0.130189 1.47537 0.212799 1.55844C1.69275 3.04716 3.17543 4.53318 4.65767 6.01962C4.6898 6.05185 4.72166 6.0849 4.75715 6.11315C4.90294 6.22923 5.09745 6.22915 5.24307 6.11303C5.27852 6.08471 5.3104 6.05168 5.3425 6.01945C6.82477 4.53301 8.30743 3.04701 9.78737 1.5583C9.86991 1.47527 9.92967 1.36962 10 1.27449C10 1.2159 10 1.15728 10 1.09869Z"
              fill="#9BA7BF"
            />
          </svg>
        </a>
        <div className="dropdown response-dropdown pe-sm-4">
          <a
            className="btn dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src={`${process.env.NEXT_PUBLIC_IMG_URL}img/comments-sec/response1.png`} />
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 1.09869C9.84513 0.718699 9.49267 0.747212 9.2496 0.994065C7.8705 2.3947 6.47829 3.78244 5.09081 5.17485C5.06342 5.20234 5.0394 5.23317 4.9836 5.29698C4.95582 5.24928 4.94227 5.20934 4.91553 5.18252C3.51493 3.77563 2.11324 2.36982 0.71151 0.964014C0.550245 0.802285 0.396108 0.763373 0.229399 0.835583C0.109878 0.887385 0.0528518 0.990452 0 1.09869C0 1.15728 0 1.21587 0 1.27449C0.070404 1.36964 0.130189 1.47537 0.212799 1.55844C1.69275 3.04716 3.17543 4.53318 4.65767 6.01962C4.6898 6.05185 4.72166 6.0849 4.75715 6.11315C4.90294 6.22923 5.09745 6.22915 5.24307 6.11303C5.27852 6.08471 5.3104 6.05168 5.3425 6.01945C6.82477 4.53301 8.30743 3.04701 9.78737 1.5583C9.86991 1.47527 9.92967 1.36962 10 1.27449C10 1.2159 10 1.15728 10 1.09869Z"
                fill="#9BA7BF"
              />
            </svg>
          </a>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
              <a className="dropdown-item" href="#">
                <img src={`${process.env.NEXT_PUBLIC_IMG_URL}img/comments-sec/response2.png`} />
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <img src={`${process.env.NEXT_PUBLIC_IMG_URL}img/comments-sec/response3.png`} />
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <img src={`${process.env.NEXT_PUBLIC_IMG_URL}img/comments-sec/response4.png`} />
              </a>
            </li>
          </ul>
        </div>
        <a href="#" className="font-14 color-grey pe-5 desktop">
          Like
        </a>
        <a href="#" className="font-14 color-grey pe-sm-5 pe-3">
          Reply
        </a>
        <a href="#" className="font-14 color-grey pe-sm-5">
          Share
        </a>
      </div>

      {children}
    </div>
  </>
);

const CommentBlock = (props) => {
  const { replies } = props;

  return (
    /* d-flex mt-sm-5 mt-3 */
    <div className="d-flex pt-3 p-0">
      <StandaloneCommentBlock {...props}>
        {replies !== undefined
          && replies.map((reply, i) => (
            <div key={i} className="d-flex mt-sm-3 mt-3">
              <StandaloneCommentBlock {...reply} />
            </div>
          ))}
      </StandaloneCommentBlock>
    </div>
  );
};

const comments = [
  {
    profileImage: '/img/comments-sec/person2.png',
    username: 'Kenzo Nakamura',
    postedAt: '17 Mar 2022',
    comment:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, laudantium, totam rem aperiam sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    replies: [
      {
        profileImage: '/img/comments-sec/person3.png',
        username: 'Michael Sena',
        postedAt: '1 week ago',
        comment:
          'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur',
      },
    ],
  },
  {
    profileImage: '/img/comments-sec/person2.png',
    username: 'Kenzo Nakamura',
    postedAt: '18 Mar 2022',
    comment:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur',
  },
];

const responses = {
  total: 75,
  happy: 16,
  cool: 25,
  love: 14,
  looking: 8,
  shrewd: 11,
  angry: 8,
};

const CommentsSection = () => (
  <div className="row m-0 p-0 position-relative comments-section mt-sm-5 mt-md-auto">
    <div className="container main-container">
      {/* Desktop Keywords */}
      {/* <div className="row m-0 p-0 position-relative desktop">
        <h5 className="font-24 color-purple">Keywords</h5>
        <div className="d-flex my-3 m-flex-reverse keywords-sec">
          {keywords.map((word, i) => (
            <KeywordsBlock key={i} word={word} />
          ))}
        </div>
      </div> */}

      {/* Disqus Login */}
      <div className="d-flex mt-sm-5 desktop login-info">
        <div className="me-auto d-flex align-items-center">
          <h5 className="font-24 color-purple mb-0">Login with</h5>
          <div className="mx-4">
            <a href="#">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="18"
                  cy="18"
                  r="16.7"
                  fill="#5B44B0"
                  fillOpacity="0.1"
                  stroke="#7334AE"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.3319 13.3246H21.61V11.0986C21.3895 11.0683 20.6311 11 19.748 11C17.9052 11 16.6429 12.1591 16.6429 14.2894V16.25H14.6094V18.7385H16.6429V25H19.136V18.7391H21.0873L21.397 16.2506H19.1355V14.5362C19.136 13.8169 19.3297 13.3246 20.3319 13.3246Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="#" className="ms-1">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="18"
                  cy="18"
                  r="16.7"
                  fill="#5B44B0"
                  fillOpacity="0.1"
                  stroke="#7334AE"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <g clipPath="url(#clip0_932_1696)">
                  <path
                    d="M25 13.6591C24.4794 13.8875 23.9246 14.0389 23.3462 14.1124C23.9412 13.7571 24.3954 13.1989 24.6089 12.526C24.0541 12.8567 23.4416 13.0904 22.7889 13.2208C22.2621 12.6599 21.5114 12.3125 20.6924 12.3125C19.1034 12.3125 17.8241 13.6023 17.8241 15.1834C17.8241 15.4109 17.8434 15.6296 17.8906 15.8379C15.5045 15.7215 13.3931 14.5779 11.9747 12.8358C11.7271 13.2654 11.5819 13.7571 11.5819 14.2865C11.5819 15.2805 12.0938 16.1616 12.8568 16.6718C12.3956 16.663 11.9433 16.5291 11.56 16.3183C11.56 16.327 11.56 16.3384 11.56 16.3498C11.56 17.7445 12.5549 18.903 13.8595 19.1699C13.6259 19.2337 13.3712 19.2644 13.107 19.2644C12.9232 19.2644 12.7377 19.2539 12.5636 19.2154C12.9355 20.352 13.9908 21.1876 15.2455 21.2148C14.269 21.9786 13.0291 22.4389 11.6869 22.4389C11.4515 22.4389 11.2257 22.4284 11 22.3995C12.2714 23.2194 13.7781 23.6875 15.403 23.6875C20.6845 23.6875 23.572 19.3125 23.572 15.5202C23.572 15.3934 23.5676 15.2709 23.5615 15.1493C24.1311 14.745 24.6097 14.2401 25 13.6591Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_932_1696">
                    <rect width="14" height="14" fill="white" transform="translate(11 11)" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="#" className="ms-1">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="18"
                  cy="18"
                  r="16.7"
                  fill="#5B44B0"
                  fillOpacity="0.1"
                  stroke="#7334AE"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.3768 21.1019C12.5645 19.3639 14.8582 19.2191 15.9879 19.3761C15.6737 19.026 14.8817 18.3744 15.4406 17.3003C12.8905 17.6259 12.0756 15.9967 11.9592 14.7173C11.7263 12.569 13.5425 11.0244 15.4055 11H19.5274C19.3877 11.1329 18.7006 11.6037 18.5376 11.6037L17.4548 11.6156C20.2144 14.307 17.5361 16.564 16.9888 17.0345C15.8827 18.4223 19.3526 19.1103 19.1663 21.4639C19.1663 23.5999 17.4315 25 14.7185 25C11.7027 24.9881 10.2591 23.0451 11.3768 21.1019ZM17.42 23.6968C18.5029 22.8398 18.2467 21.5726 17.4082 20.7276C16.9075 20.2208 16.3021 19.7381 15.0212 19.8948C13.5189 20.076 12.4245 20.8242 12.4829 21.9948C12.7971 24.4813 16.2555 24.5414 17.4197 23.6845V23.6968H17.42ZM16.6864 16.3951C17.9323 15.3329 16.7795 11.6281 15.0795 11.6281C13.9967 11.6281 13.4378 12.4364 13.391 13.5833C13.3096 15.7071 15.1844 17.6745 16.6864 16.3951ZM22.1938 17.7466L20.3193 17.7588V16.7812H22.1708V14.8624H23.114V16.7815L24.9885 16.7934L25 17.7591H23.114V19.6902L22.1823 19.7024L22.1938 17.7466Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="#" className="ms-1">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="18"
                  cy="18"
                  r="16.7"
                  fill="#5B44B0"
                  fillOpacity="0.1"
                  stroke="#7334AE"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.2918 26C16.3904 26 14.652 25.2846 13.3079 24.1012L10 24.5665L11.2779 21.319C10.8327 20.3074 10.5829 19.1844 10.5829 18C10.5829 13.582 14.0343 10 18.2918 10C22.5489 10 26 13.582 26 18C26 22.4188 22.5491 26 18.2918 26ZM22.5009 17.9771V17.9549C22.5009 15.6464 20.9198 14.0002 18.1936 14.0002H15.2491V22.0003H18.15C20.8974 22.0003 22.5009 20.2855 22.5009 17.9771ZM18.2261 20.0347H17.3648V15.9664H18.2261C19.491 15.9664 20.3306 16.7089 20.3306 17.9895V18.0117C20.3306 19.3031 19.491 20.0347 18.2261 20.0347Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="d-flex align-items-center ms-auto">
          <h5 className="font-24 color-purple mb-0 me-3">Or Sign up with Disqus</h5>
          <div className="container-style d-flex align-items-center b-radius-60 h-52 w-780">
            <input placeholder="Name" className="input-inner" />
          </div>
        </div>
      </div>

      {/* Disqus Response brief */}
      <div className="container-style d-flex align-items-center justify-content-center flex-column py-5 mt-sm-4 mt-5">
        <h3 className="pt-sm-4">{`${responses.total} Responses`}</h3>

        {/* responses */}
        <div className="d-flex responses mt-sm-3 m-flex-column">
          {/* happy */}
          <div className="d-flex response-sec">
            <div className="d-flex container-style p-1 align-items-center">
              <div className="me-auto ps-sm-3 ps-2">
                <h5 className="font-24 mb-0">{responses.happy}</h5>
              </div>
              <div className="ms-auto">
                <img src={`${process.env.NEXT_PUBLIC_IMG_URL}img/comments-sec/response1.png`} />
              </div>
            </div>

            {/* cool */}
            <div className="d-flex container-style p-1 align-items-center ms-3">
              <div className="me-auto ps-sm-3 ps-2">
                <h5 className="font-24 mb-0">{responses.cool}</h5>
              </div>
              <div className="ms-auto">
                <img src={`${process.env.NEXT_PUBLIC_IMG_URL}img/comments-sec/response2.png`} />
              </div>
            </div>

            {/* love */}
            <div className="d-flex container-style p-1 align-items-center ms-3">
              <div className="me-auto ps-sm-3 ps-2">
                <h5 className="font-24 mb-0">{responses.love}</h5>
              </div>
              <div className="ms-auto">
                <img src={`${process.env.NEXT_PUBLIC_IMG_URL}img/comments-sec/response3.png`} />
              </div>
            </div>
          </div>

          {/* looking up */}
          <div className="d-flex response-sec">
            <div className="d-flex container-style p-1 align-items-center ms-3">
              <div className="me-auto ps-sm-3 ps-2">
                <h5 className="font-24 mb-0">{responses.looking}</h5>
              </div>
              <div className="ms-auto">
                <img src={`${process.env.NEXT_PUBLIC_IMG_URL}img/comments-sec/response4.png`} />
              </div>
            </div>

            {/* shrewd */}
            <div className="d-flex container-style p-1 align-items-center ms-3">
              <div className="me-auto ps-sm-3 ps-23">
                <h5 className="font-24 mb-0">{responses.shrewd}</h5>
              </div>
              <div className="ms-auto">
                <img src={`${process.env.NEXT_PUBLIC_IMG_URL}img/comments-sec/response5.png`} />
              </div>
            </div>

            {/* angry */}
            <div className="d-flex container-style p-1 align-items-center ms-3">
              <div className="me-auto ps-sm-3 ps-2">
                <h5 className="font-24 mb-0">{responses.angry}</h5>
              </div>
              <div className="ms-auto">
                <img src={`${process.env.NEXT_PUBLIC_IMG_URL}img/comments-sec/response6.png`} />
              </div>
            </div>
          </div>
        </div>

        <a href="#" className="mt-sm-4 font-600 color-purple font-24 pb-sm-4 comments mt-3">
          Click to show comments
        </a>
      </div>

      {/* Disqus comment input */}
      <div className="container-style d-flex align-items-center b-radius-60 h-78 w-100 mt-sm-4 mt-3 input-sec">
        <img src={`${process.env.NEXT_PUBLIC_IMG_URL}img/comments-sec/person1.png`} className="ms-sm-3 ms-2" />
        <input placeholder="Write a comment..." className="input-inner" />
      </div>

      {/* Disqus comment list */}
      <div className="row m-0 p-0 position-relative mt-sm-5 comments-container">
        {comments.map((comment) => (
          <CommentBlock key={comment.postedAt} {...comment} />
        ))}
      </div>

      {/* Mobile Keywords */}
      {/* <div className="row m-0 p-0 position-relative mobile mt-4">
        <h5 className="font-24 color-purple">Keywords</h5>
        <div className="d-flex my-3 keywords-sec">
          {keywords.map((word, i) => (
            <KeywordsBlock key={i} word={word} type="mobile" />
          ))}
        </div>
      </div> */}
    </div>
  </div>
);

export default CommentsSection;
