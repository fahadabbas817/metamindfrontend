import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Send, Mic, Paperclip, Sparkles } from 'lucide-react';
import { GeminiContext } from './Context/GeminiContext';

const BottomSearch = () => {
  const [input, setInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const { handleInputSubmit, loading } = useContext(GeminiContext);
  const location = useLocation();

  // Determine the current page type based on the URL
  const getPageType = () => {
    const path = location.pathname;
    if (path.includes('text')) return 'text';
    if (path.includes('image')) return 'images';
    if (path.includes('meme')) return 'meme';
    if (path.includes('video')) return 'video';
    return 'text'; // default
  };

  const getPlaceholder = () => {
    const pageType = getPageType();
    const placeholders = {
      text: 'Ask me anything or describe what you want to write...',
      images: 'Describe the image you want to generate...',
      meme: 'Describe the meme you want to create...',
      video: 'Describe the video content you want to generate...'
    };
    return placeholders[pageType] || placeholders.text;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !loading) {
      handleInputSubmit(input, getPageType());
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Voice recording functionality can be implemented here
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 z-40">
      <div className="container mx-auto px-4 py-4">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="relative flex items-center bg-white rounded-2xl shadow-lg border border-gray-200 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-500/20 transition-all duration-200">
            {/* Attach button */}
            <button
              type="button"
              className="p-3 text-gray-400 hover:text-gray-600 transition-colors"
              title="Attach file"
            >
              <Paperclip className="w-5 h-5" />
            </button>

            {/* Input field */}
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={getPlaceholder()}
              className="flex-1 px-4 py-3 bg-transparent border-none outline-none resize-none max-h-32 min-h-[48px] text-gray-800 placeholder-gray-500"
              rows="1"
              disabled={loading}
              style={{
                height: 'auto',
                minHeight: '48px',
                maxHeight: '128px'
              }}
              onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = Math.min(e.target.scrollHeight, 128) + 'px';
              }}
            />

            {/* Voice recording button */}
            <button
              type="button"
              onClick={toggleRecording}
              className={`p-3 transition-colors ${
                isRecording 
                  ? 'text-red-500 hover:text-red-600' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
              title={isRecording ? 'Stop recording' : 'Start voice recording'}
            >
              <Mic className={`w-5 h-5 ${isRecording ? 'animate-pulse' : ''}`} />
            </button>

            {/* Submit button */}
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className={`m-2 p-3 rounded-xl transition-all duration-200 ${
                input.trim() && !loading
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
              title="Send message"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* AI indicator */}
          <div className="flex items-center justify-center mt-3 text-sm text-gray-500">
            <Sparkles className="w-4 h-4 mr-1" />
            <span>Powered by MetaMindAI</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BottomSearch;