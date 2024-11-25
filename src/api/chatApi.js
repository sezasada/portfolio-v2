const API_URL = process.env.REACT_APP_API_URL;

export const sendMessageToChatBot = async (message) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  if (!res.ok) {
    throw new Error(`Error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  return data.response;
};
