import Container from "./components/Container";
import Logo from "./components/Logo";

function App() {
  return (
    <main>
      <section
        style={{
          background: "#050505",
          padding: "48px 0",
        }}
      >
        <Container>
          <Logo variant="light" />
        </Container>
      </section>

      <section
        style={{
          background: "#f8f8f6",
          padding: "48px 0",
        }}
      >
        <Container>
          <Logo variant="dark" />
        </Container>
      </section>
    </main>
  );
}

export default App;