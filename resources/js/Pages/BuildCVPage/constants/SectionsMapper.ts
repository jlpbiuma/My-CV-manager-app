import EstudiosSection from "@/Pages/BuildCVPage/components/sections/EstudiosSection"
import ProyectosSection from "@/Pages/BuildCVPage/components/sections/ProyectosSection"
import WebsSection from "@/Pages/BuildCVPage/components/sections/WebsSection"
import CertificationsSection from "@/Pages/BuildCVPage/components/sections/CertificationsSection"
import ExperiencesSection from "@/Pages/BuildCVPage/components/sections/ExperiencesSection"
import IdiomaSection from "@/Pages/BuildCVPage/components/sections/IdiomaSection"
import FormacionSection from "@/Pages/BuildCVPage/components/sections/FormacionSection"

export const SECTION_MAP = {
    experiencias: {
      name: "Experiencia",
      icon: "💼",
      component: ExperiencesSection,
    },
    formaciones: {
      name: "Educación",
      icon: "🎓",
      component: FormacionSection,
    },
    estudios: {
      name: "Estudios",
      icon: "📚",
      component: EstudiosSection,
    },
    proyectos: {
      name: "Proyectos",
      icon: "📂",
      component: ProyectosSection,
    },
    webs: {
      name: "Webs",
      icon: "🌍",
      component: WebsSection,
    },
    certificaciones: {
      name: "Certificaciones",
      icon: "🏅",
      component: CertificationsSection,
    },
    idiomas: {
      name: "Idiomas",
      icon: "🗣️",
      component: IdiomaSection,
    },
  }

export type SectionType = keyof typeof SECTION_MAP

