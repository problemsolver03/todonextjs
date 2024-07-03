import { createClient } from "@supabase/supabase-js";
import { validateSesssion } from "@/common/authenticate";
import { headers } from "next/headers";
export async function POST(request) {
  // parsing the request body to json
  const requestBody = await request.json();
  const headersList = headers();
  const token = headersList.get("Authorization").replace("Bearer ", "");
  const validSession = validateSesssion(token);
  // checking if the session is valid
  if (validSession) {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );
    const { title, description, status, taskid } = requestBody;
    // updating the task based on the task id provided in the request
    const { error } = await supabase
      .from("tasks")
      .update({ title, description, status })
      .eq("id", taskid);

    return Response.json({ success: true });
  } else {
    return Response.json({ success: false, message: "Session has expired" });
  }
}
