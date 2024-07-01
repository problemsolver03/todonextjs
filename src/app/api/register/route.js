import { createClient } from "@supabase/supabase-js";
import jwt from "jsonwebtoken";
export async function POST(request) {
  const requestBody = await request.json();

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  let response = await supabase
    .from("users")
    .insert({
      ...requestBody,
    })
    .select();

  if (response.status === 201) {
    let token = jwt.sign({ email: requestBody.email }, process.env.JWTKEY);

    return Response.json({
      success: true,
      data: {
        name: response.data[0].name,
        email: response.data[0].email,
        id: response.data[0].id,
        token: token,
      },
    });
  } else if (response.status === 409) {
    return Response.json({
      success: false,
      message: "Email is already registered",
    });
  } else {
    return Response.json({
      success: false,
      message: "Sorry there was an error while processing your request.",
    });
  }
}
