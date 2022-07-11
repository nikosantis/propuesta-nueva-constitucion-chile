import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { useCallback, useEffect, useRef, useState } from 'react'
import useSWR, { Fetcher } from 'swr'

const fetcher: Fetcher<
  {
    contentHtml: MDXRemoteSerializeResult
  },
  string
> = (...args) => fetch(...args).then(res => res.json())

type ContentByChapterProps = {
  chapter: string
}

export default function ContentByChapter({ chapter }: ContentByChapterProps) {
  const hiddenRef = useRef<HTMLDivElement>(null)
  const [shouldFetch, setShouldFetch] = useState(false)
  const { data } = useSWR(
    shouldFetch ? `/api/content?chapter=${chapter}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  )

  const handleScroll = useCallback(() => {
    if (hiddenRef.current) {
      if (window.scrollY + window.innerHeight >= hiddenRef.current.offsetTop) {
        setShouldFetch(true)
      }
    }
  }, [])

  useEffect(() => {
    addEventListener('scroll', handleScroll)
    return () => removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div className='w-full pb-16 pt-4 px-4' ref={hiddenRef}>
      {!data ? <p>loading...</p> : <MDXRemote {...data.contentHtml} />}
    </div>
  )
}
