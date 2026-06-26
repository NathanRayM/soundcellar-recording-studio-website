export default async (req) => {
  return new Response(
    JSON.stringify({
      message: "Netlify contact function is working",
    }),

    {
      status: 200,

      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
