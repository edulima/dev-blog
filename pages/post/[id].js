import cx from 'classnames'
import Header from '../../components/header'

const URL = process.env.NEXT_PUBLIC_ENV

export const getStaticPaths = async () => {
  const res = await fetch(URL + '/api/posts')
  const data = await res.json()

  const paths = data.map((post) => {
    return {
      params: { id: post.id.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch(URL + '/api/posts/' + id)
  const data = await res.json()

  return {
    props: { post: data },
  }
}

const Post = ({ post }) => {
  return (
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
        <Header title={post.title} subtitle={post.subtitle} description="" />

        <div className="p-4 mx-auto max-w-3xl">
          {post.content.map((p, index) => {
            return (
              <p
                className="tracking-widest font-light py-2 text-justify"
                key={index}
              >
                {p}
              </p>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default Post
