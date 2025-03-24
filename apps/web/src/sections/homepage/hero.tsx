import HeroSlider from "../../components/units/heroSlider";
import { WithLocaleProp } from "../../components/units/navbar";
import { getSlides } from "../../utils/api";


export default async function Hero(props: WithLocaleProp) {
    const slides = await getSlides()
    return <HeroSlider slides={slides} locale={props.locale} />
}