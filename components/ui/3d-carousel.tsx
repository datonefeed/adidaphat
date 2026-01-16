"use client"

import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react"
import Link from "next/link"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

const imageData = [
  { keyword: "night", description: "Vẻ đẹp của bóng tối biến đô thị thành những vương quốc huyền ảo của ánh sáng và bóng đêm." },
  { keyword: "city", description: "Nơi hàng triệu câu chuyện giao thoa, tạo nên nhịp đập của nền văn minh hiện đại." },
  { keyword: "sky", description: "Một tấm canvas vô tận được thiên nhiên vẽ lại mỗi ngày bởi họa sĩ tài ba nhất." },
  { keyword: "sunset", description: "Lời nhắc nhở tuyệt đẹp của thiên nhiên rằng những kết thúc cũng có thể rất đẹp." },
  { keyword: "sunrise", description: "Lời hứa của những khởi đầu mới được bao bọc trong ánh sáng vàng." },
  { keyword: "winter", description: "Khi im lặng rơi xuống như tuyết, thế giới trở thành trang giấy trắng chờ được viết nên." },
  { keyword: "skyscraper", description: "Tham vọng con người vươn tới những đám mây, chạm đến điều không tưởng." },
  { keyword: "building", description: "Những tượng đài của sự tiến bộ vững vàng qua thời gian và thay đổi." },
  { keyword: "cityscape", description: "Một bản giao hưởng của bê tông, thủy tinh và giấc mơ vươn tới chân trời." },
  { keyword: "architecture", description: "Nơi nghệ thuật gặp gỡ chức năng, tạo ra không gian truyền cảm hứng cho tâm hồn." },
  { keyword: "street", description: "Những mạch máu của thành phố, mang theo sự sống, năng lượng và vô số câu chuyện." },
  { keyword: "lights", description: "Những vì sao đô thị không bao giờ tắt, dẫn lối chúng ta xuyên qua màn đêm." },
  { keyword: "downtown", description: "Trái tim đập thình thịch nơi năng lượng, văn hóa và tham vọng va chạm." },
  { keyword: "bridge", description: "Những kết nối bắc qua khoảng cách, đưa những bờ xa xôi lại gần nhau." },
]

const duration = 0.15
const transition = { duration, filter: "blur(4px)" }
const transitionOverlay = { duration: 0.5 }

const Carousel = memo(
  ({
    handleClick,
    controls,
    cards,
    isCarouselActive,
  }: {
    handleClick: (imgUrl: string, description: string, index: number) => void
    controls: any
    cards: { url: string; description: string }[]
    isCarouselActive: boolean
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
    const cylinderWidth = isScreenSizeSm ? 1500 : 1800
    const faceCount = cards.length
    const faceWidth = cylinderWidth / faceCount
    const radius = cylinderWidth / (2 * Math.PI)
    const rotation = useMotionValue(0)
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    )

    return (
      <div
        className="flex h-full items-center justify-center bg-mauve-dark-2"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-auto origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) =>
            isCarouselActive &&
            rotation.set(rotation.get() + info.offset.x * 0.05)
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.05,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                mass: 0.1,
              },
            })
          }
          animate={controls}
        >
          {cards.map((card, i) => (
            <motion.div
              key={`key-${card.url}-${i}`}
              className="absolute flex h-full origin-center items-center justify-center rounded-xl bg-mauve-dark-2 p-2"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  i * (360 / faceCount)
                }deg) translateZ(${radius}px)`,
              }}
              onClick={() => handleClick(card.url, card.description, i)}
            >
              <motion.img
                src={card.url}
                alt={`keyword_${i} ${card.url}`}
                layoutId={`img-${card.url}`}
                className="pointer-events-none  w-full rounded-xl object-cover aspect-square"
                initial={{ filter: "blur(4px)" }}
                layout="position"
                animate={{ filter: "blur(0px)" }}
                transition={transition}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    )
  }
)

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`

// Typewriter effect component
function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Reset when text changes
    setDisplayText("")
    setCurrentIndex(0)
  }, [text])

  useEffect(() => {
    if (currentIndex === 0) {
      // Initial delay before starting
      const initialTimer = setTimeout(() => {
        setCurrentIndex(1)
      }, delay * 1000)
      return () => clearTimeout(initialTimer)
    }

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex - 1])
        setCurrentIndex((prev) => prev + 1)
      }, 30) // Speed of typing (30ms per character)
      return () => clearTimeout(timer)
    } else if (currentIndex === text.length) {
      setDisplayText(text)
    }
  }, [currentIndex, text, delay])

  return (
    <div className="relative">
      {/* Opening Quote */}
      <div className="text-6xl md:text-7xl text-white/20 font-serif leading-none mb-2">
        "
      </div>
      
      <blockquote className="text-base md:text-lg text-white leading-relaxed min-h-[120px] italic font-light pl-4 border-l-2 border-white/20">
        {displayText}
        {currentIndex <= text.length && (
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-0.5 h-5 bg-white/70 ml-1"
          />
        )}
      </blockquote>
      
      {/* Closing Quote */}
      <div className="text-6xl md:text-7xl text-white/20 font-serif leading-none text-right mt-2">
        "
      </div>
    </div>
  )
}

