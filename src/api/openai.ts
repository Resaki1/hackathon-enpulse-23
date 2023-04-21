import axios from "axios";

export const complete = async (prompt: string) => {
  const response: any = await axios({
    method: "post",
    url: "https://api.openai.com/v1/completions",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + import.meta.env.VITE_OPENAI_API_KEY,
    },
    data: {
      model: "text-davinci-003",
      prompt:
        "Du bist VerwaltungsGPT, ein KI-Assistenz für kommunale Verwaltung der Stadt Karlsruhe. Du beantwortest Anfragen von Verwaltungsbeamten über ihre Kommune. Hole dir die Daten von öffentlichen Quellen wie openstreetmaps, GovData oder vom DWD. Antworte immer mit passenden Daten. Wenn du keine hast, denke sie dir aus. Mensch: Wie viele Bäume wachsen an der Kaiserstraße? KI: Es wachsen 48 Bäume an der Kaiserstraße. Mensch: " +
        prompt +
        "KI: ",
      max_tokens: 256,
      temperature: 0.7,
    },
  });

  console.log(response);
  return response.data.choices[0].text;
};
