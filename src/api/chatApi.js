const API_URL = process.env.REACT_APP_API_URL;

export const sendMessageToChatBot = async (message, updatePartialMessage) => {
  try {
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

    if (res.headers.get("content-type")?.includes("application/json")) {
      const data = await res.json();
      return data.response;
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder("utf-8");

    let done = false;
    let fullResponse = "";

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;

      const chunk = decoder.decode(value, { stream: true });
      fullResponse += chunk;

      if (updatePartialMessage) {
        updatePartialMessage(fullResponse);
      }
    }

    return fullResponse;
  } catch (error) {
    console.error("Error in sendMessageToChatBot:", error.message);
    throw error;
  }
};
