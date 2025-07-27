"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === "dark"

  return (
    <>
    <Button size={"sm"} variant={"noShadow"} className="md:hidden rounded-full" onClick={() => setTheme(isDark ? "light" : "dark")} >
      {isDark ? (
        <>
          <Sun className=" h-4 w-4" />
          
        </>
      ) : (
        <>
          <Moon className=" h-4 w-4" />
         
        </>
      )}
    </Button>
    <Button size={"sm"}  className="rounded-full hidden md:flex" onClick={() => setTheme(isDark ? "light" : "dark")} >
      {isDark ? (
        <>
          <Sun className=" h-4 w-4" />
          
        </>
      ) : (
        <>
          <Moon className=" h-4 w-4" />
         
        </>
      )}
    </Button>

    </>
  )
}
