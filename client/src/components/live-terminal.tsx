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
    'help', 'portfolio', 'services', 'mobile', 'web', 'ai', 'cloud', 'devops',
    'contact', 'about', 'clear', 'whoami', 'pwd', 'ls', 'date', 'status', 
    'deploy', 'build', 'test', 'docs', 'github', 'linkedin', 'skills'
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
      { delay: 500, cmd: 'system boot', msg: 'Aptivon Development Environment initializing...' },
      { delay: 1200, cmd: 'loading modules', msg: 'Loading core modules and services...' },
      { delay: 1800, cmd: 'connection established', msg: 'Connected to Aptivon Solutions network' },
      { delay: 2400, cmd: 'welcome', msg: 'Welcome to Aptivon Interactive Terminal\n\nType help to explore our services or portfolio to see our work.' }
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
        content: `Available Commands:
================================================================

PORTFOLIO         View our project gallery and case studies
SERVICES          Explore our comprehensive service offerings  
MOBILE            Mobile application development services
WEB               Web development and digital solutions
AI                Artificial intelligence and machine learning
CLOUD             Cloud infrastructure and migration services
DEVOPS            DevOps automation and CI/CD pipelines
CONTACT           Connect with our expert team
ABOUT             Learn about Aptivon Solutions
CLEAR             Clear terminal output
WHOAMI            Display current user information
PWD               Show current directory
LS                List available projects and services
DATE              Show current date and time
STATUS            System status and performance metrics
DEPLOY            Deployment pipeline information
BUILD             Build process and automation
TEST              Testing frameworks and quality assurance
DOCS              Technical documentation
GITHUB            Visit our GitHub repositories
LINKEDIN          Connect on LinkedIn
SKILLS            Technical expertise and capabilities

================================================================
Use Tab for auto-completion or arrow keys for command history`,
        type: 'output'
      },
      'portfolio': {
        content: `Portfolio Dashboard Loading...

[████████████████████████████████] 100% Complete

PROJECT SHOWCASE:
================================================================
Enterprise Cloud Migration System
- AWS multi-region infrastructure deployment
- Kubernetes orchestration with auto-scaling
- 99.9% uptime achievement
- Cost reduction: 40% infrastructure savings

AI-Powered Analytics Platform
- Real-time data processing pipeline
- Machine learning recommendation engine
- 5+ million data points processed daily
- Predictive analytics accuracy: 94%

Cybersecurity Compliance Dashboard
- SOC 2 Type II compliant infrastructure
- Zero security incidents in production
- Automated threat detection system
- 24/7 monitoring and alerting

Mobile Banking Application
- React Native cross-platform solution
- Biometric authentication integration
- 500K+ active monthly users
- App Store rating: 4.8/5.0

E-commerce Marketplace Platform
- Microservices architecture
- Real-time inventory management
- Payment gateway integration
- 300% revenue growth post-launch

================================================================
All projects delivered on schedule with documented success metrics`,
        type: 'success'
      },
      'services': {
        content: `APTIVON SERVICES MATRIX
================================================================

CLOUD INFRASTRUCTURE SERVICES
- AWS/Azure/GCP migration and optimization
- Kubernetes container orchestration
- Serverless architecture implementation
- Infrastructure as Code (Terraform/CloudFormation)
- Auto-scaling and load balancing
- Disaster recovery and backup solutions

ARTIFICIAL INTELLIGENCE & MACHINE LEARNING
- Custom ML model development
- Computer vision and image recognition
- Natural language processing systems
- Predictive analytics platforms
- Recommendation engines
- Data science consulting

MOBILE APPLICATION DEVELOPMENT
- Native iOS development (Swift)
- Native Android development (Kotlin/Java)
- Cross-platform solutions (React Native/Flutter)
- Progressive Web Apps (PWA)
- Mobile backend services
- App store optimization

WEB DEVELOPMENT SERVICES
- Frontend development (React/Vue/Angular)
- Backend development (Node.js/Python/Java)
- Full-stack application architecture
- API development and integration
- Database design and optimization
- Performance optimization

DEVOPS & AUTOMATION
- CI/CD pipeline implementation
- Docker containerization
- Kubernetes deployment
- Infrastructure monitoring
- Automated testing frameworks
- Security scanning and compliance

================================================================
Contact us for detailed service specifications and pricing`,
        type: 'output'
      },
      'mobile': {
        content: `MOBILE APPLICATION DEVELOPMENT
================================================================

NATIVE iOS DEVELOPMENT
- Swift programming language
- UIKit and SwiftUI frameworks
- Core Data and CloudKit integration
- App Store optimization and deployment
- iOS 15+ compatibility

NATIVE ANDROID DEVELOPMENT
- Kotlin and Java programming
- Jetpack Compose modern UI toolkit
- Room database and WorkManager
- Google Play Store deployment
- Android 8+ compatibility

CROSS-PLATFORM SOLUTIONS
- React Native framework
- Flutter development
- Xamarin platform support
- Code sharing between platforms
- Native performance optimization

MOBILE BACKEND SERVICES
- RESTful API development
- Real-time data synchronization
- Push notification systems
- User authentication and authorization
- Cloud storage integration

SPECIALIZED FEATURES
- Biometric authentication
- Camera and media processing
- GPS and location services
- Bluetooth and IoT connectivity
- Offline-first architecture

================================================================
Average project timeline: 3-6 months depending on complexity`,
        type: 'output'
      },
      'web': {
        content: `WEB DEVELOPMENT SERVICES
================================================================

FRONTEND DEVELOPMENT
- React.js with TypeScript
- Vue.js 3 with Composition API
- Angular with RxJS
- Modern CSS frameworks (Tailwind, Bootstrap)
- Progressive Web Apps (PWA)
- Single Page Applications (SPA)

BACKEND DEVELOPMENT
- Node.js with Express/Fastify
- Python with Django/FastAPI
- Java with Spring Boot
- .NET Core applications
- Go microservices
- PHP with Laravel

FULL-STACK ARCHITECTURE
- Microservices design patterns
- API-first development approach
- GraphQL and REST APIs
- Database design and optimization
- Caching strategies (Redis, Memcached)
- Message queues (RabbitMQ, Apache Kafka)

E-COMMERCE SOLUTIONS
- Shopping cart implementation
- Payment gateway integration
- Inventory management systems
- Order processing workflows
- Customer relationship management
- Analytics and reporting

PERFORMANCE OPTIMIZATION
- Core Web Vitals optimization
- Server-side rendering (SSR)
- Content delivery networks (CDN)
- Database query optimization
- Image and asset optimization
- Load testing and monitoring

================================================================
Technology stack tailored to project requirements and scale`,
        type: 'output'
      },
      'ai': {
        content: `ARTIFICIAL INTELLIGENCE & MACHINE LEARNING
================================================================

MACHINE LEARNING SERVICES
- Custom model development and training
- Supervised and unsupervised learning
- Deep learning neural networks
- Model deployment and monitoring
- A/B testing for ML models
- AutoML and hyperparameter optimization

COMPUTER VISION
- Image classification and recognition
- Object detection and tracking
- Facial recognition systems
- Optical character recognition (OCR)
- Medical image analysis
- Quality control automation

NATURAL LANGUAGE PROCESSING
- Text classification and sentiment analysis
- Named entity recognition (NER)
- Language translation services
- Chatbot and virtual assistant development
- Document processing and extraction
- Speech-to-text and text-to-speech

PREDICTIVE ANALYTICS
- Time series forecasting
- Customer behavior prediction
- Risk assessment models
- Demand forecasting
- Fraud detection systems
- Recommendation engines

DATA SCIENCE CONSULTING
- Data strategy and roadmap development
- Data pipeline architecture
- Feature engineering and selection
- Model interpretability and explainability
- Compliance with AI regulations
- Team training and knowledge transfer

INFRASTRUCTURE
- MLOps pipeline implementation
- Model versioning and governance
- Automated retraining systems
- Edge AI deployment
- GPU cluster management
- Cloud AI services integration

================================================================
Expertise in TensorFlow, PyTorch, Scikit-learn, and cloud AI platforms`,
        type: 'output'
      },
      'cloud': {
        content: `CLOUD INFRASTRUCTURE SERVICES
================================================================

CLOUD MIGRATION
- Assessment and migration strategy
- Lift-and-shift migrations
- Re-architecting for cloud-native
- Hybrid and multi-cloud deployments
- Data migration and synchronization
- Legacy system modernization

AMAZON WEB SERVICES (AWS)
- EC2 and ECS container services
- Lambda serverless functions
- RDS and DynamoDB databases
- S3 storage and CloudFront CDN
- VPC networking and security groups
- IAM roles and security policies

MICROSOFT AZURE
- Virtual machines and container instances
- Azure Functions serverless computing
- SQL Database and Cosmos DB
- Blob storage and Azure CDN
- Virtual networks and NSGs
- Active Directory integration

GOOGLE CLOUD PLATFORM (GCP)
- Compute Engine and Cloud Run
- Cloud Functions serverless platform
- Cloud SQL and Firestore
- Cloud Storage and Cloud CDN
- VPC networks and firewall rules
- Identity and Access Management

INFRASTRUCTURE AS CODE
- Terraform infrastructure provisioning
- AWS CloudFormation templates
- Azure Resource Manager (ARM)
- Google Cloud Deployment Manager
- Ansible configuration management
- GitOps workflows

MONITORING & OPTIMIZATION
- CloudWatch, Azure Monitor, Stackdriver
- Cost optimization and right-sizing
- Performance monitoring and alerting
- Security compliance and auditing
- Backup and disaster recovery
- Auto-scaling and load balancing

================================================================
Certified cloud architects with 50+ successful migrations`,
        type: 'output'
      },
      'devops': {
        content: `DEVOPS & AUTOMATION SERVICES
================================================================

CONTINUOUS INTEGRATION/CONTINUOUS DEPLOYMENT
- Jenkins pipeline automation
- GitLab CI/CD implementation
- GitHub Actions workflows
- Azure DevOps pipelines
- Automated testing integration
- Code quality and security scanning

CONTAINERIZATION
- Docker container development
- Kubernetes cluster management
- Docker Swarm orchestration
- Container registry management
- Microservices architecture
- Service mesh implementation (Istio)

INFRASTRUCTURE AUTOMATION
- Terraform infrastructure as code
- Ansible configuration management
- Puppet and Chef automation
- Infrastructure provisioning
- Environment standardization
- Immutable infrastructure patterns

MONITORING & OBSERVABILITY
- Prometheus and Grafana monitoring
- ELK stack (Elasticsearch, Logstash, Kibana)
- Application performance monitoring (APM)
- Distributed tracing systems
- Custom metrics and alerting
- Incident response automation

SECURITY & COMPLIANCE
- Security scanning in CI/CD pipelines
- Container security (Twistlock, Aqua)
- Secret management (HashiCorp Vault)
- Compliance automation (SOC 2, HIPAA)
- Infrastructure security hardening
- Vulnerability assessment automation

VERSION CONTROL & COLLABORATION
- Git workflow optimization
- Branch protection and code review
- Automated documentation generation
- Release management strategies
- Feature flag implementation
- Environment promotion workflows

================================================================
Average setup time: 2-4 weeks for complete DevOps transformation`,
        type: 'output'
      },
      'contact': {
        content: `CONTACT APTIVON SOLUTIONS
================================================================

PRIMARY CONTACT
Email:          hello@aptivon.com
Phone:          +1 (555) 123-TECH
WhatsApp:       +1 (555) 123-4567
Website:        www.aptivon.com

BUSINESS OFFICE
Address:        Silicon Valley, CA
Business Hours: Monday-Friday, 9AM-6PM PST
Time Zone:      Pacific Standard Time (UTC-8)
Response Time:  Less than 2 hours during business hours

PROJECT INQUIRIES
For new projects: projects@aptivon.com
For consultations: consulting@aptivon.com
For partnerships: partnerships@aptivon.com

SUPPORT CHANNELS
Technical Support: support@aptivon.com
Emergency Hotline: +1 (555) 911-TECH
Status Page: status.aptivon.com

================================================================
Professional consultation available for enterprise requirements`,
        type: 'output'
      },
      'about': {
        content: `APTIVON SOLUTIONS PVT. LTD.
================================================================

COMPANY MISSION
Transforming businesses through innovative IT solutions that drive 
growth, operational efficiency, and digital transformation.

VISION STATEMENT
To be the leading IT consulting partner, empowering organizations 
to thrive in the digital age through cutting-edge technology solutions.

COMPANY STATISTICS
Founded:             2023
Team Size:           12+ Technical Experts
Projects Delivered: 25+ Successful Implementations
Client Retention:    98% Customer Satisfaction Rate
Industries Served:   Healthcare, Finance, E-commerce, Manufacturing

CORE COMPETENCIES
- Enterprise software development
- Cloud infrastructure and migration
- Artificial intelligence implementation
- Mobile application development
- DevOps automation and CI/CD
- Cybersecurity and compliance

CORE VALUES
Innovation First:    Leveraging cutting-edge technologies
Client Success:      Delivering measurable business value
Quality Excellence:  Adhering to industry best practices
Agile Delivery:      Iterative development and rapid deployment

CERTIFICATIONS
AWS Certified Solutions Architects
Microsoft Azure Certified Professionals
Google Cloud Professional Architects
Kubernetes Certified Application Developers

================================================================
Established presence in Silicon Valley with global service delivery`,
        type: 'output'
      },
      'clear': { content: '', type: 'system' },
      'whoami': {
        content: `USER PROFILE
================================================================
Username:       developer@aptivon.com
Role:           Senior Solutions Architect
Department:     Technical Operations
Location:       Silicon Valley, CA
Status:         Online and Available
Access Level:   Full System Privileges
Active Projects: 8 enterprise implementations
Certifications: AWS Solutions Architect, Azure DevOps Expert
Experience:     5+ years in enterprise software development`,
        type: 'output'
      },
      'pwd': {
        content: `/home/aptivon/projects/enterprise-solutions`,
        type: 'output'
      },
      'ls': {
        content: `PROJECT DIRECTORY LISTING
================================================================
cloud-infrastructure/       AWS/Azure migration and optimization
ai-ml-solutions/            Machine learning and AI implementations  
web-applications/           Full-stack web development projects
mobile-applications/        iOS and Android native applications
devops-automation/          CI/CD pipelines and infrastructure code
cybersecurity/              Security audits and compliance tools
data-analytics/             Business intelligence and reporting
consulting-projects/        Strategic technology consulting
api-services/               Microservices and API development
legacy-modernization/       System migration and updates

Total: 10 directories containing 47 active enterprise projects
Last modified: ${new Date().toLocaleDateString()}`,
        type: 'output'
      },
      'date': {
        content: `SYSTEM DATE AND TIME
================================================================
Date: ${new Date().toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
Time: ${new Date().toLocaleTimeString('en-US', { 
          hour12: true, 
          hour: '2-digit', 
          minute: '2-digit', 
          second: '2-digit' 
        })}
Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}
Unix Timestamp: ${Math.floor(Date.now() / 1000)}
ISO Format: ${new Date().toISOString()}`,
        type: 'output'
      },
      'status': {
        content: `SYSTEM STATUS MONITOR
================================================================
Server Status:        Online and Operational
Database Cluster:     Connected and Synchronized
API Gateway:          Responding within SLA
CDN Performance:      Optimal Global Distribution
Security Systems:     All Monitoring Active
Load Balancer:        Healthy across all regions

PERFORMANCE METRICS
System Uptime:        99.97% (last 30 days)
Average Response:     42ms global latency
Active Connections:   2,847 concurrent users
Data Throughput:      15.7TB processed today
Memory Usage:         67% of allocated resources
CPU Utilization:      34% average load

INFRASTRUCTURE HEALTH
Kubernetes Clusters:  8/8 nodes healthy
Microservices:        47/47 services running
Cache Hit Ratio:      94.2% Redis performance
Database Queries:     avg 3.2ms execution time
SSL Certificates:     Valid until 2025-12-15
Backup Status:        Last successful: 2 hours ago

================================================================
All systems operational within normal parameters`,
        type: 'success'
      },
      'deploy': {
        content: `DEPLOYMENT PIPELINE STATUS
================================================================
BUILD PIPELINE
- Source code compilation: COMPLETED
- Dependency resolution: COMPLETED  
- Unit test execution: PASSED (98.7% coverage)
- Integration tests: PASSED (156/156 tests)
- Security vulnerability scan: PASSED
- Code quality analysis: PASSED (A+ rating)
- Docker image build: COMPLETED
- Image security scan: PASSED

DEPLOYMENT TARGETS
Production Environment:   AWS us-west-2, us-east-1
Kubernetes Clusters:      3 clusters, 24 nodes total
Container Registry:       Amazon ECR
Load Balancer:            Application Load Balancer (ALB)
CDN Distribution:         CloudFront with 15 edge locations
Database:                 RDS Multi-AZ deployment

RELEASE STRATEGY
Blue-Green Deployment:    Zero-downtime deployments
Canary Releases:          5% traffic gradual rollout
Rollback Capability:      Automated within 30 seconds
Health Checks:            Comprehensive monitoring
Feature Flags:            Dynamic configuration

DEPLOYMENT HISTORY
Last Deployment:          2024-01-15 14:32:15 UTC
Deploy Frequency:         12 deployments this month
Success Rate:             100% (0 failed deployments)
Average Deploy Time:      4.2 minutes

================================================================
Next scheduled deployment: 2024-01-16 10:00:00 UTC`,
        type: 'success'
      },
      'skills': {
        content: `TECHNICAL EXPERTISE MATRIX
================================================================
FRONTEND TECHNOLOGIES
React.js 18+:           Advanced component architecture
Vue.js 3:               Composition API and state management
Angular 15+:            Enterprise application development
TypeScript:             Strict typing and advanced patterns
Next.js:                Server-side rendering and optimization
Tailwind CSS:           Utility-first responsive design

BACKEND DEVELOPMENT
Node.js:                Express, Fastify, NestJS frameworks
Python:                 Django, FastAPI, Flask applications
Java:                   Spring Boot, microservices architecture
.NET Core:              Enterprise application development
Go:                     High-performance microservices
Rust:                   Systems programming and performance

DATABASE TECHNOLOGIES
PostgreSQL:             Advanced querying and optimization
MongoDB:                Document database and aggregation
Redis:                  Caching and session management
Elasticsearch:          Search and analytics engine
Apache Kafka:           Event streaming and messaging
InfluxDB:               Time-series data management

CLOUD PLATFORMS
AWS:                    Solutions Architect Professional
Azure:                  DevOps Engineer Expert
Google Cloud:           Professional Cloud Architect
Kubernetes:             Certified Application Developer
Docker:                 Container orchestration expert
Terraform:              Infrastructure as Code specialist

ARTIFICIAL INTELLIGENCE
TensorFlow:             Deep learning model development
PyTorch:                Research and production ML
Scikit-learn:           Classical machine learning
OpenAI APIs:            GPT integration and fine-tuning
Computer Vision:        OpenCV, YOLO, CNN architectures
NLP:                    BERT, transformers, sentiment analysis

MOBILE DEVELOPMENT
React Native:           Cross-platform mobile applications
Flutter:                Native performance mobile apps
Swift:                  Native iOS development
Kotlin:                 Native Android development
Xamarin:                Microsoft mobile platform

DEVOPS & SECURITY
Jenkins:                CI/CD pipeline automation
GitLab CI:              DevOps platform integration
OAuth 2.0:              Authentication and authorization
JWT:                    Secure token implementation
Encryption:             AES, RSA, certificate management
Penetration Testing:    OWASP compliance and security audits

================================================================
Continuous learning and certification maintenance across all domains`,
        type: 'output'
      },
      'github': {
        content: `GITHUB REPOSITORY INFORMATION
================================================================
Organization:       github.com/aptivon-solutions
Public Repositories: 32 open source projects
Total Stars:        1,247 across all repositories
Followers:          485 developers and organizations
Contributions:      2,156 commits this year
Code Languages:     TypeScript, Python, Go, Java, Rust

FEATURED REPOSITORIES
enterprise-cloud-kit:      Infrastructure automation tools
ai-analytics-platform:     Machine learning pipeline framework  
secure-auth-system:        OAuth 2.0 and JWT implementation
microservices-template:    Production-ready service template
devops-toolkit:            CI/CD pipeline configurations
react-component-library:   Reusable UI component collection

CONTRIBUTION STATISTICS
Pull Requests:      156 merged (98% approval rate)
Issues Resolved:    89 bug fixes and enhancements
Code Reviews:       234 reviews provided to community
Documentation:      15 comprehensive project wikis
Open Source:        MIT licensed for community benefit

COMMUNITY ENGAGEMENT
Stack Overflow:     Top 5% contributor in cloud technologies
Tech Blogs:         12 articles published on Medium
Conference Talks:   Speaker at 3 developer conferences
Mentorship:         Active mentor for 8 junior developers

================================================================
Contributing to open source ecosystem since 2019`,
        type: 'output'
      },
      'linkedin': {
        content: `LINKEDIN PROFESSIONAL NETWORK
================================================================
Company Profile:    linkedin.com/company/aptivon-solutions
Individual Pages:   Executive team and senior developers
Network Size:       847 professional connections
Industry Focus:     Enterprise Software, Cloud Computing, AI/ML
Geographic Reach:   North America, Europe, Asia-Pacific

CONTENT STRATEGY
Weekly Articles:    Technology trends and best practices
Case Studies:       Client success stories and implementations
Thought Leadership: Industry insights and predictions
Technical Posts:    Deep dives into emerging technologies
Team Updates:       Project announcements and achievements

PROFESSIONAL ENGAGEMENT
Endorsements:       127 skill endorsements received
Recommendations:    23 client and partner testimonials
Group Participation: Active in 15 technology groups
Event Promotion:    Webinars and workshop announcements
Recruitment:        Talent acquisition for growing team

INDUSTRY RECOGNITION
Featured Articles:  Published in LinkedIn Newsletter
Speaking Events:    Technology conference presentations
Awards:             Listed in "Top 50 Cloud Consultants"
Client Testimonials: 98% satisfaction rating highlighted

================================================================
Professional networking focused on technology leadership`,
        type: 'output'
      },
      'build': {
        content: `BUILD PROCESS AUTOMATION
================================================================
BUILD PIPELINE CONFIGURATION
- Multi-stage Docker builds for optimization
- Dependency caching for faster builds
- Parallel execution of independent tasks
- Automated vulnerability scanning
- Code quality analysis with SonarQube

SUPPORTED TECHNOLOGIES
Frontend Builds:    React, Vue, Angular with Webpack/Vite
Backend Builds:     Node.js, Python, Java, .NET Core
Mobile Builds:      React Native, Flutter, native iOS/Android
Infrastructure:     Terraform, CloudFormation, Kubernetes manifests

BUILD OPTIMIZATION
Bundle Splitting:   Code splitting for optimal loading
Tree Shaking:       Remove unused code automatically
Minification:       JavaScript, CSS, and HTML compression
Image Optimization: WebP conversion and responsive sizing
Cache Strategies:   Browser and CDN caching headers

QUALITY GATES
Unit Tests:         Minimum 80% code coverage required
Integration Tests:  API and database integration validation
Security Scans:     OWASP dependency and container scanning
Performance Tests:  Lighthouse scores and load testing
Accessibility:      WCAG 2.1 AA compliance verification

BUILD METRICS
Average Build Time: 3.7 minutes for full-stack applications
Success Rate:       99.2% over last 1000 builds
Cache Hit Ratio:    87% dependency cache efficiency
Artifact Size:      Average 60% reduction through optimization

================================================================
Automated builds triggered on every pull request and merge`,
        type: 'output'
      },
      'test': {
        content: `TESTING FRAMEWORK & QUALITY ASSURANCE
================================================================
AUTOMATED TESTING STRATEGY
Unit Testing:       Jest, Mocha, Pytest for component testing
Integration Tests:  API testing with Postman/Newman
End-to-End Tests:   Cypress, Playwright for user workflows
Load Testing:       JMeter, K6 for performance validation
Security Testing:   OWASP ZAP, Burp Suite for vulnerability assessment

TESTING METHODOLOGIES
Test-Driven Development (TDD)
Behavior-Driven Development (BDD)
Acceptance Test-Driven Development (ATDD)
Property-Based Testing
Mutation Testing for test quality validation

QUALITY METRICS
Code Coverage:      98.5% average across all projects
Test Execution:     Automated on every code commit
Defect Detection:   Average 2.3 bugs per 1000 lines of code
Test Maintenance:   15% effort allocation for test updates
Performance SLA:    99.5% of tests complete under 2 seconds

SPECIALIZED TESTING
API Testing:        Contract testing with Pact
Database Testing:   Data integrity and migration validation
UI Testing:         Cross-browser and responsive design
Accessibility:      Screen reader and keyboard navigation
Localization:       Multi-language and cultural adaptation

CONTINUOUS TESTING
Parallel Execution: Tests run in distributed environment
Fail-Fast Strategy: Immediate feedback on test failures
Regression Suite:   Comprehensive testing before releases
Smoke Tests:        Critical path validation after deployment
Health Checks:      Continuous monitoring of test environments

================================================================
Testing integrated throughout the entire development lifecycle`,
        type: 'output'
      },
      'docs': {
        content: `TECHNICAL DOCUMENTATION SYSTEM
================================================================
DOCUMENTATION ARCHITECTURE
API Documentation:  OpenAPI/Swagger specifications
Code Documentation: JSDoc, Sphinx, Javadoc inline comments
Architecture Docs:  System design and component diagrams
User Guides:        Step-by-step implementation tutorials
Runbooks:          Operational procedures and troubleshooting

DOCUMENTATION TOOLS
Static Site Generation: GitBook, Docusaurus, VuePress
Diagram Creation:      Mermaid, PlantUML, Draw.io
Video Tutorials:       Screen recordings and walkthroughs
Interactive Demos:     Live code examples and sandboxes
Version Control:       Git-based documentation workflows

CONTENT MANAGEMENT
Technical Writing:     Clear, concise, and actionable content
Regular Updates:       Synchronized with code release cycles
Review Process:        Peer review and stakeholder approval
Search Optimization:   Full-text search and categorization
Multi-Format Export:   PDF, HTML, and markdown formats

DOCUMENTATION STANDARDS
Code Examples:         Working, tested code snippets
Screenshots:           Up-to-date UI references
Error Handling:        Common issues and solutions
Best Practices:        Industry standards and conventions
Change Logs:           Detailed release notes and migration guides

ACCESS & DISTRIBUTION
Internal Knowledge Base: Confluence, Notion, or custom portal
Public Documentation:   GitHub Pages, Netlify, or Vercel
API References:         Hosted Swagger UI or Postman collections
Video Library:          YouTube or Vimeo channels
Community Forums:       Discord, Slack, or Stack Overflow

================================================================
Comprehensive documentation maintained for all project phases`,
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
          content: `Command '${command}' not found.\n\nDid you mean: ${availableCommands.filter(cmd => 
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
              className="w-full bg-transparent text-white outline-none font-mono placeholder-gray-400 caret-teal-400"
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
            className="w-0.5 h-5 bg-teal-400"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}