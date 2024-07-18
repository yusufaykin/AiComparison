import axios from 'axios';

const API_KEY = '';

async function runGPT(prompt) {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          model: 'text-davinci-003',
          prompt: prompt,
          max_tokens: 50,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`,
          },
        }
      );
  
      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error('Error fetching GPT-3.5 data:', error);
      return 'Error fetching data';
    }
  }
  
  export default runGPT;