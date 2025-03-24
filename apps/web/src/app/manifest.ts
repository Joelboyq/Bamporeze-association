import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'BAMPOREZE.',
        short_name: 'BAMPOREZE.',
        description: 'Mining company based in Rwanda',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#0B60B0',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}