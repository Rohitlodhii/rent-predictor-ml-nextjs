// components/ResultCard.tsx
import React from "react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type PredictionResult = {
  location: string
  area: number
  bhk: number
  predicted_rent?: number
}

type Props = {
  onBack: () => void
  result: PredictionResult | null
}

const ResultCard: React.FC<Props> = ({ onBack, result }) => {
  const formatPrice = (price?: number) => {
    if (!price) return "₹0/month"
    return `₹${price.toLocaleString('en-IN')}/month*`
  }

  return (
    <Card className="md:min-w-lg w-[270px] md:w-full text-center">
      <CardHeader>
        <CardTitle>📊 Your Prediction Result</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-2xl md:text-4xl text-green-500 font-bold">{formatPrice(result?.predicted_rent)}</p>
        <p className="text-sm">📍 Location: {result?.location || "N/A"}</p>
        <p className="text-sm">📐 Area: {result?.area || "N/A"} sq ft</p>
        <p className="text-sm">🛏️ BHK Type: {result?.bhk || "N/A"} BHK</p>
        <p className="text-xs text-muted-foreground">* Estimates based on web scraped data</p>
      </CardContent>

      <CardFooter className="pt-4 justify-center">
        <Button className="h-10 w-full" onClick={onBack} >
          🔁 Try Again
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ResultCard
