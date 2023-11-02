/* eslint-disable @next/next/no-img-element */

import { useRouter } from 'next/router';

const VipUpgradeTag = () => {
  const router = useRouter();
  const goToVIP = () => router.push('/vip-membership');

  return (
    <div className="row m-0 p-0 position-relative upgrade-section section-margin px-sm-0 px-3 animation-element bounce-down">
      <div className="container main-container upgrade-container p-0 subject">
        <div className="d-flex align-items-center justify-content-center p-sm-5 p-4 m-flex-column m-text-center my-sm-0 my-2">
          <div className="ps-sm-3">
            <img alt="star" src={`${process.env.NEXT_PUBLIC_IMG_URL}img/homepage/star-purple.svg`} />
          </div>
          <div className="mx-sm-5 my-sm-0 mt-3 px-sm-0 px-4">
            <h5 className="px-sm-0 px-4">Upgrade to VIP</h5>
            <p className="color-grey font-16">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia consequuntur magni
              dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
          <div className="">
            <button type="button" onClick={goToVIP} className="btn theme-btn w-129 h-49">Upgrade</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VipUpgradeTag;
