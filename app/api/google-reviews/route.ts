import { NextResponse } from "next/server"

// Google Places API integration for fetching reviews
// You'll need to add GOOGLE_PLACES_API_KEY to your environment variables
// and replace YOUR_PLACE_ID with your actual Google Business place ID

interface GoogleReview {
  author_name: string
  author_url?: string
  profile_photo_url?: string
  rating: number
  relative_time_description: string
  text: string
  time: number
}

interface GooglePlacesResponse {
  result: {
    reviews: GoogleReview[]
    rating: number
    user_ratings_total: number
  }
  status: string
}

export async function GET() {
  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY
    const placeId = process.env.GOOGLE_PLACE_ID // Your Google Business place ID

    if (!apiKey || !placeId) {
      console.log("[v0] Missing Google Places API configuration")
      return NextResponse.json({ error: "Google Places API not configured" }, { status: 500 })
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`

    const response = await fetch(url)
    const data: GooglePlacesResponse = await response.json()

    if (data.status !== "OK") {
      console.log("[v0] Google Places API error:", data.status)
      return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 })
    }

    // Filter and sort reviews (most recent first, minimum 4 stars)
    const filteredReviews = data.result.reviews
      ?.filter((review) => review.rating >= 4)
      ?.sort((a, b) => b.time - a.time)
      ?.slice(0, 10) // Limit to 10 most recent reviews

    return NextResponse.json({
      reviews: filteredReviews || [],
      averageRating: data.result.rating || 5,
      totalReviews: data.result.user_ratings_total || 0,
    })
  } catch (error) {
    console.error("[v0] Error fetching Google reviews:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
