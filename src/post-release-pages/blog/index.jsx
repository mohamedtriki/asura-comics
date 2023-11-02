/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Head from 'next/head';

const Block = ({
  index, title, paragraph1, paragraph2, posterType, posterName, posterImg, postedOn, commentNo
}) => {
  const alterContentClassName = (i) => {
    if (i % 2 === 0) return 'col-sm-6 mt-4 animation-element bounce-down';
    return 'col-sm-6 mt-4 animation-element bounce-up';
  };

  const alterPosterClassName = () => {
    if (posterType === 'Admin') return 'd-flex mb-sm-3 mt-sm-5 mt-4';
    return 'd-flex mb-sm-3 mt-sm-4 mt-4';
  };

  return (
    <div className={alterContentClassName(index)}>
      <div className="content p-sm-4 p-4 subject">
        <h4 className="font-32">{title}</h4>

        <p className="font-16 color-grey mt-4">{paragraph1}</p>

        <p className="font-16 color-grey mt-4">
          {paragraph2}
          <u>
            <a href="src/post-release-pages/blog/index#" className="color-purple font-700 font-16">
              Read more
            </a>
          </u>
        </p>

        <div className={alterPosterClassName()}>
          <div className="me-auto d-flex align-items-center">
            <img src={posterImg} className="admin" />
            <div className="ms-3">
              <h4 className="font-18 color-purple mb-0">{posterName}</h4>
              <label className="font-12 color-grey">{`${posterType} posted on ${postedOn}`}</label>
            </div>
          </div>
          <div className="ms-auto d-flex align-items-center">
            <img src="img/blog/question_answer.svg" />
            <label className="ms-2 color-grey">{commentNo}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

const content = [
  {
    title: 'Regressor Instruction Manual, Gourmet Gaming Released!',
    paragraph1: (
      <>
        Sed ut perspiciatis unde omnis iste natus error
        sit voluptatem accusantium dolore laudantium,totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto
        <b className="color-purple">beatae vitae</b>
        dicta sunt explicabo.
      </>
    ),
    paragraph2: (
      <>
        <b className="color-purple">Neque porro</b>
        quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi
        tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </>
    ),
    posterType: 'Admin',
    posterName: 'Adam Smith',
    posterImg: 'img/blog/admin.png',
    postedOn: '25 Apr',
    commentNo: 144,
  },
  {
    title: 'From SCOG Author - To Hell With Being a Hero!',
    paragraph1: (
      <>
        At vero eos et accusamus et iusto odio dignissimos
        ducimus qui blanditiis praesentiu voluptatum deleniti atque
        corrupti quos dolores et quas molestias excepturi sint occ cupiditate
        <b className="color-purple">non provident</b>
        ,
        similique sunt in culpa qui officia deserunt mollitia animi, id
        est laborum et dolorum fuga.
      </>
    ),
    paragraph2: (
      <>
        Et harum quidem rerum facilis est et expedita distinctio.
        Nam libero tempore, cum soluta nobis est
        <b className="color-purple">eligendi</b>
        optio cumque nihil impedit quo minus id quod
        maxime placeat facere possimus, omnis voluptas assumenda est.
      </>
    ),
    posterType: 'Author',
    posterName: 'Cardano Bill',
    posterImg: 'img/blog/admin2.png',
    postedOn: '22 Apr',
    commentNo: 76,
  },
  {
    title: 'MAJOR UPDATE! Wuxiaworld NFT Marketplace!',
    paragraph1: (
      <>
        At vero eos et accusamus et iusto odio dignissimos ducimus
        qui blanditiis praesentiu voluptatum deleniti atque
        corrupti quos dolores et quas molestias excepturi sint occ cupiditate
        <b className="color-purple">non provident</b>
        , similique sunt in culpa qui officia deserunt mollitia animi, id
        est laborum et dolorum fuga.
      </>
    ),
    paragraph2: (
      <>
        Et harum quidem rerum facilis est et expedita distinctio.
        Nam libero tempore, cum soluta nobis est
        <b className="color-purple">eligendi</b>
        optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,
        omnis voluptas assumenda est.
      </>
    ),
    posterType: 'Author',
    posterName: 'Emila Charlie',
    posterImg: 'img/blog/admin3.png',
    postedOn: '22 Apr',
    commentNo: 76,
  },
  {
    title: 'Regressor Instruction Manual, Gourmet Gaming Released!',
    paragraph1: (
      <>
        Sed ut perspiciatis unde omnis iste natus error
        sit voluptatem accusantium dolore laudantium,totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto
        <b className="color-purple">beatae vitae</b>
        dicta sunt explicabo.
      </>
    ),
    paragraph2: (
      <>
        <b className="color-purple">Neque porro</b>
        quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi
        tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </>
    ),
    posterType: 'Admin',
    posterName: 'Adam Smith',
    posterImg: 'img/blog/admin.png',
    postedOn: '25 Apr',
    commentNo: 144,
  },
  {
    title: 'From SCOG Author - To Hell With Being a Hero!',
    paragraph1: (
      <>
        At vero eos et accusamus et iusto odio dignissimos
        ducimus qui blanditiis praesentiu voluptatum deleniti atque
        corrupti quos dolores et quas molestias excepturi sint occ cupiditate
        <b className="color-purple">non provident</b>
        ,
        similique sunt in culpa qui officia deserunt mollitia animi, id
        est laborum et dolorum fuga.
      </>
    ),
    paragraph2: (
      <>
        Et harum quidem rerum facilis est et expedita distinctio.
        Nam libero tempore, cum soluta nobis est
        <b className="color-purple">eligendi</b>
        optio cumque nihil impedit quo minus id quod
        maxime placeat facere possimus, omnis voluptas assumenda est.
      </>
    ),
    posterType: 'Author',
    posterName: 'Cardano Bill',
    posterImg: 'img/blog/admin2.png',
    postedOn: '22 Apr',
    commentNo: 76,
  },
  {
    title: 'MAJOR UPDATE! Wuxiaworld NFT Marketplace!',
    paragraph1: (
      <>
        At vero eos et accusamus et iusto odio dignissimos ducimus
        qui blanditiis praesentiu voluptatum deleniti atque
        corrupti quos dolores et quas molestias excepturi sint occ cupiditate
        <b className="color-purple">non provident</b>
        , similique sunt in culpa qui officia deserunt mollitia animi, id
        est laborum et dolorum fuga.
      </>
    ),
    paragraph2: (
      <>
        Et harum quidem rerum facilis est et expedita distinctio.
        Nam libero tempore, cum soluta nobis est
        <b className="color-purple">eligendi</b>
        optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,
        omnis voluptas assumenda est.
      </>
    ),
    posterType: 'Author',
    posterName: 'Emila Charlie',
    posterImg: 'img/blog/admin3.png',
    postedOn: '22 Apr',
    commentNo: 76,
  },
];

const headingContent = {
  title: 'Announcements',
  content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
explicabo.`
};

const blog = () => (
  <div className="blog-pg">
    <Head>
      <title>Asura Scans - Blog</title>
    </Head>

    <img src={`${process.env.NEXT_PUBLIC_IMG_URL}img/privacy-bg.png`} className="p-0 desktop w-100 banner" />
    <img src={`${process.env.NEXT_PUBLIC_IMG_URL}img/privacy-bg-mb.png`} className="p-0 mobile w-100" />

    <div className="p-0">
      <div className="header">
        <div className="row m-0 p-0 position-relative" />
      </div>

      <div className="row m-0 p-0 position-relative section-margin blog-section">
        <div className="container main-container p-0">
          {/* Title */}
          <div className="row m-0 p-0 position-relative header-content m-text-center animation-element bounce-up">
            <div className="col-sm-8 subject">
              <h2>{headingContent.title}</h2>
              <p className="color-grey desktop" style={{ whiteSpace: 'pre' }}>{headingContent.content}</p>
              <p className="color-grey mobile">{headingContent.content}</p>
            </div>
          </div>

          {/* Content */}
          <div className="row m-0 p-0 position-relative mt-sm-5">
            {content.map((item, i) => (
              <Block key={i} index={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default blog;
