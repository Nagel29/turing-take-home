import Card from "react-bootstrap/Card"
import gif from "/news.gif"

export const Landing = () => {
  return (
    <>
      <Card style={{ marginTop: "10%", textAlign: "center" }}>
        <Card.Img
          variant="top"
          src="/news.gif"
          style={{ maxWidth: "20%", alignSelf: "center" }}
        />
        <Card.Body>
          <Card.Text className='h4' >
            Select from the sections above to start viewing the latest articles
            from The New York Times
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}
