import type { CV } from '@/types/cv';
import type { Estudio } from '@/types/estudio';
import type { Proyect } from '@/types/proyect';
import type { Web } from '@/types/web';
import type { Certification } from '@/types/certification';
import type { Experience } from '@/types/experience';
import type { Idioma } from '@/types/idioma';
import type { Formacion } from '@/types/formacion';

export interface CvFull {
    cv: CV;
    sections: {
        estudios: Estudio[];
        proyectos: Proyect[];
        webs: Web[];
        certificaciones: Certification[];
        experiencias: Experience[];
        idiomas: Idioma[];
        formaciones: Formacion[];
    }
}