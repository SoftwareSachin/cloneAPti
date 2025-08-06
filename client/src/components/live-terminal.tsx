import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TerminalLine {
  type: 'command' | 'output' | 'system';
  content: string;
  id: string;
}

export function LiveTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  // Initial welcome animation
  useEffect(() => {
    const timer = setTimeout(() => {
      simulateCommand('aptivon login', 'Welcome, developer! Type `help` to see our commands.');
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const simulateCommand = (command: string, response: string) => {
    setIsTyping(true);
    
    // Add command line
    const commandId = Date.now().toString();
    setLines(prev => [...prev, {
      type: 'command',
      content: command,
      id: commandId
    }]);

    // Add response after delay
    setTimeout(() => {
      setLines(prev => [...prev, {
        type: 'system',
        content: response,
        id: commandId + '_response'
      }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleCommand = (command: string) => {
    if (!command.trim()) return;

    const responses: Record<string, string> = {
      'help': `Available commands:
• portfolio - View our project showcase
• services - Explore our offerings  
• contact - Get in touch with our team
• about - Learn about Aptivon Solutions
• clear - Clear terminal output`,
      'portfolio': 'Launching portfolio showcase... 🚀',
      'services': 'Loading our comprehensive services...',
      'contact': 'Opening contact channels... 📧',
      'about': 'Aptivon Solutions - Transforming businesses through innovative IT solutions.',
      'clear': '',
      'whoami': 'developer@aptivon.com',
      'pwd': '/home/aptivon/projects',
      'ls': 'cloud-infrastructure  ai-solutions  web-development  consulting',
      'date': new Date().toLocaleString(),
    };

    // Add command to terminal
    setLines(prev => [...prev, {
      type: 'command',
      content: command,
      id: Date.now().toString()
    }]);

    // Handle clear command
    if (command === 'clear') {
      setTimeout(() => setLines([]), 100);
      return;
    }

    // Add response
    setTimeout(() => {
      const response = responses[command] || `Command '${command}' not found. Type 'help' for available commands.`;
      setLines(prev => [...prev, {
        type: 'output',
        content: response,
        id: Date.now().toString() + '_out'
      }]);
    }, 300);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput);
      setCurrentInput('');
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <motion.div 
      className="w-full h-[60vh] rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm bg-gray-900/90 border border-gray-700/50"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
      onClick={focusInput}
      data-testid="live-terminal"
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800/80 border-b border-gray-700/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" data-testid="terminal-close"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500" data-testid="terminal-minimize"></div>
            <div className="w-3 h-3 rounded-full bg-green-500" data-testid="terminal-maximize"></div>
          </div>
          <span className="text-gray-300 text-sm font-medium ml-3">Aptivon Terminal</span>
        </div>
        <div className="text-gray-400 text-xs">
          {new Date().toLocaleTimeString()}
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        ref={scrollRef}
        className="h-full p-4 overflow-y-auto font-mono text-sm bg-transparent custom-scrollbar"
        style={{ maxHeight: 'calc(60vh - 60px)' }}
      >
        <AnimatePresence>
          {lines.map((line) => (
            <motion.div
              key={line.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-2"
              data-testid={`terminal-line-${line.type}`}
            >
              {line.type === 'command' && (
                <div className="flex items-center gap-2">
                  <span className="text-teal-400">$</span>
                  <motion.span 
                    className="text-white"
                    initial={{ width: 0 }}
                    animate={{ width: 'auto' }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {line.content}
                  </motion.span>
                  <motion.span
                    className="w-2 h-5 bg-teal-400 inline-block"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </div>
              )}
              {line.type === 'output' && (
                <div className="text-gray-300 ml-4 whitespace-pre-line">
                  {line.content}
                </div>
              )}
              {line.type === 'system' && (
                <div className="text-green-400 ml-4 whitespace-pre-line">
                  {line.content}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Input Line */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-teal-400">$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 bg-transparent text-white outline-none font-mono placeholder-gray-500"
            placeholder="Type a command..."
            disabled={isTyping}
            data-testid="terminal-input"
          />
          <motion.span
            className="w-2 h-5 bg-teal-400"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
      </div>
    </motion.div>
  );
}