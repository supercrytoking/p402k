import useSWR from "swr";
import moment from "moment";
import { useState } from "react";

const Post = ({ post }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a href={post.link} key={post.id} className="block group space-y-2">
        <p className="font-extrabold group-hover:underline text-2xl">
          {post.title.rendered}
        </p>
        <div
          className={`${
            open ? "" : "text-gray-600 max-h-12"
          } relative text-md space-y-2 overflow-hidden`}
        >
          <p
            // onClick={() => setOpen((s) => !s)}
            className="space-y-2"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
        <p className="opacity-50">{moment(post.date).fromNow()}</p>
      </a>
    </>
  );
};

export default function News() {
  const { data: posts, error } = useSWR(
    `https://onlyfans.plus/wp-json/wp/v2/posts?per_page=12&categories=45`
  );

  if (!posts || error) return <></>;
  return (
    <>
      <div id="news" className="bg-gray-900 text-gray-400 relative ">
        <div className="max-w-4xl relative z-10  mx-auto py-24 px-6 space-y-8">
          <p className="text-4xl font-extrabold">Latest from LastCheat</p>

          <div className="space-y-8">
            {posts.map((post, index) => {
              return <Post key={index} post={post} />;
            })}
          </div>
        </div>
      </div>

      <svg
        className="bg-gray-900"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#212936"
          fill-opacity="1"
          d="M0,32L0,96L57.6,96L57.6,288L115.2,288L115.2,288L172.8,288L172.8,224L230.4,224L230.4,288L288,288L288,128L345.6,128L345.6,320L403.2,320L403.2,288L460.8,288L460.8,32L518.4,32L518.4,128L576,128L576,96L633.6,96L633.6,64L691.2,64L691.2,64L748.8,64L748.8,288L806.4,288L806.4,224L864,224L864,288L921.6,288L921.6,32L979.2,32L979.2,192L1036.8,192L1036.8,0L1094.4,0L1094.4,128L1152,128L1152,32L1209.6,32L1209.6,256L1267.2,256L1267.2,288L1324.8,288L1324.8,224L1382.4,224L1382.4,192L1440,192L1440,320L1382.4,320L1382.4,320L1324.8,320L1324.8,320L1267.2,320L1267.2,320L1209.6,320L1209.6,320L1152,320L1152,320L1094.4,320L1094.4,320L1036.8,320L1036.8,320L979.2,320L979.2,320L921.6,320L921.6,320L864,320L864,320L806.4,320L806.4,320L748.8,320L748.8,320L691.2,320L691.2,320L633.6,320L633.6,320L576,320L576,320L518.4,320L518.4,320L460.8,320L460.8,320L403.2,320L403.2,320L345.6,320L345.6,320L288,320L288,320L230.4,320L230.4,320L172.8,320L172.8,320L115.2,320L115.2,320L57.6,320L57.6,320L0,320L0,320Z"
        ></path>
      </svg>
    </>
  );
}
