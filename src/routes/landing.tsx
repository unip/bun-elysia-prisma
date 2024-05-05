export default function Landing({ title }: { title?: string | null }) {
  return (
    <html lang="en" style={{ padding: 0, margin: 0 }}>
      <head>
        <title>{title ?? "Welcome to Elysia"}</title>
      </head>
      <body
        style={{
          margin: 0,
          display: "grid",
          height: "100vh",
          padding: "0 30px",
          placeContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <img
          src="https://elysiajs.com/assets/elysia.svg"
          alt="Elysia.js"
          width={300}
          style={{ margin: "0 auto 30px auto" }}
        />
        {title && <h1 style={{ fontSize: "3rem" }}>{title}</h1>}
      </body>
    </html>
  );
}
