"use client"
import type { Locale } from "../../../i18n.config"

interface ImpactStatsProps {
  locale: Locale
}

export default function ImpactStats({ locale }: ImpactStatsProps) {
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
      <section className="impact-section">
        <div className="impact-container">
          <div className="impact-header">
            <h2 className="impact-title">Our Impact in Numbers</h2>
            <p className="impact-description">
              Bamporeze Association is a women-led Rwandan nonprofit organization established in 1996, committed to
              supporting vulnerable children, youth, women, and families through transformative approaches to
              alleviating poverty and building resiliency.
            </p>
          </div>

          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-content">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
