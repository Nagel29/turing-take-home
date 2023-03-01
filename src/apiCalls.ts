export const fetchArticles = async () => {
  const response = await fetch('https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=LpvK6AwEAukVOOj075ONuWYU8BA2DYFw', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
})

return response.json()
}