import Link from 'next/link'

import cx from 'classnames'
import Head from 'next/head'
import Header from '../components/header'

import { FaShareAlt } from 'react-icons/fa'

const URL = process.env.NEXT_PUBLIC_ENV

export const getStaticProps = async () => {
  const res = await fetch(URL + '/api/posts')
  const data = await res.json()

  return {
    props: { posts: data },
  }
}

const Home = ({ posts }) => {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <main
          className={cx([
            'flex',
            'pt-10',
            'px-10',
            'w-full',
            'flex-1',
            'flex-col',
          ])}
        >
          <Header
            title="Welcome to"
            subtitle="Dev blog"
            description=""
          />

          <div className="flex flex-col py-2 mx-auto w-full lg:w-6/12">
            <p className="mt-3 text-base font-bold"></p>
            {posts.map((post) => {
              return (
                <div key={post.id} className="py-2">
                  <div
                    className={cx([
                      'p-2',
                      'border',
                      'rounded',
                      'border-gray-100',
                      'hover:bg-gray-50',
                    ])}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-lg">
                          <Link href={'/post/' + post.id}>{post.title}</Link>
                        </div>
                        <div className="text-sm text-gray-400">
                          Published: {post.date}
                        </div>
                      </div>
                      <div className="pr-2 flex flex-row">
                        <div
                          className={cx([
                            'py-1',
                            'px-3',
                            'text-white',
                            'rounded-full',
                            'bg-blue-600',
                          ])}
                        >
                          1
                        </div>
                        <div className="pt-2 px-2">
                          <FaShareAlt />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            <div
              className={cx([
                'font-bold',
                'underline',
                'text-center',
                'text-blue-600',
                'hover:text-black',
              ])}
            >
              View all posts
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
