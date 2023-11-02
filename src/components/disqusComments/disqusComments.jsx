import { DiscussionEmbed } from 'disqus-react';

export default function DisqusComments({ url, identifier, title }) {
  return (
    <div className="seriescontainer my-5">
      <div className="">
        <div className="card bg-transparent text-white p-sm-4">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="sm-h5 h4 mb-0">Comments</h4>
              {/* <CommentCount
                className="sm-h7 h6"
                shortname="https-asura-comics-gify-dev"
                config={
                    {
                      url: pageurl,
                      identifier: `${seriesID}/${chapterID}`,
                      title: fulltitle,
                    }
                }
              >
                Comments
              </CommentCount> */}
            </div>
            <hr />
            <DiscussionEmbed
              shortname={process.env.NEXT_PUBLIC_DISQUS_SHORTNAME}
              config={{
                url,
                identifier,
                title,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
