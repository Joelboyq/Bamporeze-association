import { FC } from 'react'

interface LogoProps {
  variant: 'dark' | 'light';
  className?: string;
}

export const Logo: FC<LogoProps> = ({ variant, className = '' }) => {
  switch (variant) {
    case 'dark':
      return (
        <div className={`min-w-[180px] flex items-center justify-center ${className}`}>
          <img
            className="w-full h-full object-contain"
            src={`https://res.cloudinary.com/dz6smjaku/image/upload/v1754790056/Screenshot_2025-08-10_at_03.40.34_mij9za.png`}
            alt="logo"
            width={1000}
            height={1000}
          />
        </div>
      )
    case 'light':
      return (
        <div className={`min-w-[180px] flex items-center justify-center ${className}`}>
          <img
            className="w-full h-full object-contain"
            src={`https://res.cloudinary.com/dz6smjaku/image/upload/v1754790056/Screenshot_2025-08-10_at_03.40.34_mij9za.png`}
            alt="logo"
            width={1000}
            height={1000}
          />
        </div>
      )
  }
}
