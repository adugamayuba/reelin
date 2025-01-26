import { useRef, useEffect, useState } from "react"

interface SquaresProps {
  direction?: "right" | "left" | "up" | "down" | "diagonal" | "3d"
  speed?: number
  borderColor?: string
  squareSize?: number
  hoverFillColor?: string
  className?: string
  perspective?: number
}

export function Squares({
  direction = "3d",
  speed = 1,
  borderColor = "#333",
  squareSize = 40,
  hoverFillColor = "#222",
  className,
  perspective = 800,
}: SquaresProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const requestRef = useRef<number>()
  const numSquaresX = useRef<number>()
  const numSquaresY = useRef<number>()
  const gridOffset = useRef({ x: 0, y: 0, z: 0 })
  const [hoveredSquare, setHoveredSquare] = useState<{
    x: number
    y: number
  } | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.style.background = "transparent"

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize
      const zOffset = gridOffset.current.z

      ctx.lineWidth = 0.5

      // Draw grid with perspective effect
      for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
        for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
          const squareX = x - (gridOffset.current.x % squareSize)
          const squareY = y - (gridOffset.current.y % squareSize)

          // Calculate perspective distortion
          const distanceFromCenter = Math.sqrt(
            Math.pow((squareX - canvas.width / 2) / canvas.width, 2) +
            Math.pow((squareY - canvas.height / 2) / canvas.height, 2)
          )

          const scale = 1 + (distanceFromCenter * Math.sin(zOffset / 100)) / 2
          const adjustedSize = squareSize * scale

          // Calculate the center point of the square
          const centerX = squareX + squareSize / 2
          const centerY = squareY + squareSize / 2

          // Apply perspective transformation
          ctx.save()
          ctx.translate(centerX, centerY)
          ctx.scale(scale, scale)
          ctx.rotate(distanceFromCenter * Math.sin(zOffset / 200) / 4)
          ctx.translate(-squareSize / 2, -squareSize / 2)

          if (
            hoveredSquare &&
            Math.floor((x - startX) / squareSize) === hoveredSquare.x &&
            Math.floor((y - startY) / squareSize) === hoveredSquare.y
          ) {
            ctx.fillStyle = hoverFillColor
            ctx.fillRect(0, 0, squareSize, squareSize)
          }

          ctx.strokeStyle = borderColor
          ctx.globalAlpha = 1 - distanceFromCenter / 2
          ctx.strokeRect(0, 0, squareSize, squareSize)

          ctx.restore()
        }
      }
    }

    const updateAnimation = () => {
      const effectiveSpeed = Math.max(speed, 0.1)

      switch (direction) {
        case "right":
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize
          break
        case "left":
          gridOffset.current.x = (gridOffset.current.x + effectiveSpeed + squareSize) % squareSize
          break
        case "up":
          gridOffset.current.y = (gridOffset.current.y + effectiveSpeed + squareSize) % squareSize
          break
        case "down":
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize
          break
        case "diagonal":
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize
          break
        case "3d":
          gridOffset.current.z += effectiveSpeed
          gridOffset.current.x = Math.sin(gridOffset.current.z / 100) * squareSize
          gridOffset.current.y = Math.cos(gridOffset.current.z / 100) * squareSize
          break
      }

      drawGrid()
      requestRef.current = requestAnimationFrame(updateAnimation)
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const mouseX = event.clientX - rect.left
      const mouseY = event.clientY - rect.top

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize

      const hoveredSquareX = Math.floor(
        (mouseX + gridOffset.current.x - startX) / squareSize,
      )
      const hoveredSquareY = Math.floor(
        (mouseY + gridOffset.current.y - startY) / squareSize,
      )

      setHoveredSquare({ x: hoveredSquareX, y: hoveredSquareY })
    }

    const handleMouseLeave = () => {
      setHoveredSquare(null)
    }

    window.addEventListener("resize", resizeCanvas)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    resizeCanvas()
    requestRef.current = requestAnimationFrame(updateAnimation)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [direction, speed, borderColor, hoverFillColor, hoveredSquare, squareSize, perspective])

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full border-none block ${className}`}
      style={{
        transform: `perspective(${perspective}px) rotateX(10deg)`,
        transformStyle: "preserve-3d",
      }}
    />
  )
} 