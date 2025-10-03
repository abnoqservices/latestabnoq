'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

const LayoutDetailOne = () => {
  const { slug } = useParams()  // ✅ Correct: get slug from URL
  const [blogDetail, setBlogDetail] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!slug) return

    const fetchBlogDetail = async () => {
      try {
      
        setLoading(true)
        // ✅ API fetch by slug
        const res = await fetch(
          `https://aapkiyojana.org/abnoq/welcome/blogdetail/${encodeURIComponent(slug)}`
        )
        const result = await res.json()

        // ✅ API returns array → take first element
        if (Array.isArray(result) && result.length > 0) {
          setBlogDetail(result[0].blog_detail)
        }
      } catch (err) {
        console.error('Error fetching blog:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogDetail()
  }, [slug])

  if (loading) {
    return <div className="text-center py-10">Loading blog...</div>
  }

  if (!blogDetail) {
    return <div className="text-center py-10">No blog found.</div>
  }

  return (
    <div className="list-blog blog-layout lg:pt-20 sm:pt-14 pt-10">
      <div className="container">
        <div className="flex items-center justify-center">
          <div className="w-full lg:w-2/3">
            <div dangerouslySetInnerHTML={{ __html: blogDetail }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutDetailOne
