const SocialShareButtons = ({
  url, seriesTitle, title, type
}) => (
  <div className="socialalts">
    <a href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_SITE_URL}/${type}/${url};t=${seriesTitle}${title}`} target="_blank" className="fb" rel="noreferrer">
      <i className="fab fa-facebook-f" />
      <span>
        {' '}
        Facebook
      </span>
    </a>
    <a href={`https://www.twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_SITE_URL}/${type}/${url};text=${seriesTitle}${title}`} target="_blank" className="twt" rel="noreferrer">
      <i className="fab fa-twitter" />
      <span>
        {' '}
        Twitter
      </span>
    </a>
    <a href={`whatsapp://send?text=${seriesTitle}${title} ${process.env.NEXT_PUBLIC_SITE_URL}/${type}/${url}`} target="_blank" className="wa" rel="noreferrer">
      <i className="fab fa-whatsapp" />
      <span>
        {' '}
        WhatsApp
      </span>
    </a>
    <a href={`https://pinterest.com/pin/create/button/?url=${process.env.NEXT_PUBLIC_SITE_URL}/${type}/${url};description=${seriesTitle}${title}`} target="_blank" className="pntrs" rel="noreferrer">
      <i className="fab fa-pinterest-p" />
      <span>
        {' '}
        Pinterest
      </span>
    </a>
  </div>
);

export default SocialShareButtons;
