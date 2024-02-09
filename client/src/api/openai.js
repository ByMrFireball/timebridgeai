import axios from 'axios';

// Configura la clave de API
const apiKey = "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";
const apiUrl = 'https://api.openai.com/v1/completions';

export async function sendMsgToOpenAI(message) {
  try {
    // Configura la solicitud a la API de OpenAI
    const requestData = {
      model: 'text-davinci-003',
      prompt: message,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    };

    // Realiza la solicitud a la API de OpenAI usando Axios
    const response = await axios.post(apiUrl, requestData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    // Devuelve el texto generado
    return response.data.choices[0].text;
  } catch (error) {
    console.error('Error al realizar la solicitud a la API de OpenAI:', error);
    throw new Error('Error al procesar la solicitud a OpenAI');
  }
}
