export default function Landing({ title }: { title?: string | null }) {
  return (
    <html lang="en">
      <body
        style={{
          display: "grid",
          height: "100vh",
          padding: "50px 30px",
          placeContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <img
          src="https://elysiajs.com/assets/elysia.svg"
          alt="Elysia.js"
          width={300}
          style={{ marginBottom: "30px" }}
        />
        {title && <h1 style={{ fontSize: "3rem" }}>{title}</h1>}
      </body>
    </html>
  );
}
