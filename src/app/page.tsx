'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Mail, Layout, Smartphone, Rocket, CheckCircle2, ExternalLink, Github, Linkedin, Twitter, Menu, X, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const services = [
    {
      icon: <Layout className="h-8 w-8" />,
      title: 'Landing Page Design',
      description: 'Creating high-converting landing pages that generate leads and improve conversions for SaaS and B2B companies.'
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: 'Conversion Rate Optimization',
      description: 'Using data-driven A/B testing and analytics to increase signups and optimize your conversion funnel.'
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Responsive Design',
      description: 'Ensuring your landing pages convert across all devices with mobile-first, user-tested designs.'
    },
    {
      icon: <CheckCircle2 className="h-8 w-8" />,
      title: 'Landing Page Audit',
      description: 'Analyzing user research and heatmaps to identify opportunities to improve conversions on existing pages.'
    },
    {
      icon: <Layout className="h-8 w-8" />,
      title: 'Speed Optimization',
      description: 'Optimizing core web vitals and load times to reduce bounce rates and increase conversions.'
    },
    {
      icon: <Layout className="h-8 w-8" />,
      title: 'Messaging Hierarchy',
      description: 'Crafting strategic copy and user intent alignment that turns visitors into qualified leads.'
    }
  ]

  const skills = [
    'Conversion Rate Optimization', 'A/B Testing', 'User Research',
    'Heatmaps', 'Analytics', 'Funnel Optimization',
    'UI/UX Design', 'Figma', 'Mobile-First Design',
    'Landing Page Strategy', 'SEO Best Practices'
  ]

  const projects = [
    {
      title: 'SaaS Landing Page Redesign',
      description: 'Conversion rate optimization project that increased signups by 67% through A/B testing and messaging hierarchy improvements.',
      tags: ['User Research', 'A/B Testing', 'Data-Driven', 'Results']
    },
    {
      title: 'B2B Lead Generation Page',
      description: 'Landing page strategy and design that generated 200+ qualified leads per month for early-stage startup using proven conversion patterns.',
      tags: ['Funnel Optimization', 'Lead Generation', 'High-Converting', 'Tested']
    },
    {
      title: 'Product Launch Landing Page',
      description: 'Landing page audit and redesign that improved conversions by 45% through user intent analysis and analytics-driven iterations.',
      tags: ['Landing Page Audit', 'Real Metrics', 'Proven Results', 'CRO Consulting']
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold"
            >
              Shubham.dev
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Services', 'Skills', 'Case Studies', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </button>
              ))}
              <Button onClick={() => scrollToSection('contact')} size="sm">
                Hire Me
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {['About', 'Services', 'Skills', 'Case Studies', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              <Badge variant="outline" className="text-sm px-4 py-1">
                Landing Page Expert Available for Projects
              </Badge>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Shubham Ramani, Landing Page Expert
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto"
            >
              Landing Page Expert Specializing in Conversion Rate Optimization
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              I help SaaS and B2B companies generate leads and improve conversions through data-driven landing page optimization. Using proven A/B testing, user research, and analytics, I create pages that turn visitors into customers.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <Button size="lg" onClick={() => scrollToSection('contact')} className="w-full sm:w-auto">
                <Mail className="mr-2 h-4 w-4" />
                Start Landing Page Audit
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('projects')} className="w-full sm:w-auto">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Case Studies
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex justify-center gap-6 pt-8"
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <Badge className="mb-4">About</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                How I Work as a Landing Page Expert
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a landing page expert who helps SaaS, startups, and B2B companies generate leads and improve conversions through strategic design and testing. My process combines user research, A/B testing, and analytics to create high-converting landing pages.
                </p>
                <p>
                  My approach to landing page optimization starts with understanding your user intent. I conduct thorough user research, analyze heatmaps and analytics, then design pages with clear messaging hierarchy that guides visitors to take action. Every element is tested and validated with real metrics.
                </p>
                <p>
                  Unlike template vendors, I specialize in landing page strategy and funnel optimization. My conversion rate optimization services help early-stage companies increase signups and generate qualified leads. I believe in data-driven design decisions, not guesswork.
                </p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Landing Page Projects</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">30+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Proven Results</div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Services</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Conversion Optimization Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Data-driven landing page services that generate leads and improve conversions
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="mb-4 text-primary">{service.icon}</div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Expertise</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              SaaS & B2B Landing Page Specialist
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven process for landing page optimization and conversion rate improvement
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Case Studies</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Proven Landing Page Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Data-driven case studies showing tested results and real metrics
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4">Contact</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to generate leads and improve conversions? Reach out directly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardContent className="p-6 sm:p-8 md:p-12">
                <div className="space-y-6">
                  {/* Email Contact */}
                  <div className="group">
                    <div className="flex items-center justify-center gap-3 sm:gap-4 p-4 sm:p-6 bg-muted/30 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 overflow-hidden">
                      <Mail className="h-8 w-8 sm:h-10 sm:w-10 text-primary flex-shrink-0" />
                      <div className="text-left flex-1 min-w-0">
                        <p className="text-[10px] sm:text-xs font-medium text-muted-foreground mb-1 uppercase tracking-wider">Email</p>
                        <a 
                          href="mailto:shubham.ramani3346@gmail.com" 
                          className="text-base sm:text-lg md:text-xl font-semibold text-foreground hover:text-primary transition-colors group-hover:text-primary break-all leading-tight"
                        >
                          shubham.ramani3346@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Phone Contact */}
                  <div className="group">
                    <div className="flex items-center justify-center gap-3 sm:gap-4 p-4 sm:p-6 bg-muted/30 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 overflow-hidden">
                      <Phone className="h-8 w-8 sm:h-10 sm:w-10 text-primary flex-shrink-0" />
                      <div className="text-left flex-1 min-w-0">
                        <p className="text-[10px] sm:text-xs font-medium text-muted-foreground mb-1 uppercase tracking-wider">Phone</p>
                        <a
                          href="tel:+917990855863"
                          className="text-base sm:text-lg md:text-xl font-semibold text-foreground hover:text-primary transition-colors group-hover:text-primary break-all leading-tight"
                        >
                          +91 79908-55863
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center mb-6">Follow me on social media</p>
                    <div className="flex justify-center gap-8">
                      <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-3 px-4 py-3 bg-muted/50 rounded-lg border border-border hover:bg-muted hover:border-primary transition-all duration-300 group"
                      >
                        <Github className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                      </a>
                      <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-3 px-4 py-3 bg-muted/50 rounded-lg border border-border hover:bg-muted hover:border-primary transition-all duration-300 group"
                      >
                        <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                      </a>
                      <a 
                        href="https://twitter.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-3 px-4 py-3 bg-muted/50 rounded-lg border border-border hover:bg-muted hover:border-primary transition-all duration-300 group"
                      >
                        <Twitter className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border mt-auto">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Shubham Ramani. Landing Page Expert providing conversion optimization services.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
