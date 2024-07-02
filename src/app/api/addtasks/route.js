import { createClient } from "@supabase/supabase-js";
import { validateSesssion } from "@/common/authenticate";
import { headers } from "next/headers";
export async function POST(request) {
  const requestBody = await request.json();
  const headersList = headers();
  const token = headersList.get("Authorization").replace("Bearer ", "");

  validateSesssion(token)
    .then(async (res) => {
      if (res) {
        const supabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        );

        let response = await supabase.from("tasks").insert({
          ...requestBody,
        });

        if (response.status === 201) {
          return Response.json({ success: true });
        } else {
          return Response.json({
            success: false,
            message: "Sorry there was an error while processing your request.",
          });
        }
      }
    })
    .catch((err) => {
      return Response.json({
        success: false,
        message: "You're session has expired please login again.",
      });
    });

  return Response.json({ success: true });
}
