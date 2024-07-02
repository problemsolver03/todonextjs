import { createClient } from "@supabase/supabase-js";
import { validateSesssion } from "@/common/authenticate";
import { headers } from "next/headers";
export async function POST(request) {
  const requestBody = await request.json();
  const headersList = headers();
  const token = headersList.get("Authorization").replace("Bearer ", "");
  const validSession = validateSesssion(token);

  if (validSession) {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );
    const { title, description, status, taskid } = requestBody;
    const { error } = await supabase
      .from("tasks")
      .update({ title, description, status })
      .eq("id", taskid);

    console.log(error);
    return Response.json({ success: true });
  } else {
    return Response.json({ success: false, message: "Session has expired" });
  }
}