function ThreeDPhotoCarousel() {
  const [activeImg, setActiveImg] = useState<string | null>(null)
  const [activeDescription, setActiveDescription] = useState<string>("")
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const controls = useAnimation()
  const cards = useMemo(
    () => imageData.map((item) => ({
      url: `https://picsum.photos/200/300?${item.keyword}`,
      description: item.description
    })),
    []
  )

  useEffect(() => {
    console.log("Cards loaded:", cards)
  }, [cards])

  const handleClick = (imgUrl: string, description: string) => {
    setActiveImg(imgUrl)
    setActiveDescription(description)
    setIsCarouselActive(false)
    controls.stop()
  }

  const handleClose = () => {
    setActiveImg(null)
    setActiveDescription("")
    setIsCarouselActive(true)
  }

  return (
    <motion.div layout className="relative">
      <AnimatePresence mode="sync">
        {activeImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            style={{ willChange: "opacity" }}
            transition={transitionOverlay}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-xl w-full bg-white/[0.2] backdrop-blur-md rounded-3xl overflow-hidden border border-white/5 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Image Side */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="p-8 flex items-center justify-center"
                >
                  <motion.img
                    layoutId={`img-${activeImg}`}
                    src={activeImg}
                    className="w-full h-auto max-h-[400px] object-cover rounded-2xl"
                  />
                </motion.div>
                
                {/* Text Side */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="p-8 md:p-12 flex flex-col justify-center"
                >
                  <TypewriterText text={activeDescription} delay={0.5} />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-8 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-3 lg:space-y-6 px-4 lg:px-8 order-1 lg:order-1"
        >
            <h2 className="text-5xl text-center md:text-6xl lg:text-7xl font-light text-foreground tracking-tight">
              Triển Lãm
            </h2>
            <div className="w-24 h-1 bg-primary dark:bg-primary/80 mx-auto"></div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Khám phá bộ sưu tập hình ảnh được tuyển chọn. Kéo để xoay carousel 
            và nhấn vào ảnh để xem toàn màn hình. Mỗi bức ảnh kể một câu chuyện riêng.
          </p>
          <Link href="/home">
            <motion.button
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex mt-4 items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-medium transition-all hover:gap-5"
            >
              <span>Xem Bộ Sưu Tập</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </Link>
        </motion.div>

        {/* Carousel */}
        <div className="relative h-[200px] lg:h-[500px] w-full overflow-hidden order-2 lg:order-2">
          <Carousel
            handleClick={handleClick}
            controls={controls}
            cards={cards}
            isCarouselActive={isCarouselActive}
          />
        </div>
      </div>
    </motion.div>
  )
}

export { ThreeDPhotoCarousel };
