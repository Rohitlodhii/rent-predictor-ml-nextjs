"use client"

import React, { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { BHK, locations } from "@/lib/constant"
import { Loader, TriangleAlertIcon } from "lucide-react"

type Props = {
    bhk: string
    location: string
    area: string
    isLoading : boolean
    error:string
    setBhk: (value: string) => void
    setLocation: (value: string) => void
    setArea: (value: string) => void
    onPredict: () => void
  }
  
  const InputCard: React.FC<Props> = ({
    bhk,
    location,
    area,
    isLoading ,
    error ,
    setBhk,
    setLocation,
    setArea,
    onPredict,
  }) => {

  return (
    <Card className="w-full md:min-w-lg ">
      <CardHeader>
        <CardTitle>🧳 What are your requirements?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* BHK Select */}
        <div className="space-y-2">
          <label className="text-sm font-medium">🏠 How many BHKs you need?</label>
          <Select onValueChange={(val) => setBhk(val)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose BHK type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {BHK.map((item) => (
                  <SelectItem key={item.value} value={item.value.toLocaleString()}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Location Select */}
        <div className="space-y-2">
          <label className="text-sm font-medium">📍 Where do you want to live?</label>
          <Select onValueChange={(val) => setLocation(val)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a location" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {locations.map((loc) => (
                  <SelectItem key={loc} value={loc}>
                    {loc}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Carpet Area Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium">📐 How big? (Carpet area in sq ft)</label>
          <Input
            type="number"
            placeholder="e.g. 1200 ( min 150 max 2800 )"
            min={150}
            max={2800}
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>
        
        { error && (
          <div className="flex text-red-500 gap-2 items-center justify-center w-full">
             <TriangleAlertIcon className="h-4 w-4"/> {error}
          </div>
        )}

        {/* Predict Button */}
        <div className="pt-4">
            { isLoading ? (
                  <Button className="w-full " onClick={onPredict}>
                    <Loader className="animate-spin w-4 h-4 mr-2" /> Predicting
                </Button>
            ) : (
                  <Button className="w-full " onClick={onPredict}>
                  🔮 Predict ( server not running  ) 
                </Button>
            )}
        
        </div>
      </CardContent>
    </Card>
  )
}

export default InputCard
