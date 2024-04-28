async function analyzeText() {
    const text = document.getElementById('textInput').value;
    
    try {
      const response = await fetch('/api/analyzeText', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
      });
  
      if (!response.ok) {
        throw new Error('Failed to analyze text');
      }
  
      const data = await response.json();
      displayAnalysis(data);
    } catch (error) {
      console.error('Error analyzing text:', error.message);
      displayError('An error occurred while analyzing the text. Please try again.');
    }
  }
  
  function displayAnalysis(data) {
    const analysisResult = document.getElementById('analysisResult');
    analysisResult.innerHTML = `
      <p>Word Count: ${data.wordCount}</p>
      <p>Character Count: ${data.characterCount}</p>
      <p>Sentence Count: ${data.sentenceCount}</p>
      <p>Paragraph Count: ${data.paragraphCount}</p>
      <p>Longest Words:</p>
      <ul>
        ${Object.entries(data.longestWords).map(([paragraph, words]) => `<li>Paragraph ${paragraph}: ${words.join(', ')}</li>`).join('')}
      </ul>
    `;
  }
  
  function displayError(message) {
    const analysisResult = document.getElementById('analysisResult');
    analysisResult.innerHTML = `<p class="error">${message}</p>`;
  }
  