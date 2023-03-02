import { CleanedArticle } from "../interfaces"
import { useState } from "react"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import Modal from "react-bootstrap/Modal"
import { useParams, useNavigate } from "react-router-dom"

export const Details = ({
  detailArticle,
}: {
  detailArticle: CleanedArticle | undefined
}) => {
  const params = useParams()
  const navigate = useNavigate()

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <Image src={detailArticle?.images[0]} />
      <Modal
        show={true}
        backdrop="static"
        keyboard={false}
        style={{ marginTop: "15%" }}
      >
        <Modal.Header style={{ display: "flex", flexDirection: "column" }}>
          <Modal.Title>{detailArticle?.title}</Modal.Title>
          <Modal.Body>{detailArticle?.byline}</Modal.Body>
        </Modal.Header>
        <Modal.Body>{detailArticle?.abstract}</Modal.Body>
        <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="secondary"
            onClick={() => navigate(`/${params.section}`)}
          >
            Back to {params.section}
          </Button>
          <Button variant="primary" href={detailArticle?.url} target="_blank">
            See full article
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
