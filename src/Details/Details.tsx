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
      <Modal show={true} backdrop="static" keyboard={false} style={{marginTop: '15%'}}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => navigate(`/${params.section}`)}>Back to {params.section}</Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
