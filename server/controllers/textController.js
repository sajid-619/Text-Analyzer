const express = require('express');
const TextAnalysis = require('../models/textAnalysis');

// Function to analyze text for word count
const analyzeWordCount = async (req, res) => {
  const { text } = req.body;
  if (!text.trim()) {
    return res.status(400).json({ message: 'Text is empty' });
  }

  const wordCount = text.split(/\s+/).filter(word => word !== '').length;

  const textAnalysis = new TextAnalysis({
    text,
    wordCount,
  });

  try {
    await textAnalysis.save();
    res.status(200).json({ count: wordCount });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Function to analyze text for paragraph count
const analyzeParagraphCount = async (req, res) => {
  const { text } = req.body;
  if (!text.trim()) {
    return res.status(400).json({ message: 'Text is empty' });
  }

  const paragraphCount = text.split('\n').filter(paragraph => paragraph.trim() !== '').length;

  const textAnalysis = new TextAnalysis({
    text,
    paragraphCount,
  });

  try {
    await textAnalysis.save();
    res.status(200).json({ count: paragraphCount });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Function to analyze text for character count
const analyzeCharacterCount = async (req, res) => {
  const { text } = req.body;
  if (!text.trim()) {
    return res.status(400).json({ message: 'Text is empty' });
  }

  const characterCount = text.replace(/\s/g, '').length;

  const textAnalysis = new TextAnalysis({
    text,
    characterCount,
  });

  try {
    await textAnalysis.save();
    res.status(200).json({ count: characterCount });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Function to analyze text for sentence count
const analyzeSentenceCount = async (req, res) => {
  const { text } = req.body;
  if (!text.trim()) {
    return res.status(400).json({ message: 'Text is empty' });
  }

  const sentenceCount = text.split(/[.!?]+/).filter(sentence => sentence.trim() !== '').length;

  const textAnalysis = new TextAnalysis({
    text,
    sentenceCount,
  });

  try {
    await textAnalysis.save();
    res.status(200).json({ count: sentenceCount });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Function to analyze text for longest words in paragraphs
const analyzeLongestWordsInParagraphs = async (req, res) => {
  const { text } = req.body;
  if (!text.trim()) {
    return res.status(400).json({ message: 'Text is empty' });
  }

  const paragraphs = text.split('\n').filter(paragraph => paragraph.trim() !== '');
  const longestWords = paragraphs.map(paragraph => paragraph.split(/\s+/).reduce((acc, word) => {
    if (word.length > acc.length) return word;
    else if (word.length === acc.length && !acc.includes(word)) return acc + ', ' + word;
    else return acc;
  }, ''));

  const textAnalysis = new TextAnalysis({
    text,
    longestWords,
  });

  try {
    await textAnalysis.save();
    res.status(200).json({ longestWords });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { 
  analyzeWordCount,
  analyzeParagraphCount,
  analyzeCharacterCount,
  analyzeSentenceCount,
  analyzeLongestWordsInParagraphs
};
