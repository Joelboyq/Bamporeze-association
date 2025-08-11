import { FC } from 'react'

interface LogoProps {
  variant: 'dark' | 'light'
}

export const Logo: FC<LogoProps> = ({ variant }) => {
  switch (variant) {
    case 'dark':
      return (
        <div className="h-20 w-fit flex items-center justify-center">
          <img
            className="h-20 w-fit object-contain"
            src={`https://res.cloudinary.com/dz6smjaku/image/upload/v1754790056/Screenshot_2025-08-10_at_03.40.34_mij9za.png`}
            alt="logo"
            width={1000}
            height={1000}
          />
        </div>
      )
    case 'light':
      return (
        <div className="h-20 w-fit flex items-center justify-center">
          <img
            className="h-20 w-fit object-contain"
            src={`https://res.cloudinary.com/dz6smjaku/image/upload/v1754790056/Screenshot_2025-08-10_at_03.40.34_mij9za.png`}
            alt="logo"
            width={1000}
            height={1000}
          />
        </div>
      )
  }
}
