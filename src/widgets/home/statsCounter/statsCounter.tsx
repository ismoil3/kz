"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTranslations, useLocale } from "next-intl"

const stats = [
  {
    number: 150,
    label: {
      ru: "Выполненных проектов",
      kk: "Орындалған жобалар",
    },
    suffix: "+",
  },
  {
    number: 50000,
    label: {
      ru: "Довольных клиентов",
      kk: "Қанағаттанған клиенттер",
    },
    suffix: "+",
  },
  {
    number: 15,
    label: {
      ru: "Лет опыта",
      kk: "Жыл тәжірибе",
    },
    suffix: "",
  },
  {
    number: 25,
    label: {
      ru: "Городов Казахстана",
      kk: "Қазақстанның қалалары",
    },
    suffix: "",
  },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = target / steps
    const stepDuration = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [target])

  return (
    <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white drop-shadow-sm">
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function StatsCounter() {
  const t = useTranslations("statsCounter")
  const locale = useLocale() as "ru" | "kk"

  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            {t("title")}
          </motion.h2>
          <p className="mt-4 text-lg md:text-xl text-white max-w-xl mx-auto">{t("subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/10 cursor-pointer backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Counter target={stat.number} suffix={stat.suffix} />
              <p className="text-white text-md mt-3 font-medium">{stat.label[locale]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
