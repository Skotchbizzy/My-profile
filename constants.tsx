
import { ProfileData } from './types';

export const PROFILE: ProfileData = {
  name: "Chima Obingonye",
  title: "CEO of BloomView Consults | Datacom Engineer & AI Enthusiast",
  bio: "CEO of BloomView Consults and a dedicated Datacom Engineer currently pursuing an MSc in Information Technology at the University of Derby. I specialize in bridging the gap between complex network infrastructure and intelligent AI-driven solutions to foster business growth and technical excellence.",
  email: "obingonyechima@gmail.com",
  linkedin: "https://www.linkedin.com/in/chima-obingonye-3b7a3bb8",
  github: "https://github.com/chimaobingonye",
  achievements: [
    {
      id: 'cert1',
      title: "HCIA-Datacom Certified",
      description: "Huawei Certified ICT Associate in Datacom, demonstrating mastery in network routing, switching, and essential networking technologies.",
      date: "2023",
      icon: "📜"
    },
    {
      id: '1',
      title: "Enterprise Network Modernization",
      description: "Successfully spearheaded the deployment of nationwide SD-WAN solutions, improving branch connectivity and reducing latency significantly.",
      date: "2023",
      icon: "🌐"
    },
    {
      id: '2',
      title: "AI-Powered Network Monitoring",
      description: "Developed custom predictive tools using machine learning to identify potential hardware failures before they impacted services.",
      date: "2022",
      icon: "🤖"
    }
  ],
  experiences: [
    {
      id: 'e0',
      company: "BloomView Consults",
      role: "Chief Executive Officer",
      period: "2024 - Present",
      description: [
        "Leading strategic vision and operations for technical consultancy services.",
        "Overseeing the integration of AI solutions for enterprise networking clients.",
        "Managing high-level stakeholder relationships and business development."
      ]
    },
    {
      id: 'e1',
      company: "Huawei Technologies",
      role: "Datacom Engineer",
      period: "2023 - 2025",
      description: [
        "Specialized in high-end routing and switching deployment using Huawei enterprise solutions.",
        "Provided technical support and network optimization for large-scale infrastructure projects.",
        "Integrated AI principles into network troubleshooting workflows for faster resolution times."
      ]
    },
    {
      id: 'e2',
      company: "Global Tech Services",
      role: "Network Infrastructure Specialist",
      period: "2018 - 2023",
      description: [
        "Managed large-scale data center switches and routing protocols including BGP and OSPF.",
        "Optimized network performance for enterprise clients through advanced traffic engineering.",
        "Automated repetitive configuration tasks using Python scripts and network automation tools."
      ]
    }
  ],
  education: [
    {
      id: 'edu1',
      institution: "University of Derby",
      degree: "MSc Information Technology",
      period: "Ongoing",
      description: "Advanced study focusing on modern IT infrastructures, cloud computing, and emerging technology management."
    }
  ],
  skills: [
    { name: "Strategic Leadership", level: 95, category: "Soft Skills" },
    { name: "Huawei Datacom (HCIA)", level: 98, category: "Backend" },
    { name: "Routing & Switching", level: 95, category: "Backend" },
    { name: "Network Security", level: 90, category: "Backend" },
    { name: "Python / AI Scripting", level: 85, category: "Tools" },
    { name: "SD-WAN / MPLS", level: 92, category: "Backend" },
    { name: "Cloud Integration", level: 80, category: "Tools" },
    { name: "Business Strategy", level: 88, category: "Soft Skills" }
  ]
};
