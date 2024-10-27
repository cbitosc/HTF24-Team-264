import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://jydjenarkrbyeptvlcwg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5ZGplbmFya3JieWVwdHZsY3dnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk5NjM2OTYsImV4cCI6MjA0NTUzOTY5Nn0.ReX-52nx4NZknwnxlICWka7dirZxKDhYLKF11JCRic8"
);

export default supabase;
