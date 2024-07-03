import { createClient } from "@supabase/supabase-js";
import { validateSesssion } from "@/common/authenticate";
import { headers } from "next/headers";

export async function GET(request) {
  // parsing the request to retrieve the query params
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const status = searchParams.get("status");

  const headersList = headers();
  const token = headersList.get("Authorization").replace("Bearer ", "");

  //checking if the token is valid
  let validSession = await validateSesssion(token);

  if (validSession) {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    //retriving all tasks
    if (status === null || status === "") {
      const { data, error } = await supabase
        .from("tasks")
        .select(`id,title,description,status,created_at`)
        .eq("userid", id);

      if (error === null) {
        return Response.json({ success: true, tasks: data });
      } else {
        return Response.json({ success: false, message: "no tasks available" });
      }
    }
    //retriving tasks based on specific status
    else {
      const { data, error } = await supabase
        .from("tasks")
        .select(`id,title,description,status,created_at`)
        .eq("userid", id)
        .eq("status", status);

      if (error === null) {
        return Response.json({ success: true, tasks: data });
      } else {
        return Response.json({ success: false, message: "no tasks available" });
      }
    }
  } else {
    //returning a error if session is invalid
    return Response.json({
      success: false,
      message: "You're session has expired please login again.",
    });
  }
}
