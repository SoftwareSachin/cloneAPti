import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, lazy, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "@/components/page-transition";
import { initGA } from "../lib/analytics";
import { useAnalytics } from "../hooks/use-analytics";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { useProgress } from "@/hooks/use-progress";
import { ProgressBar } from "@/components/progress-bar";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

// Lazy load pages to reduce initial bundle size
const About = lazy(() => import("@/pages/about"));
const Services = lazy(() => import("@/pages/services"));
const Solutions = lazy(() => import("@/pages/solutions"));
const Industries = lazy(() => import("@/pages/industries"));
const CaseStudies = lazy(() => import("@/pages/case-studies"));
const Resources = lazy(() => import("@/pages/resources"));
const Support = lazy(() => import("@/pages/support"));
const Portfolio = lazy(() => import("@/pages/portfolio"));
const PortfolioProject = lazy(() => import("@/pages/portfolio-project"));
const Careers = lazy(() => import("@/pages/careers"));
const Blog = lazy(() => import("@/pages/blog"));
const BlogPost = lazy(() => import("@/pages/blog-post"));
const Contact = lazy(() => import("@/pages/contact"));
const Architecture = lazy(() => import("@/pages/architecture"));
const PortfolioDownload = lazy(() => import("@/pages/portfolio-download"));
const CollegeProjects = lazy(() => import("@/pages/college-projects"));

// Legal pages
const PrivacyPolicy = lazy(() => import("@/pages/privacy-policy"));
const TermsOfService = lazy(() => import("@/pages/terms-of-service"));
const CookiePolicy = lazy(() => import("@/pages/cookie-policy"));
const Security = lazy(() => import("@/pages/security"));

// Enhanced loading component with Framer Motion
function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-4 border-slate-300 border-t-slate-900 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-slate-600">Loading...</p>
      </div>
    </div>
  );
}

function AnimatedRouter() {
  const [location] = useLocation();
  
  // Track page views when routes change
  useAnalytics();
  
  // Initialize smooth scrolling
  useSmoothScroll();
  
  // Initialize progress bar
  useProgress();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Switch location={location} key={location}>
        <Route path="/">
          <PageTransition>
            <Home />
          </PageTransition>
        </Route>
        <Route path="/about">
          <PageTransition>
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          </PageTransition>
        </Route>
        <Route path="/services">
          <PageTransition>
            <Suspense fallback={<Loading />}>
              <Services />
            </Suspense>
          </PageTransition>
        </Route>
        <Route path="/solutions">
          <PageTransition>
            <Suspense fallback={<Loading />}>
              <Solutions />
            </Suspense>
          </PageTransition>
        </Route>
        <Route path="/industries">
          <PageTransition>
            <Suspense fallback={<Loading />}>
              <Industries />
            </Suspense>
          </PageTransition>
        </Route>
        <Route path="/case-studies">
          <PageTransition>
            <Suspense fallback={<Loading />}>
              <CaseStudies />
            </Suspense>
          </PageTransition>
        </Route>
        <Route path="/resources">
          <PageTransition>
            <Suspense fallback={<Loading />}>
              <Resources />
            </Suspense>
          </PageTransition>
        </Route>
        <Route path="/support">
          <PageTransition>
            <Suspense fallback={<Loading />}>
              <Support />
            </Suspense>
          </PageTransition>
        </Route>
        <Route path="/portfolio">
          <PageTransition>
            <Suspense fallback={<Loading />}>
              <Portfolio />
            </Suspense>
          </PageTransition>
        </Route>
        <Route path="/portfolio-project/:slug">
          <PageTransition>
            <Suspense fallback={<Loading />}>
              <PortfolioProject />
            </Suspense>
          </PageTransition>
        </Route>
        <Route path="/careers">
          <PageTransition>
            <Suspense fallback={<Loading />}>
              <Careers />
            </Suspense>
          </PageTransition>
        </Route>
        <Route path="/blog">
          <PageTransition>
            <Suspense fallback={<Loading />}>
              <Blog />
            </Suspense>
          </PageTransition>
        </Route>
        <Route path="/blog/:slug">
          <PageTransition>
            <Suspense fallback={<Loading />}>
              <BlogPost />
            </Suspense>
          </PageTransition>
        </Route>
        <Route path="/contact">
          <PageTransition>
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          </PageTransition>
        </Route>
        <Route path="/architecture">
          <PageTransition>
            <Suspense fallback={<Loading />}>
              <Architecture />
            </Suspense>
          </PageTransition>
        </Route>
        <Route path="/portfolio-download">
          <PageTransition>
            <Suspense fallback={<Loading />}>
              <PortfolioDownload />
            </Suspense>
          </PageTransition>
        </Route>
        <Route path="/college-projects">
          <PageTransition>
            <Suspense fallback={<Loading />}>
              <CollegeProjects />
            </Suspense>
          </PageTransition>
        </Route>
        <Route path="/privacy-policy">
          <PageTransition>
            <Suspense fallback={<Loading />}>
              <PrivacyPolicy />
            </Suspense>
          </PageTransition>
        </Route>
        <Route path="/terms-of-service">
          <PageTransition>
            <Suspense fallback={<Loading />}>
              <TermsOfService />
            </Suspense>
          </PageTransition>
        </Route>
        <Route path="/cookie-policy">
          <PageTransition>
            <Suspense fallback={<Loading />}>
              <CookiePolicy />
            </Suspense>
          </PageTransition>
        </Route>
        <Route path="/security">
          <PageTransition>
            <Suspense fallback={<Loading />}>
              <Security />
            </Suspense>
          </PageTransition>
        </Route>
        <Route>
          <PageTransition>
            <NotFound />
          </PageTransition>
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  // Initialize Google Analytics when app loads
  useEffect(() => {
    // Verify required environment variable is present
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ProgressBar />
        <Toaster />
        <AnimatedRouter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
