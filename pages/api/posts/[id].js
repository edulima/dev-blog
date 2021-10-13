import { posts } from '../../../data/posts'

export default function postHandler({ query: { id } }, res) {
  const filtered = posts.filter((p) => p.id === id)

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Post with id: ${id} not found.` })
  }
}
