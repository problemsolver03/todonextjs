import { createClient } from "@supabase/supabase-js";
import jwt from "jsonwebtoken";

export const validateSesssion = async (token) => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  try {
    // decoding the token to check if the user exsits
    var decoded = jwt.verify(token, process.env.JWTKEY);
    const { data } = await supabase
      .from("users")
      .select(`id, name,email `)
      .eq("email", decoded.email);

    if (data.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};
