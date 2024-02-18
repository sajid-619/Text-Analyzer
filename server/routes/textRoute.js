const express = require('express');
const { analyzeWordCount, analyzeParagraphCount, analyzeCharacterCount, analyzeSentenceCount, analyzeLongestWordsInParagraphs } = require('../controllers/textController');

const router = express.Router();

// Route to analyze text for word count
router.post('/wordCount', analyzeWordCount); 

// Route to analyze text for paragraph count
router.post('/paragraphCount', analyzeParagraphCount);

// Route to analyze text for character count
router.post('/characterCount', analyzeCharacterCount); 

// Route to analyze text for sentence count
router.post('/sentenceCount', analyzeSentenceCount); 

// Route to analyze text for longest words in paragraphs
router.post('/longestWordsInParagraphs', analyzeLongestWordsInParagraphs); 

module.exports = router;
