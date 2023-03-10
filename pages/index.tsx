import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const posts = [
  {
    title: 'Testing',
    excert: 'testing testing',
  },
  {
    title: 'Testing No.2',
    excert: 'testing testing twice',
  },
];

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>TravelWorld</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid-cols-1 lg:grid-cols-12 gap-12">
        {[
          posts.map((post, index) => (
            <div>
              {post.title}
              {post.title}
            </div>
          )),
        ]}
      </div>
    </div>
  );
};

export default Home;
