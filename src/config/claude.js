import axios from 'axios';

const API_KEY = '';

async function runClaude(prompt) {
    try {
      const response = await axios.post(
        'https://api.anthropic.com/v1/complete',
        {
          model: 'claude-v1',
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
  
      return response.data.completion.trim();
    } catch (error) {
      console.error('Error fetching Claude data:', error);
      return 'Error fetching data';
    }
  }
  
  export default runClaude;