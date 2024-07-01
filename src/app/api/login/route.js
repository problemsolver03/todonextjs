import { createClient } from "@supabase/supabase-js";
import jwt from "jsonwebtoken";

export async function POST(request) {
  const requestBody = await request.json();
  console.log(requestBody);

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const { data, error } = await supabase
    .from("users")
    .select(`id, name,email,password `)
    .eq("email", requestBody.email)
    .eq("password", requestBody.password);

  if (data.length < 1 || error) {
    return Response.json({
      success: false,
      message: "Invalid login credentials.",
    });
  } else if (data.length > 0) {
    let token = jwt.sign({ email: data[0].email }, process.env.JWTKEY);

    return Response.json({
      success: true,
      data: {
        name: data[0].name,
        email: data[0].email,
        id: data[0].id,
        token: token,
      },
    });
  } else {
    return Response.json({
      success: false,
      message: "Sorry there was an error while processing your request.",
    });
  }
}
