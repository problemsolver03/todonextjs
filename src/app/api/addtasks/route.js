import { createClient } from "@supabase/supabase-js";
import { validateSesssion } from "@/common/authenticate";
import { headers } from "next/headers";
export async function POST(request) {
  // parsing the request body to json
  const requestBody = await request.json();
  const headersList = headers();
  const token = headersList.get("Authorization").replace("Bearer ", "");

  //checking if the token is valid
  validateSesssion(token)
    .then(async (res) => {
      if (res) {
        const supabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        );

        // inserting new tasks to database using the userid column as the foreign key
        let response = await supabase.from("tasks").insert({
          ...requestBody,
        });

        if (response.status === 201) {
          return Response.json({ success: true });
        } else {
          //return an error message if the insert fails
          return Response.json({
            success: false,
            message: "Sorry there was an error while processing your request.",
          });
        }
      }
    })
    .catch((err) => {
      //return an error message if the insert fails
      return Response.json({
        success: false,
        message: "You're session has expired please login again.",
      });
    });

  return Response.json({ success: true });
}
