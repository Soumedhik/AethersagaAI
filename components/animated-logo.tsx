"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function AnimatedLogo() {
  const [isHovered, setIsHovered] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <Link
      href="/"
      className="flex items-center gap-4 group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background glow */}
      <div
        className={`absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl ${
          isHovered ? "bg-gradient-to-r from-[#0084ff]/30 via-[#0066cc]/20 to-[#0084ff]/30" : ""
        }`}
      />

      {/* Logo container with enhanced animations */}
      <div
        className={`relative transition-all duration-500 ease-out ${
          isHovered
            ? "drop-shadow-2xl"
            : "drop-shadow-lg"
        } ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        style={{ transitionDelay: isLoaded ? "0ms" : "200ms" }}
      >
        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 rounded-full transition-all duration-300 ${
            isHovered
              ? "bg-gradient-to-br from-[#0084ff]/20 to-transparent opacity-100"
              : "opacity-0"
          }`}
        />

        {/* Pulsing ring effect */}
        <div
          className={`absolute -inset-1 rounded-full border-2 transition-all duration-700 ${
            isHovered
              ? "border-[#0084ff]/50 animate-ping"
              : "border-transparent"
          }`}
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 6.827 6.827"
          className={`transition-all duration-300 relative z-10 ${
            isHovered ? "filter brightness-125" : "filter brightness-100"
          }`}
        >
          <defs>
            <style>{`.fil1{fill:#fffffe;fill-rule:nonzero}`}</style>
            {/* Enhanced gradient for hover effect */}
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#0084ff" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
          <g id="Layer_x0020_1">
            <g id="_309788440">
              <path
                id="_309788176"
                className={`fil1 transition-all duration-300 ${
                  isHovered ? "fill-[url(#logoGradient)]" : ""
                }`}
                d="M5.326 2.076a1.01 1.01 0 0 0-.044-.322.572.572 0 0 0-.183-.279.48.48 0 0 0-.299-.1.785.785 0 0 0-.249.04l-.032.006c-.065 0-.115-.041-.186-.098-.11-.09-.29-.235-.564-.235a.806.806 0 0 0-.486.162l-.047.035-.054-.02a.862.862 0 0 0-.622-.02.676.676 0 0 0-.393.418l-.025.07h-.074c-.284.001-.515.08-.683.207a.796.796 0 0 0-.283.88c.063.21.207.42.445.597l.034.045c.072.17.198.307.352.392.152.085.332.12.514.09l.077.017a.643.643 0 0 0 .443.105l.077-.013.035.07c.056.11.136.217.226.322.094.107.2.213.304.317.1.099.201.2.288.3.092.104.167.208.208.305l.086.217c.041.106 0 .153.031.156.03.002 0-.051.06-.148.034-.055.076-.122.125-.197a.845.845 0 0 0 .14-.409 1.055 1.055 0 0 0-.082-.466l-.04-.1.1-.039c.06-.023.128-.012.194-.001a.514.514 0 0 0 .181 0 .668.668 0 0 0 .548-.757l-.009-.056.042-.039a.875.875 0 0 0 .276-.707.866.866 0 0 0-.384-.655l-.048-.032v-.058zm.158-.387c.032.1.05.211.054.332a1.078 1.078 0 0 1 .432.783 1.081 1.081 0 0 1-.304.84.868.868 0 0 1-.207.648.882.882 0 0 1-.667.31.527.527 0 0 1-.077-.008A1.2 1.2 0 0 1 4.76 5c-.011.17-.063.343-.174.512-.05.077-.09.14-.122.193-.106.17-.16.255-.26.246-.1-.01-.137-.103-.21-.29-.022-.056-.048-.123-.085-.212a.997.997 0 0 0-.17-.247 5.746 5.746 0 0 0-.279-.29 6.276 6.276 0 0 1-.314-.328 1.992 1.992 0 0 1-.22-.3.865.865 0 0 1-.485-.124 1.019 1.019 0 0 1-1.043-.588 1.377 1.377 0 0 1-.499-.693 1.008 1.008 0 0 1 .359-1.109c.188-.141.436-.234.738-.248a.876.876 0 0 1 .489-.476c.214-.083.465-.085.72 0a1.038 1.038 0 0 1 .565-.171c.35 0 .566.175.699.282.028.023.037.041.044.048a.98.98 0 0 1 .29-.043.69.69 0 0 1 .43.146.782.782 0 0 1 .252.381z"
              />
              <path
                id="_309787912"
                className={`fil1 transition-all duration-300 ${
                  isHovered ? "fill-[url(#logoGradient)]" : ""
                }`}
                d="M5.53 2.115a.106.106 0 0 0-.175-.12c-.192.28-.397.478-.614.602-.21.12-.435.168-.672.15a.107.107 0 0 0-.017.212c.28.022.544-.035.794-.177.245-.14.473-.36.684-.667z"
              />
              <path
                id="_309788560"
                className={`fil1 transition-all duration-300 ${
                  isHovered ? "fill-[url(#logoGradient)]" : ""
                }`}
                d="M2.028 2.684a.106.106 0 0 0 .21-.035c-.06-.365-.22-.55-.444-.627-.21-.072-.47-.038-.755.03a.106.106 0 0 0 .05.207c.25-.06.472-.091.636-.035.15.05.257.186.303.46z"
              />
              <path
                id="_309788512"
                className={`fil1 transition-all duration-300 ${
                  isHovered ? "fill-[url(#logoGradient)]" : ""
                }`}
                d="M2.939 3.484a.106.106 0 0 0 .096-.19c-.33-.168-.574-.15-.768-.015-.183.127-.31.356-.424.627a.106.106 0 0 0 .196.082c.1-.238.207-.435.348-.534.13-.09.303-.096.552.03z"
              />
              <path
                id="_309788464"
                className={`fil1 transition-all duration-300 ${
                  isHovered ? "fill-[url(#logoGradient)]" : ""
                }`}
                d="M4.182 1.188a.106.106 0 0 0-.02-.212c-.37.035-.57.205-.665.447-.088.226-.076.51-.029.798a.106.106 0 0 0 .21-.034c-.042-.256-.054-.503.018-.687.065-.168.21-.286.486-.312z"
              />
              <path
                id="_309788368"
                className={`fil1 transition-all duration-300 ${
                  isHovered ? "fill-[url(#logoGradient)]" : ""
                }`}
                d="M4.24 3.614a.106.106 0 0 0 .095.19c.249-.126.421-.12.551-.03.142.099.25.296.35.534a.106.106 0 0 0 .195-.082c-.114-.271-.24-.5-.424-.627-.194-.135-.437-.153-.768.015z"
              />
            </g>
          </g>
        </svg>

        {/* Sparkle effects on hover */}
        {isHovered && (
          <>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#0084ff] rounded-full animate-ping" />
            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-[#0066cc] rounded-full animate-pulse" />
            <div className="absolute top-1/2 -right-2 w-1 h-1 bg-[#0084ff] rounded-full animate-bounce" />
          </>
        )}
      </div>

      {/* Enhanced text with animations */}
      <div className="flex flex-col">
        <div
          className={`font-serif font-light text-xl tracking-wide transition-all duration-500 ${
            isHovered
              ? "text-[#0084ff]"
              : "text-white"
          } ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
          style={{ transitionDelay: isLoaded ? "100ms" : "300ms" }}
        >
          Aethersaga
        </div>
        <div
          className={`font-sans font-light text-sm tracking-wider transition-all duration-500 ${
            isHovered
              ? "text-[#0066cc]"
              : "text-[#b8b8b8]"
          } ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
          style={{ transitionDelay: isLoaded ? "200ms" : "400ms" }}
        >
          AI
        </div>
      </div>
    </Link>
  )
}
