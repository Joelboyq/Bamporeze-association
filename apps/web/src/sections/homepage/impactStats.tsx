"use client"
import { useState, useEffect, useRef } from "react"
import type { Locale } from "../../../i18n.config"

interface ImpactStatsProps {
  locale: Locale
}

// Helper function to extract number from string like "10,000+", "500", "700+"
function extractNumber(value: string): { number: number; suffix: string } {
  // Remove commas and extract number and suffix
  const cleaned = value.replace(/,/g, '')
  const match = cleaned.match(/^(\d+)(.*)$/)
  if (match) {
    return {
      number: parseInt(match[1], 10),
      suffix: match[2] || ''
    }
  }
  return { number: 0, suffix: value }
}

// Format number with commas
function formatNumber(num: number, suffix: string): string {
  return num.toLocaleString('en-US') + suffix
}

// Counter animation hook
function useCounterAnimation(targetValue: string, isVisible: boolean, duration: number = 2000) {
  const [displayValue, setDisplayValue] = useState("0")
  const { number: targetNum, suffix } = extractNumber(targetValue)
  const startTimeRef = useRef<number | null>(null)
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    if (!isVisible) {
      setDisplayValue("0")
      return
    }

    const startTime = Date.now()
    startTimeRef.current = startTime

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentNum = Math.floor(easeOut * targetNum)
      
      setDisplayValue(formatNumber(currentNum, suffix))

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate)
      } else {
        setDisplayValue(formatNumber(targetNum, suffix))
      }
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isVisible, targetNum, suffix, duration])

  return displayValue
}

// Stat Card Component
function StatCard({ stat, isVisible }: { stat: { label: string; value: string }; isVisible: boolean }) {
  const displayValue = useCounterAnimation(stat.value, isVisible, 3500)
  
  return (
    <div className="stat-card">
      <div className="stat-content">
        <div className="stat-value">{displayValue}</div>
        <div className="stat-label">{stat.label}</div>
      </div>
    </div>
  )
}

export default function ImpactStats({ locale }: ImpactStatsProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const styles = `
    .impact-section {
      background-color: #003d1d;
      padding: 2rem 0;
    }
    
    .impact-container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    
    .impact-header {
      text-align: center;
      margin-bottom: 2rem;
    }
    
    .impact-title {
      font-size: 1.5rem;
      font-weight: bold;
      color: white;
      margin-bottom: 0.75rem;
      line-height: 1.2;
      padding: 0 0.5rem;
    }
    
    .impact-description {
      font-size: 0.875rem;
      color: rgba(255, 255, 255, 0.9);
      max-width: 56rem;
      margin: 0 auto;
      line-height: 1.6;
      padding: 0 0.5rem;
    }
    
    .stats-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      max-width: 80rem;
      margin: 0 auto;
    }
    
    .stat-card {
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(8px);
      border-radius: 0.5rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: all 0.3s ease;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      width: 100%;
    }
    
    .stat-card:hover {
      transform: scale(1.05);
      background-color: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.3);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    }
    
    .stat-content {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      padding: 1rem;
      width: 100%;
    }
    
    .stat-value {
      font-size: 1.875rem;
      font-weight: bold;
      color: #4ade80;
      flex-shrink: 0;
      width: 100px;
      text-align: left;
      line-height: 1;
    }
    
    .stat-label {
      font-size: 0.875rem;
      color: rgba(255, 255, 255, 0.9);
      line-height: 1.4;
      text-align: left;
      flex: 1;
    }
    
    @media (min-width: 640px) {
      .impact-section {
        padding: 3rem 0;
      }
      
      .impact-container {
        padding: 0 1.5rem;
      }
      
      .impact-header {
        margin-bottom: 2.5rem;
      }
      
      .impact-title {
        font-size: 1.875rem;
        margin-bottom: 1rem;
      }
      
      .impact-description {
        font-size: 1rem;
      }
      
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .stat-card {
        border-radius: 0.75rem;
      }
      
      .stat-content {
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;
        padding: 1.25rem;
        min-height: 160px;
      }
      
      .stat-value {
        font-size: 2.25rem;
        width: auto;
        text-align: center;
        margin-bottom: 0;
      }
      
      .stat-label {
        text-align: center;
        flex: none;
      }
    }
    
    @media (min-width: 768px) {
      .impact-title {
        font-size: 2.25rem;
      }
      
      .impact-description {
        font-size: 1.125rem;
      }
      
      .stat-value {
        font-size: 2.25rem;
      }
      
      .stat-content {
        padding: 1.5rem;
      }
    }
    
    @media (min-width: 1024px) {
      .impact-section {
        padding: 4rem 0;
      }
      
      .impact-container {
        padding: 0 2rem;
      }
      
      .impact-header {
        margin-bottom: 3.5rem;
      }
      
      .impact-title {
        font-size: 3rem;
        margin-bottom: 1.5rem;
      }
      
      .impact-description {
        font-size: 1.25rem;
      }
      
      .stats-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 1.25rem;
      }
      
      .stat-value {
        font-size: 3rem;
      }
      
      .stat-label {
        font-size: 1rem;
      }
      
      .stat-content {
        padding: 1.75rem;
      }
    }
    
    @media (min-width: 1280px) {
      .impact-section {
        padding: 5rem 0;
      }
      
      .impact-title {
        font-size: 3.75rem;
      }
      
      .stats-grid {
        grid-template-columns: repeat(4, 1fr);
      }
      
      .stat-value {
        font-size: 3.75rem;
      }
    }
  `

  // Intersection Observer to detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.2, // Trigger when 20% of section is visible
        rootMargin: '0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  // New infographics/numbers section based on user content
  const stats = [
    { label: "Women equipped with financial literacy, entrepreneurship, and business skills", value: "10,000+" },
    { label: "Self-help Groups established", value: "500" },
    { label: "Youth trained in TVET, life skills, and equipped with a start-up kit", value: "700+" },
    { label: "Community-based ECDs built and supported", value: "3+" },
    { label: "Home-based ECDs established and supported", value: "37+" },
    {
      label: "Awareness-raising campaigns on Child Protection, Positive Parenting, SRHR, HIV Prevention, and GBV",
      value: "50+",
    },
    { label: "Trees planted, restoring forests and fighting soil erosion", value: "25,000+" },
    { label: "Energy-Saving Stoves distributed", value: "1,200" },
    { label: "Water harvesting tanks provided for relocated households", value: "100" },
    { label: "Houses built for child and woman-headed households", value: "300+" },
    { label: "Studies to assess child protection and GBV issues", value: "2" },
    { label: "Years of impact", value: "29" },
  ]

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <section ref={sectionRef} className="impact-section">
        <div className="impact-container">
          <div className="impact-header">
            {/* "In the green" badge */}
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              backgroundColor: '#10b981',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: '500',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                width: '0.5rem',
                height: '0.5rem',
                backgroundColor: 'white',
                borderRadius: '9999px'
              }}></div>
              Quick Stats
            </div>
            <h2 className="impact-title">Numbers (infographics)</h2>
            <p className="impact-description">
              Bamporeze Association is a women-led Rwandan nonprofit organization established in 1996, which is committed to supporting vulnerable children, youth, women, and families through transformative approaches to alleviating poverty and building resiliency through a variety of programs ranging from education, health, child protection, environmental protection, and socio-economic empowerment.
            </p>
          </div>

          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <StatCard key={idx} stat={stat} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
