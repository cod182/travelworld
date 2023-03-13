import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import { PostCard, Categories, PostWidget } from '../components';
import FeaturedPost from '../sections/FeaturedPosts';

import { getPosts } from '../services';

const Home: NextPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts on build
    async function fetchPosts() {
      let response = await getPosts();
      console.log(response);
      setPosts(response);
    }

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>TravelWorld</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPost />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {[
            posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            )),
          ]}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || {};
  return {
    props: { posts },
  };
}
