import { FC } from "react";
import WebSection from "../layouts/websection";
import SectionTitle from "./sectionTitle";

export interface IPageHeadProps {
    title: string;
    backgroundImage?: string;
    subtitle: string,
    suptitle: string,
    padBottom?: boolean,
    overlayOpacity?: number // Allow customization of overlay darkness
}

const PageHead: FC<IPageHeadProps> = ({ 
    title, 
    backgroundImage, 
    subtitle, 
    suptitle, 
    padBottom,
    overlayOpacity = 0.5 // Default 50% opacity black overlay
}) => {
    return (
        <div className="relative">
            {/* Background image container */}
            <WebSection 
                about="About us" 
                animate={false} 
                style={{
                    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
                    backgroundSize: "cover",
                    backgroundPosition: 'center',
                    backgroundRepeat: "no-repeat",
                }}
                className={`py-10 flex items-center justify-center ${padBottom && 'pb-24'}`}
            >
                {/* Semi-transparent overlay */}
                {backgroundImage && (
                    <div 
                        className="absolute inset-0 bg-black" 
                        style={{ opacity: overlayOpacity }}
                    ></div>
                )}
                
                {/* Content with higher z-index */}
                <div className="relative z-10">
                    <SectionTitle 
                        direction="vertical" 
                        title={title} 
                        border={false} 
                        suptitle={suptitle} 
                        subtitle={subtitle} 
                        textColor={backgroundImage ? "text-white" : undefined}
                    />
                </div>
            </WebSection>
        </div>
    );
};

export default PageHead;