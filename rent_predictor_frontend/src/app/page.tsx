"use client"

import GridBackground from "@/components/hero/gridBackground"
import NavContainer from "@/components/hero/nav-container"
import InputCard from "@/components/inputCard"
import ResultCard from "@/components/ResultCard"
import Navbar from "@/components/Navbar"
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import Footer from "@/components/Footer"
import AccourdingCard from "@/components/AccourdingCard"

import { z } from "zod"
import { toast } from "sonner"

const inputSchema = z.object({
  bhk: z.coerce.number().min(1, "BHK must be a valid number"),
  location: z.string().min(1, "Location is required"),
  area: z.coerce.number().min(100, "Area must be at least 100").max(3000),
})

type PredictionResult = {
  location: string
  area: number
  bhk: number
  predicted_rent?: number
}

export default function Home() {
  const [bhk, setBhk] = useState("")
  const [location, setLocation] = useState("")
  const [area, setArea] = useState("")
  const [showResult, setShowResult] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [result, setResult] = useState<PredictionResult | null>(null)

  const handlePredict = async () => {
    setError("")

    const result = inputSchema.safeParse({ bhk, location, area })
    if (!result.success) {
      setError("Please fill inputs correctly")
      return
    }

    setIsLoading(true)
    
    try {
            // Type cast to integers
      const bhkInt = parseInt(bhk)
      const areaInt = parseInt(area)
      
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          location: location,
          area: areaInt,
          bhk: bhkInt
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to fetch prediction')
      }

      const predictionData = await response.json()
      setResult({
        location: predictionData.location,
        area: predictionData.area,
        bhk: predictionData.bhk,
        predicted_rent: predictionData.predicted_rent
      })
      setShowResult(true)
    } catch (err) {
      setError('Sorry brick by brick.')
      toast("Failed to get prediction", {
        description: "Maybe server not running",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setBhk("")
    setLocation("")
    setArea("")
    setShowResult(false)
    setError("")
    setResult(null)
  }

  return (
    <div className="flex flex-col md:gap-8 gap-4 md:mt-4 mt-2 md:mx-auto md:max-w-4xl w-full px-2">
      <NavContainer>
        <Navbar />
      </NavContainer>

      <GridBackground>
        <AnimatePresence mode="wait">
          {showResult ? (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <ResultCard onBack={handleReset} result={result} />
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <InputCard
                bhk={bhk}
                location={location}
                area={area}
                isLoading={isLoading}
                setBhk={setBhk}
                setLocation={setLocation}
                setArea={setArea}
                onPredict={handlePredict}
                error={error}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </GridBackground>
      <AccourdingCard/>

      <Footer/>
    </div>
  )
}
