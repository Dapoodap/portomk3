import { Container } from "react-bootstrap"

function Section1() {
  return (
    <Container
        fluid
        style={{
          backgroundColor: "#87cefa",
          height: "20rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h1>Where did I Learn and Other</h1>
        </div>
      </Container>
  )
}

export default Section1