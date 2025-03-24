import { FC } from 'react'

interface LogoProps {
  variant: 'dark' | 'light'
}

export const Logo: FC<LogoProps> = ({ variant }) => {
  switch (variant) {
    case 'dark':
      return (
        <div className="h-12 w-fit flex items-center justify-center">
          <img
            className="h-12 w-fit object-contain"
            src={`https://res.cloudinary.com/dfsykt9gi/image/upload/v1742728630/logo222-jpg.jpg`}
            alt="logo"
            width={1000}
            height={1000}
          />
        </div>
      )
    case 'light':
      return (
        <div className="h-12 w-fit flex items-center justify-center">
          <img
            className="h-12 w-fit object-contain"
            src={`https://res.cloudinary.com/dfsykt9gi/image/upload/v1742728630/logo222-jpg.jpg`}
            alt="logo"
            width={1000}
            height={1000}
          />
        </div>
      )
  }
}
