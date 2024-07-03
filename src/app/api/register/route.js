import { createClient } from "@supabase/supabase-js";
import jwt from "jsonwebtoken";
export async function POST(request) {
  // parsing the request body to json
  const requestBody = await request.json();

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  // inserting a new user to database the email column in database is set to unique, to prevent duplicate account creation
  let response = await supabase
    .from("users")
    .insert({
      ...requestBody,
    })
    .select();

  // when the insertion is successfully return a signed token and user details
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
  }
  // based on the status code returned from database which indicates a duplicate entry retruning an appropriate response
  else if (response.status === 409) {
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
