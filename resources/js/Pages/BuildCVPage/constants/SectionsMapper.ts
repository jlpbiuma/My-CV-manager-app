import EstudiosSection from "@/Pages/BuildCVPage/components/sections/EstudiosSection"
import ProyectosSection from "@/Pages/BuildCVPage/components/sections/ProyectosSection"
import WebsSection from "@/Pages/BuildCVPage/components/sections/WebsSection"
import CertificationsSection from "@/Pages/BuildCVPage/components/sections/CertificationsSection"
import ExperiencesSection from "@/Pages/BuildCVPage/components/sections/ExperiencesSection"
import IdiomaSection from "@/Pages/BuildCVPage/components/sections/IdiomaSection"
import FormacionSection from "@/Pages/BuildCVPage/components/sections/FormacionSection"
import type { CvFull } from "@/types/cv_full"
// export const SECTION_MAP = {
//     experiencias: {
//       name: "Experiencia",
//       icon: "💼",
//       component: ExperiencesSection,
//     },
//     formaciones: {
//       name: "Educación",
//       icon: "🎓",
//       component: FormacionSection,
//     },
//     estudios: {
//       name: "Estudios",
//       icon: "📚",
//       component: EstudiosSection,
//     },
//     proyectos: {
//       name: "Proyectos",
//       icon: "📂",
//       component: ProyectosSection,
//     },
//     webs: {
//       name: "Webs",
//       icon: "🌍",
//       component: WebsSection,
//     },
//     certificaciones: {
//       name: "Certificaciones",
//       icon: "🏅",
//       component: CertificationsSection,
//     },
//     idiomas: {
//       name: "Idiomas",
//       icon: "🗣️",
//       component: IdiomaSection,
//     },
//   }

export const SECTION_MAP = {
    experiencias: {
      name: "Experiencia",
      icon: "💼",
      component: ExperiencesSection,
      itemTitle: (data: any) => data.title || "Experience",
      getItems: (sections: CvFull["sections"]) => sections.experiencias || []
    },
    formaciones: {
      name: "Educación",
      icon: "🎓",
      component: FormacionSection,
      itemTitle: (data: any) => data.degree || "Education",
      getItems: (sections: CvFull["sections"]) => sections.formaciones || []
    },
    estudios: {
      name: "Estudios",
      icon: "📚",
      component: EstudiosSection,
      itemTitle: (data: any) => data.degree || "Study",
      getItems: (sections: CvFull["sections"]) => sections.estudios || []
    },
    proyectos: {
      name: "Proyectos",
      icon: "📂",
      component: ProyectosSection,
      itemTitle: (data: any) => data.title || "Project",
      getItems: (sections: CvFull["sections"]) => sections.proyectos || []
    },
    certificaciones: {
      name: "Certificaciones",
      icon: "🏅",
      component: CertificationsSection,
      itemTitle: (data: any) => data.name || "Certification",
      getItems: (sections: CvFull["sections"]) => sections.certificaciones || []
    },
    idiomas: {
      name: "Idiomas",
      icon: "🗣️",
      component: IdiomaSection,
      itemTitle: (data: any) => data.language || "Language",
      getItems: (sections: CvFull["sections"]) => sections.idiomas || []
    },
    webs: {
      name: "Webs",
      icon: "🌍",
      component: WebsSection,
      itemTitle: (data: any) => data.type || "Website",
      getItems: (sections: CvFull["sections"]) => sections.webs || []
    }
  }

export type SectionType = keyof typeof SECTION_MAP

