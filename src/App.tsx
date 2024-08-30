// src/App.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <h2>BREATHE LIFE INTO YOUR SYSTEMS WITH Cutting-EDGE AI SOLUTIONS</h2>
        <p>[Segment 2: Types of AI]

[Visual: Pyramid or chart showing Narrow AI, General AI, Super AI]

You: "AI can be categorized into three main types: Narrow AI, General AI, and Super AI.

Narrow AI: This is what we have today. It's AI that's designed to do one specific task—like recognizing faces, playing chess, or recommending movies on Netflix. It's very good at that one thing, but it can't do anything else.

General AI: This is the dream of AI researchers—an AI that can think, learn, and understand just like a human, across a wide range of tasks. We're not there yet, but it's the ultimate goal.

Super AI: This is more of a sci-fi concept where AI surpasses human intelligence. It's the stuff of movies, and we're a long way from it—if it ever happens."

[Visual: Pyramid or chart showing Narrow AI, General AI, Super AI]

You: "AI can be categorized into three main types: Narrow AI, General AI, and Super AI.

Narrow AI: This is what we have today. It's AI that's designed to do one specific task—like recognizing faces, playing chess, or recommending movies on Netflix. It's very good at that one thing, but it can't do anything else.

General AI: This is the dream of AI researchers—an AI that can think, learn, and understand just like a human, across a wide range of tasks. We're not there yet, but it's the ultimate goal.

Super AI: This is more of a sci-fi concept where AI surpasses human intelligence. It's the stuff of movies, and we're a long way from it—if it ever happens."

</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
