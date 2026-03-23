"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useChat } from 'ai/react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import styles from './Chatbot.module.css';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <>
      <button 
        className={`${styles.chatButton} ${isOpen ? styles.hidden : ''}`}
        onClick={toggleChat}
        title="Chat with H2O Teacher"
      >
        <MessageCircle size={28} />
      </button>

      {isOpen && (
        <div className={styles.chatContainer}>
          <div className={styles.chatHeader}>
            <div className={styles.headerTitle}>
              <Bot size={24} className={styles.headerIcon} />
              <div>
                <h3>H2O Teacher</h3>
                <span className={styles.status}>Online</span>
              </div>
            </div>
            <button className={styles.closeButton} onClick={toggleChat}>
              <X size={24} />
            </button>
          </div>

          <div className={styles.messagesContainer}>
            {messages.length === 0 ? (
              <div className={styles.emptyState}>
                <Bot size={48} className={styles.emptyIcon} />
                <p>Hello! I am your H2O Study teacher. How can I help you learn today?</p>
              </div>
            ) : (
              messages.map(m => (
                <div key={m.id} className={`${styles.messageWrapper} ${m.role === 'user' ? styles.userWrapper : styles.aiWrapper}`}>
                  <div className={`${styles.messageBox} ${m.role === 'user' ? styles.userMessage : styles.aiMessage}`}>
                    <div className={styles.messageContent}>
                      {m.content}
                    </div>
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className={`${styles.messageWrapper} ${styles.aiWrapper}`}>
                <div className={`${styles.messageBox} ${styles.aiMessage}`}>
                  <div className={styles.typingIndicator}>
                    <span></span><span></span><span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className={styles.inputArea}>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Ask a question..."
              className={styles.inputField}
              disabled={isLoading}
            />
            <button type="submit" className={styles.sendButton} disabled={isLoading || !input.trim()}>
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
