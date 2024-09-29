const PORT = 1993;

let bool = true;

const server = (req: Request): Response => {
  const body = `Your user-agent is:\n\n${
    req.headers.get('user-agent') ?? 'Unknown'
  }\n\nand the bool is: ${bool}`;

  bool = !bool;

  return new Response(body, { status: 200 });
};

/** Simple HTTP server */
Deno.serve({
  port: PORT,
  onListen: () =>
    console.log(`HTTP server running. Access it at: http://localhost:${PORT}/`),
}, server);

