import { createClient } from "@supabase/supabase-js";
import jwt from "jsonwebtoken";

export async function POST(request) {
  // parsing the request body to json
  const requestBody = await request.json();

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  // validating the user using email and password recived in the request.
  const { data, error } = await supabase
    .from("users")
    .select(`id, name,email,password `)
    .eq("email", requestBody.email)
    .eq("password", requestBody.password);

  // if no matching record is found on the database reutring invalid credentials erro
  if (data.length < 1 || error) {
    return Response.json({
      success: false,
      message: "Invalid login credentials.",
    });
  }
  // if matching record is found creating a jwt token and returning a valid response
  else if (data.length > 0) {
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
  }
  // returning an fallback error message if the quering fails
  else {
    return Response.json({
      success: false,
      message: "Sorry there was an error while processing your request.",
    });
  }
}
