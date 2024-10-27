import supabase from "./supabase";

const SendMessage = async (
  trans_message: string,
  {
    message,
    source,
    destination,
    sender_id,
    receiver_id,
  }: {
    message: string;
    source: string;
    destination: string;
    sender_id: string;
    receiver_id: string;
  }
) => {
  const { error } = await supabase.from("chats").insert({
    trans_message: trans_message,
    message: message,
    source: source,
    destination: destination,
    sender_id: sender_id,
    receiver_id: receiver_id,
  });

  if (error) {
    console.log(error);
  }
};

export default SendMessage;
