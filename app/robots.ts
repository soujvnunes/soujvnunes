export default function RootRobots() {
  return {
    rules: [{ userAgent: '*' }],
    sitemap: `${process.env.BASE_URL}/sitemap.xml`,
  }
}
