import useSWR from 'swr'
import moment from 'moment'
import { useState } from 'react'

const Post = ({ post }) => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <a href={post.link} key={post.id} className='block group space-y-2'>
                <p className='font-extrabold group-hover:underline text-2xl'>{post.title.rendered}</p>
                <div className={`${open ? '' : 'text-red-300 max-h-12'} relative text-md space-y-2 overflow-hidden`}>
                    <p
                        // onClick={() => setOpen((s) => !s)}
                        className='space-y-2'
                        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                    />
                </div>
                <p className='opacity-50'>{moment(post.date).fromNow()}</p>
            </a>
        </>
    )
}

export default function News() {
    const { data: posts, error } = useSWR('https://onlyfans.plus/wp-json/wp/v2/posts?per_page=4')

    if (!posts || error) return <></>
    return (
        <>
            <div id='news' className='bg-red-800 text-red-200 relative shadow border-t border-b border-red-700'>
                <div className='max-w-4xl relative z-10  mx-auto py-24 px-6 space-y-8'>
                    <p className='text-2xl sm:text-4xl font-extrabold'>Latest from LastCheat</p>

                    <div className='space-y-8'>
                        {posts.map((post, index) => {
                            return <Post post={post} />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}