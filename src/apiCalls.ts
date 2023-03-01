export const fetchArticles = async (section: string) => {
  const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=LpvK6AwEAukVOOj075ONuWYU8BA2DYFw`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
})

return response.json()
}