/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import Image from 'next/future/image';
import Link from 'next/link';
import generateBlur from '../../utils/generateBlur';

const SearchBlock = ({
  link, image, title, status, genres, closeModal
}) => (
  <Link href={link} passHref>
    <a className="dropdown-item" onClick={closeModal}>
      <Image
        src={image}
        layout="raw"
        width={50}
        height={68}
        alt="poster"
        placeholder="blur"
        blurDataURL={generateBlur(50, 68)}
        style={{ borderRadius: '12px' }}
      />
      <div className="rightContent">
        <h6>{title}</h6>

        <p>{status}</p>

        <p className="genres">
          {Object.keys(genres)
            .map((item) => genres[item])
            .join(', ')}
        </p>
      </div>
    </a>
  </Link>
);

export default SearchBlock;
