const request = require('supertest');
const fs = require('fs');
const path = require('path');
const app = require('../app');

// File path for sample text
const sampleTextPath = path.join(__dirname, '../sample.txt');
const sampleText = fs.readFileSync(sampleTextPath, 'utf8');

describe('Word Count API', () => {
  it('returns the correct word count for a given text', async () => {
    const response = await request(app)
      .post('/api/wordCount')
      .send({ text: sampleText });
    expect(response.status).toBe(200);
    // Update with the expected word count based on the content of sample.txt
    expect(response.body).toEqual({ count: 16 });
  });

  it('returns 400 if text is empty', async () => {
    const response = await request(app)
      .post('/api/wordCount')
      .send({ text: '' });
    expect(response.status).toBe(400);
  });
});

describe('Paragraph Count API', () => {
  it('returns the correct paragraph count for a given text', async () => {
    const response = await request(app)
      .post('/api/paragraphCount')
      .send({ text: sampleText });
    expect(response.status).toBe(200);
    // Update with the expected paragraph count based on the content of sample.txt
    expect(response.body).toEqual({ count: 1 });
  });

  it('returns 400 if text is empty', async () => {
    const response = await request(app)
      .post('/api/paragraphCount')
      .send({ text: '' });
    expect(response.status).toBe(400);
  });
});

describe('Character Count API', () => {
  it('returns the correct character count for a given text', async () => {
    const response = await request(app)
      .post('/api/characterCount')
      .send({ text: sampleText });
    expect(response.status).toBe(200);
    // Update with the expected character count based on the content of sample.txt
    expect(response.body).toEqual({ count: 60 });
  });

  it('returns 400 if text is empty', async () => {
    const response = await request(app)
      .post('/api/characterCount')
      .send({ text: '' });
    expect(response.status).toBe(400);
  });
});

describe('Longest Words in Paragraphs API', () => {
  it('returns the correct longest words for paragraphs', async () => {
    const response = await request(app)
      .post('/api/longestWordsInParagraphs')
      .send({ text: sampleText });
    expect(response.status).toBe(200);
    // Update with the expected longest words array based on the content of sample.txt
    expect(response.body).toEqual({
      longestWords: ['quick, brown'],
    });
  });

  it('returns empty array if text is empty', async () => {
    const response = await request(app)
      .post('/api/longestWordsInParagraphs')
      .send({ text: '' });
    expect(response.status).toBe(400);
  });
});
