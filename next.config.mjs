/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'files.yande.re',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'azurlane.netojuu.com',
                port: '',
                pathname: '/**'
            }
        ]
    }
};

export default nextConfig;
