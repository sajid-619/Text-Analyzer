const mongoose = require('mongoose');

const textAnalysisSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  wordCount: {
    type: Number,
    default: 0
  },
  characterCount: {
    type: Number,
    default: 0
  },
  sentenceCount: {
    type: Number,
    default: 0
  },
  paragraphCount: {
    type: Number,
    default: 0
  },
  longestWords: {
    type: Object,
    default: {}
  }
});

const TextAnalysis = mongoose.model('TextAnalysis', textAnalysisSchema);

module.exports = TextAnalysis;
