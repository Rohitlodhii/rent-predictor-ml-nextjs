import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { location, area, bhk } = body

    // Validate required fields
    if (!location || !area || !bhk) {
      return NextResponse.json(
        { error: 'Missing required fields: location, area, bhk' },
        { status: 400 }
      )
    }

    // Call the external API
    const apiUrl = process.env.API_URL || 'http://13.60.187.214:8000'
    const response = await fetch(`${apiUrl}/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        location,
        area: parseInt(area),
        bhk: parseInt(bhk)
      })
    })

    if (!response.ok) {
      throw new Error(`External API responded with status: ${response.status}`)
    }

    const predictionData = await response.json()
    
    return NextResponse.json({
      location,
      area: parseInt(area),
      bhk: parseInt(bhk),
      predicted_rent: predictionData.predicted_rent || predictionData.rent || predictionData.price
    })

  } catch (error) {
    console.error('Prediction API error:', error)
    return NextResponse.json(
      { error: 'Failed to get prediction' },
      { status: 500 }
    )
  }
} 