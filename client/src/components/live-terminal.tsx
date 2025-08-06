import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Play, Zap, Coffee, Sparkles, Cpu, Database, Globe, ArrowRight, CheckCircle } from 'lucide-react';

interface TerminalLine {
  type: 'command' | 'output' | 'system' | 'success' | 'warning' | 'error';
  content: string;
  id: string;
  timestamp?: string;
  icon?: string;
}

export function LiveTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const availableCommands = [
    'help', 'portfolio', 'services', 'contact', 'about', 'clear', 
    'whoami', 'pwd', 'ls', 'date', 'status', 'deploy', 'build', 
    'test', 'docs', 'github', 'linkedin', 'skills'
  ];

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  // Command suggestions based on input
  useEffect(() => {
    if (currentInput) {
      const filtered = availableCommands.filter(cmd => 
        cmd.toLowerCase().startsWith(currentInput.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 3));
    } else {
      setSuggestions([]);
    }
  }, [currentInput]);

  // Initial welcome animation with multiple startup messages
  useEffect(() => {
    const startupSequence = [
      { delay: 500, cmd: 'system boot', msg: '🚀 Aptivon Development Environment initializing...' },
      { delay: 1200, cmd: 'loading modules', msg: '⚡ Loading core modules and services...' },
      { delay: 1800, cmd: 'connection established', msg: '✅ Connected to Aptivon Solutions network' },
      { delay: 2400, cmd: 'welcome', msg: '👋 Welcome to Aptivon Interactive Terminal!\n\nType `help` to explore our services or `portfolio` to see our work.' }
    ];

    startupSequence.forEach(({ delay, cmd, msg }) => {
      setTimeout(() => {
        setLines(prev => [...prev, {
          type: 'system',
          content: msg,
          id: `startup_${Date.now()}`,
          timestamp: new Date().toLocaleTimeString()
        }]);
      }, delay);
    });
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

    // Add to command history
    setCommandHistory(prev => [...prev, command]);
    setHistoryIndex(-1);

    const responses: Record<string, { content: string; type: TerminalLine['type'] }> = {
      'help': {
        content: `🎯 Available Commands:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📁 PORTFOLIO      View our impressive project gallery
🛠️  SERVICES       Explore our comprehensive offerings  
📞 CONTACT        Connect with our expert team
ℹ️  ABOUT         Learn about Aptivon Solutions
🧹 CLEAR         Clear terminal output
👤 WHOAMI        Display current user info
📍 PWD           Show current directory
📂 LS            List available projects
📅 DATE          Show current date & time
⚡ STATUS        System status and metrics
🚀 DEPLOY        Deployment information
🔧 BUILD         Build process info
🧪 TEST          Testing capabilities
📚 DOCS          Documentation links
🐙 GITHUB        Visit our GitHub
💼 LINKEDIN      Connect on LinkedIn
💡 SKILLS        Technical expertise

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Pro tip: Use Tab for auto-completion or ↑/↓ for history!`,
        type: 'output'
      },
      'portfolio': {
        content: `🚀 Loading Portfolio Dashboard...

▓▓▓▓▓▓▓▓▓▓ 100% Complete

📊 PROJECT SHOWCASE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌟 Enterprise Cloud Migration     [98% Success Rate]
🤖 AI-Powered Analytics Platform  [5M+ Data Points]
🔐 Cybersecurity Dashboard        [Zero Breaches]
📱 Mobile Banking App             [4.8★ Rating]
🌐 E-commerce Platform            [300% Growth]

✅ All projects delivered on time and within budget`,
        type: 'success'
      },
      'services': {
        content: `🛠️  APTIVON SERVICES MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

☁️  CLOUD SOLUTIONS
   • AWS/Azure Migration
   • Kubernetes Orchestration
   • Serverless Architecture

🤖 AI & MACHINE LEARNING
   • Predictive Analytics
   • Computer Vision
   • Natural Language Processing

🔧 DEVELOPMENT SERVICES
   • Full-Stack Development
   • Mobile App Development
   • DevOps & CI/CD

🔐 CYBERSECURITY
   • Security Audits
   • Penetration Testing
   • Compliance Management

📊 DATA ANALYTICS
   • Business Intelligence
   • Data Warehousing
   • Real-time Dashboards`,
        type: 'output'
      },
      'contact': {
        content: `📞 CONTACT APTIVON SOLUTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📧 Email:     hello@aptivon.com
📱 Phone:     +1 (555) 123-TECH
💬 WhatsApp:  +1 (555) 123-4567
🌐 Website:   www.aptivon.com
📍 Address:   Silicon Valley, CA

⏰ Business Hours: Mon-Fri, 9AM-6PM PST
🚀 Response Time: < 2 hours

Ready to transform your business? Let's talk! 💡`,
        type: 'output'
      },
      'about': {
        content: `🏢 APTIVON SOLUTIONS PVT. LTD.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 MISSION
Transforming businesses through innovative IT solutions that drive growth, efficiency, and digital transformation.

🌟 VISION  
To be the leading IT consulting partner, empowering organizations to thrive in the digital age.

📊 COMPANY STATS
• Founded: 2023
• Team Size: 2+ Experts
• Projects: 5+ Delivered
• Client Satisfaction: 98%
• Industries Served: 10+

🏆 CORE VALUES
✅ Innovation First
✅ Client Success
✅ Quality Excellence
✅ Agile Delivery`,
        type: 'output'
      },
      'clear': { content: '', type: 'system' },
      'whoami': {
        content: `👤 USER PROFILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🆔 Username:    developer@aptivon.com
🔑 Role:        Senior Developer
🌍 Location:    Silicon Valley, CA
⚡ Status:      Online & Ready
🎯 Access:      Full System Privileges
📊 Projects:    5 Active`,
        type: 'output'
      },
      'pwd': {
        content: `📍 /home/aptivon/projects/enterprise-solutions`,
        type: 'output'
      },
      'ls': {
        content: `📂 PROJECT DIRECTORY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📁 cloud-infrastructure/     🌩️  AWS Migration Tools
📁 ai-solutions/            🤖 ML & AI Frameworks  
📁 web-development/         🌐 React & Node.js Apps
📁 mobile-apps/             📱 React Native Projects
📁 consulting/              💼 Business Solutions
📁 cybersecurity/           🔐 Security Tools
📁 data-analytics/          📊 BI Dashboards

Total: 7 directories, 25+ active projects`,
        type: 'output'
      },
      'date': {
        content: `📅 ${new Date().toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
⏰ ${new Date().toLocaleTimeString('en-US', { 
          hour12: true, 
          hour: '2-digit', 
          minute: '2-digit', 
          second: '2-digit' 
        })}
🌍 Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`,
        type: 'output'
      },
      'status': {
        content: `⚡ SYSTEM STATUS MONITOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🟢 Server Status:      Online ✅
🟢 Database:          Connected ✅
🟢 API Gateway:       Operational ✅
🟢 CDN:              Fast Delivery ✅
🟢 Security:         All Systems Secure ✅

📊 Performance Metrics:
• Uptime: 99.9%
• Response Time: 45ms
• Active Users: 150+
• Data Processed: 2.3TB today`,
        type: 'success'
      },
      'deploy': {
        content: `🚀 DEPLOYMENT PIPELINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Build Complete
✅ Tests Passed (98.5% Coverage)
✅ Security Scan Passed
✅ Performance Optimized
✅ Ready for Production

🌐 Deployment Targets:
• AWS EC2 Instances
• Kubernetes Clusters  
• Edge CDN Locations
• Global Load Balancers`,
        type: 'success'
      },
      'skills': {
        content: `💡 TECHNICAL EXPERTISE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔥 Frontend:    React, Vue.js, Angular, TypeScript
⚡ Backend:     Node.js, Python, Java, .NET
🗄️  Database:   PostgreSQL, MongoDB, Redis
☁️  Cloud:      AWS, Azure, Google Cloud
🔧 DevOps:     Docker, Kubernetes, Jenkins
🤖 AI/ML:      TensorFlow, PyTorch, Scikit-learn
📱 Mobile:     React Native, Flutter
🔐 Security:   OAuth, JWT, Encryption, Auditing`,
        type: 'output'
      },
      'github': {
        content: `🐙 GITHUB PROFILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔗 Profile: github.com/aptivon-solutions
⭐ Stars: 500+ across repositories
📦 Repos: 25+ open source projects
👥 Followers: 200+ developers
📊 Contributions: 1000+ this year

🎯 Popular Repositories:
• enterprise-cloud-kit
• ai-analytics-platform  
• secure-auth-system`,
        type: 'output'
      },
      'linkedin': {
        content: `💼 CONNECT ON LINKEDIN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔗 Company: linkedin.com/company/aptivon-solutions
👥 Network: 500+ professional connections
📈 Growth: 200% increase in followers this year
🏆 Endorsements: 50+ skill endorsements

Let's connect and collaborate! 🤝`,
        type: 'output'
      }
    };

    // Add command to terminal
    setLines(prev => [...prev, {
      type: 'command',
      content: command,
      id: Date.now().toString(),
      timestamp: new Date().toLocaleTimeString()
    }]);

    // Handle clear command
    if (command === 'clear') {
      setTimeout(() => setLines([]), 100);
      return;
    }

    // Simulate processing delay
    setIsTyping(true);
    
    // Add response
    setTimeout(() => {
      const commandResponse = responses[command];
      if (commandResponse) {
        setLines(prev => [...prev, {
          type: commandResponse.type,
          content: commandResponse.content,
          id: Date.now().toString() + '_out',
          timestamp: new Date().toLocaleTimeString()
        }]);
      } else {
        setLines(prev => [...prev, {
          type: 'error',
          content: `❌ Command '${command}' not found.\n\nDid you mean: ${availableCommands.filter(cmd => 
            cmd.includes(command.charAt(0))
          ).slice(0, 3).join(', ')}?\n\nType 'help' for available commands.`,
          id: Date.now().toString() + '_err',
          timestamp: new Date().toLocaleTimeString()
        }]);
      }
      setIsTyping(false);
    }, Math.random() * 800 + 200);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput);
      setCurrentInput('');
      setSuggestions([]);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (suggestions.length > 0) {
        setCurrentInput(suggestions[0]);
        setSuggestions([]);
      }
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <motion.div 
      className="w-full h-[70vh] rounded-3xl shadow-2xl overflow-hidden backdrop-blur-lg bg-gradient-to-br from-gray-900/95 to-black/90 border border-gray-600/30 relative"
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
      onClick={focusInput}
      data-testid="live-terminal"
    >
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-teal-500/20 blur-xl -z-10" />
      
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-gray-800/90 to-gray-900/90 border-b border-gray-600/50 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <motion.div 
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              data-testid="terminal-close"
            />
            <motion.div 
              className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              data-testid="terminal-minimize"
            />
            <motion.div 
              className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              data-testid="terminal-maximize"
            />
          </div>
          
          <div className="flex items-center gap-3 ml-4">
            <motion.div
              className="p-1.5 rounded-lg bg-blue-500/20 border border-blue-500/30"
              animate={{ 
                boxShadow: ["0 0 5px rgba(59, 130, 246, 0.3)", "0 0 20px rgba(59, 130, 246, 0.6)", "0 0 5px rgba(59, 130, 246, 0.3)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Terminal className="w-4 h-4 text-blue-400" />
            </motion.div>
            <div>
              <span className="text-white text-sm font-semibold">Aptivon Interactive Terminal</span>
              <div className="flex items-center gap-2 mt-0.5">
                <motion.div 
                  className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-400' : 'bg-red-400'}`}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-gray-400 text-xs">
                  {isOnline ? 'Connected' : 'Offline'} • v2.1.0
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-gray-400 text-xs font-mono">
            {new Date().toLocaleTimeString()}
          </div>
          <motion.div 
            className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Cpu className="w-3 h-3 text-green-400" />
            <span className="text-green-400 text-xs font-mono">98%</span>
          </motion.div>
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        ref={scrollRef}
        className="h-full p-6 overflow-y-auto font-mono text-sm bg-transparent custom-scrollbar relative"
        style={{ maxHeight: 'calc(70vh - 80px)' }}
      >
        {/* Background Matrix Effect */}
        <div className="absolute inset-0 opacity-5">
          <div className="text-green-400 text-xs leading-3 break-all">
            {Array.from({ length: 100 }, (_, i) => (
              <span key={i} className="inline-block animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
                {Math.random().toString(36).substring(7)}
              </span>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {lines.map((line, index) => (
            <motion.div
              key={line.id}
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="mb-3 relative z-10"
              data-testid={`terminal-line-${line.type}`}
            >
              {line.type === 'command' && (
                <motion.div 
                  className="flex items-center gap-3 p-2 rounded-lg bg-gray-800/30 border border-gray-700/30"
                  whileHover={{ scale: 1.01, backgroundColor: "rgba(55, 65, 81, 0.4)" }}
                >
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="p-1.5 rounded-md bg-teal-500/20 border border-teal-500/30"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Play className="w-3 h-3 text-teal-400" />
                    </motion.div>
                    <span className="text-teal-400 font-bold">aptivon@terminal</span>
                    <span className="text-gray-500">~</span>
                    <span className="text-yellow-400">$</span>
                  </div>
                  <motion.span 
                    className="text-white font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    {line.content}
                  </motion.span>
                  {line.timestamp && (
                    <span className="text-gray-500 text-xs ml-auto">
                      {line.timestamp}
                    </span>
                  )}
                </motion.div>
              )}
              
              {line.type === 'output' && (
                <motion.div 
                  className="ml-6 p-4 rounded-lg bg-gray-800/20 border-l-4 border-blue-500/50"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-gray-200 whitespace-pre-line leading-relaxed">
                    {line.content}
                  </div>
                </motion.div>
              )}
              
              {line.type === 'system' && (
                <motion.div 
                  className="ml-6 p-4 rounded-lg bg-green-500/10 border-l-4 border-green-500/50"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <div className="text-green-300 whitespace-pre-line leading-relaxed">
                      {line.content}
                    </div>
                  </div>
                </motion.div>
              )}
              
              {line.type === 'success' && (
                <motion.div 
                  className="ml-6 p-4 rounded-lg bg-green-500/15 border-l-4 border-green-400"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <div className="text-green-200 whitespace-pre-line leading-relaxed">
                      {line.content}
                    </div>
                  </div>
                </motion.div>
              )}
              
              {line.type === 'error' && (
                <motion.div 
                  className="ml-6 p-4 rounded-lg bg-red-500/10 border-l-4 border-red-500/50"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-start gap-3">
                    <Zap className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                    <div className="text-red-300 whitespace-pre-line leading-relaxed">
                      {line.content}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Loading indicator */}
        {isTyping && (
          <motion.div 
            className="ml-6 flex items-center gap-3 p-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="flex gap-1"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="w-2 h-2 bg-yellow-400 rounded-full" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 bg-yellow-400 rounded-full" style={{ animationDelay: '200ms' }} />
              <div className="w-2 h-2 bg-yellow-400 rounded-full" style={{ animationDelay: '400ms' }} />
            </motion.div>
            <span className="text-yellow-400 text-sm">Processing command...</span>
          </motion.div>
        )}

        {/* Input Line */}
        <motion.div 
          className="flex items-center gap-3 mt-4 p-3 rounded-lg bg-gray-800/40 border border-gray-700/40 backdrop-blur-sm sticky bottom-0"
          whileFocus={{ borderColor: "rgba(20, 184, 166, 0.5)", boxShadow: "0 0 20px rgba(20, 184, 166, 0.3)" }}
        >
          <div className="flex items-center gap-2">
            <motion.div
              className="p-1.5 rounded-md bg-teal-500/20 border border-teal-500/30"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Coffee className="w-3 h-3 text-teal-400" />
            </motion.div>
            <span className="text-teal-400 font-bold">aptivon@terminal</span>
            <span className="text-gray-500">~</span>
            <span className="text-yellow-400">$</span>
          </div>
          
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyPress}
              className="w-full bg-transparent text-white outline-none font-mono placeholder-gray-400"
              placeholder="Type a command... (Tab for suggestions, ↑↓ for history)"
              disabled={isTyping}
              data-testid="terminal-input"
            />
            
            {/* Command suggestions */}
            {suggestions.length > 0 && (
              <motion.div 
                className="absolute top-8 left-0 right-0 bg-gray-800/95 backdrop-blur-sm border border-gray-600/50 rounded-lg p-2 z-50"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {suggestions.map((suggestion, index) => (
                  <motion.div
                    key={suggestion}
                    className="px-3 py-1 rounded text-sm text-gray-300 hover:bg-gray-700/50 cursor-pointer"
                    whileHover={{ backgroundColor: "rgba(55, 65, 81, 0.7)" }}
                    onClick={() => {
                      setCurrentInput(suggestion);
                      setSuggestions([]);
                      inputRef.current?.focus();
                    }}
                  >
                    {suggestion}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

          <motion.div
            className="w-3 h-5 bg-teal-400 rounded-sm"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}