import { getGallery } from "../../../utils/api";
import GalleryClient from "../../../components/gallery/GalleryClient";

export default async function GalleryPage() {
    const gallery = await getGallery();
    
    return <GalleryClient galleryItems={gallery} />;
}