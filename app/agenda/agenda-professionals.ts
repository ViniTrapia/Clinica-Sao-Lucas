import type { Professional } from './schedule';

// Cadastro recebido em 24/09/2026 e ampliado em 06/10/2026 (especialidades e novos profissionais); separado das ocorrências semanais.
export const agendaProfessionals: Professional[] = [
  {
    "id": "luiz-claudio",
    "name": "Dr Luiz Cláudio",
    "area": "Neurologista",
    "photo": "/profissionais/agenda/luiz-claudio.webp",
    "heroPhoto": "/profissionais/hero/luiz-claudio.webp",
    "bio": "Cuidado neurológico atento às particularidades de cada pessoa."
  },
  {
    "id": "reynaldo-martinez",
    "name": "Dr Reynaldo Lahitte Martinez",
    "area": "Atendimento em Reumatologia",
    "photo": "/profissionais/agenda/reynaldo-martinez.webp",
    "bio": "Atenção em reumatologia com escuta cuidadosa e acompanhamento individualizado.",
    "specialties": [
      {
        "title": "Atendimento em Reumatologia",
        "items": [
          "Dores articulares, ósseas e musculares",
          "Artrose e artrite",
          "Bursite e tendinite",
          "Artrite reumatoide, lúpus eritematoso e gota",
          "Lombalgia e dorsalgia",
          "Fibromialgia e síndrome dolorosa miofascial",
          "Infiltrações articulares e periarticulares",
          "Agulhamento a seco",
          "Acupuntura"
        ]
      }
    ]
  },
  {
    "id": "ademy-landim",
    "name": "Dr. Ademy Barros Landim",
    "area": "Pediatra e Neonatologista",
    "photo": "/profissionais/agenda/ademy-landim.webp",
    "heroPhoto": "/profissionais/hero/ademy-landim.webp",
    "bio": "Cuidado dedicado à saúde de bebês, crianças e adolescentes.",
    "specialties": [
      {
        "items": [
          "Acompanhamento e Desenvolvimento Infantil",
          "Acompanhamento de Prematuros",
          "Consulta Especializada",
          "Introdução Alimentar",
          "Distúrbios Alimentares",
          "Teste do Coraçãozinho",
          "Alergias/Imunologia",
          "Teste do Olhinho",
          "Amamentação",
          "Sala de Parto"
        ]
      }
    ]
  },
  {
    "id": "alexandre-torres",
    "name": "Dr. Alexandre Torres",
    "area": "Endocrinologista e Ultrasonografia",
    "photo": "/profissionais/agenda/alexandre-torres.webp",
    "heroPhoto": "/profissionais/hero/alexandre-torres.webp",
    "bio": "Avaliação endocrinológica integrada a uma escuta próxima e cuidadosa.",
    "specialties": [
      {
        "title": "Ultrassonografia",
        "items": [
          "Região cervical",
          "Tireoide",
          "Região inguinal",
          "Ombro",
          "Abdome superior",
          "Abdome total",
          "Próstata",
          "Fígado e Vias Biliares",
          "Rins e Vias Urinárias",
          "Obstétrica",
          "Mamária",
          "Testículos",
          "Parede Abdominal",
          "Partes moles",
          "Cotovelo",
          "Punho",
          "Joelho",
          "Tornozelo"
        ]
      },
      {
        "title": "Endocrinologia",
        "items": [
          "Doenças da tireoide",
          "Diabetes e pré-diabetes",
          "Obesidade",
          "Osteoporose",
          "Desordens Hormonais",
          "Baixa estatura de crianças",
          "Colesterol e triglicerídeos"
        ]
      }
    ]
  },
  {
    "id": "ariane-matos",
    "name": "Dra Ariane Matos",
    "area": "Fonoaudiologa",
    "photo": "/profissionais/agenda/ariane-matos.webp",
    "bio": "Comunicação e desenvolvimento acompanhados com sensibilidade em cada etapa.",
    "specialties": [
      {
        "items": [
          "Atraso de fala e da linguagem",
          "Transtorno do espectro autista",
          "Intervenção precoce",
          "PODD",
          "Aplicadora ABA",
          "Estimulação de comunicação social",
          "Síndrome de Down",
          "Seletividade alimentar"
        ]
      }
    ]
  },
  {
    "id": "ermita-galdina",
    "name": "Dra Ermita Galdina",
    "area": "Psicopedagoga e Neuropsicopedagoga",
    "photo": "/profissionais/agenda/ermita-galdina.webp",
    "bio": "Aprendizagem e desenvolvimento acolhidos com olhar amplo e individualizado.",
    "specialties": [
      {
        "title": "Acompanhamento de Crianças e Adolescentes",
        "items": [
          "TDAH",
          "TEA (Transtorno do espectro autista)",
          "Deficiência intelectual",
          "Dificuldade de aprendizagem",
          "Terapia ABA"
        ]
      }
    ]
  },
  {
    "id": "eloisa-mello",
    "name": "Dra. Eloisa Mello",
    "area": "Psicologa Clinica e Neuro Psicologa",
    "photo": "/profissionais/agenda/eloisa-mello.webp",
    "bio": "Escuta clínica dedicada ao bem-estar emocional e às singularidades de cada pessoa.",
    "specialties": [
      {
        "items": [
          "Terapia cognitivo-comportamental",
          "Psicologia Infantil",
          "Psicoterapia",
          "Ludoterapia",
          "Capacitação em terapia ABA (Autismo)",
          "Sexologia, anatomia e patologias",
          "Perícia judicial e extrajudicial, laudos, parecer e avaliações psicológicas e neuropsicológicas"
        ]
      }
    ]
  },
  {
    "id": "carolline-carvalho",
    "name": "Dra. Carolline Carvalho",
    "area": "Psicologa Infantil",
    "photo": "/profissionais/agenda/carolline-carvalho.webp",
    "bio": "Acolhimento infantil com escuta sensível para crianças e suas famílias.",
    "specialties": [
      {
        "items": [
          "Especialista nos Transtornos do Neurodesenvolvimento: TEA • TDAH • TOD • DI",
          "Pós-graduanda em Análise do Comportamento Aplicada (ABA)",
          "Pós-graduanda em Neuropsicologia",
          "Intervenção Precoce Baseada no Modelo DENVER",
          "Intervenção TCC",
          "Intervenção ABA"
        ]
      }
    ]
  },
  {
    "id": "edilma-carvalho",
    "name": "Dra. Edilma Carvalho",
    "area": "Psicologa",
    "photo": "/profissionais/agenda/edilma-carvalho.webp",
    "bio": "Um espaço de escuta, acolhimento e cuidado com a saúde emocional.",
    "specialties": [
      {
        "title": "Atendimento",
        "items": [
          "Criança",
          "Adolescente",
          "Adulto"
        ]
      }
    ]
  },
  {
    "id": "flora-carolina",
    "name": "Dra. Flora Carolina",
    "area": "Terapeuta Oculpacional",
    "photo": "/profissionais/agenda/flora-carolina.webp",
    "bio": "Autonomia e qualidade de vida trabalhadas por meio de atividades significativas."
  },
  {
    "id": "giselle-skarlet",
    "name": "Dra. Giselle Skarlet",
    "area": "Fisioterapeuta",
    "photo": "/profissionais/agenda/giselle-skarlet.webp",
    "bio": "Movimento, funcionalidade e bem-estar acompanhados de forma individualizada.",
    "specialties": [
      {
        "items": [
          "Lesões esportivas",
          "Fisioterapia pré e pós-operatório",
          "Pilates",
          "RPG",
          "Hidroterapia",
          "Lesões ortopédicas e traumáticas: patologias congênitas e/ou adquiridas, como fraturas, entorses, luxações, contusões etc.",
          "Fisioterapia Neurológica: AVE, paralisia cerebral, síndromes pediátricas e geriátricas etc.",
          "Fisioterapia Cardiovascular: pré e pós-operatório",
          "Fisioterapia Respiratória"
        ]
      }
    ]
  },
  {
    "id": "ilka-gominho",
    "name": "Dra. Ilka Gominho",
    "area": "Ginecologista e Obstetra",
    "photo": "/profissionais/agenda/ilka-gominho.webp",
    "heroPhoto": "/profissionais/hero/ilka-gominho.webp",
    "bio": "Cuidado com a saúde da mulher em diferentes momentos da vida.",
    "specialties": [
      {
        "items": [
          "Consulta Ginecológica",
          "Consulta Puerperal",
          "Pré-natal Alto e Baixo Risco",
          "Planejamento Familiar",
          "Climatério-Menopausa",
          "Citologia Oncótica",
          "Captura híbrida",
          "Colposcopia",
          "Inserção de Implanon",
          "Inserção e remoção de DIU",
          "Cauterização de feridas",
          "Biópsia do colo do útero",
          "Aplicação de ATA",
          "Cauterização do colo uterino, swab vaginal e retal",
          "Captura/Genotipagem",
          "Cultura para fungos",
          "Biópsia do colo uterino",
          "Retirada de pólio endocervical com biópsia"
        ]
      },
      {
        "title": "Ultrassonografias",
        "items": [
          "USG obstétrica",
          "USG Transvaginal",
          "USG Pélvica",
          "USG de Mama"
        ]
      }
    ]
  },
  {
    "id": "karina-hirose",
    "name": "Dra. Karina Hirose",
    "area": "Pneumologia",
    "photo": "/profissionais/agenda/karina-hirose.webp",
    "bio": "Atenção à saúde respiratória com avaliação cuidadosa e acompanhamento próximo.",
    "summary": "Respirar bem é viver melhor!",
    "specialties": [
      {
        "items": [
          "Asma",
          "Bronquite/DPOC",
          "Falta de ar",
          "Tosse persistente",
          "Pneumonias",
          "Tuberculose",
          "Síndrome pós-Covid-19",
          "Nódulos pulmonares",
          "Tabagismo",
          "Exame de Espirometria"
        ]
      }
    ]
  },
  {
    "id": "layane-barros",
    "name": "Dra. Layane Barros",
    "area": "Nutricionista",
    "photo": "/profissionais/agenda/layane-barros.webp",
    "bio": "Orientação nutricional construída a partir da rotina e das necessidades individuais.",
    "summary": "Te ajudo a avançar no seu processo de emagrecimento e definição.",
    "specialties": [
      {
        "items": [
          "Especialista em Nutrição Clínica, Metabolismo e Fisiologia do Esporte",
          "Expertise em Emagrecimento e Hipertrofia",
          "Pioneira em controle e tratamento de diabetes gestacional"
        ]
      }
    ]
  },
  {
    "id": "louise-torres",
    "name": "Dra. Louise Torres",
    "area": "Gastroenterologista e Endoscopia Digestiva Alta",
    "photo": "/profissionais/agenda/louise-torres.webp",
    "heroPhoto": "/profissionais/hero/louise-torres.webp",
    "bio": "Cuidado digestivo com atenção clínica, escuta e orientação clara.",
    "specialties": [
      {
        "items": [
          "Gastrite",
          "Doença do refluxo",
          "Esofagites",
          "Esteatose Hepática (gordura no fígado)",
          "Hepatites",
          "Intolerâncias e alergias alimentares",
          "Doenças intestinais",
          "Constipação",
          "Diarreias"
        ]
      }
    ]
  },
  {
    "id": "ludmila-magalhaes",
    "name": "Dra. Ludmila Magalhães",
    "area": "Psicologa",
    "photo": "/profissionais/agenda/ludmila-magalhaes.webp",
    "bio": "Acolhimento psicológico com respeito ao tempo e à história de cada pessoa.",
    "specialties": [
      {
        "items": [
          "Atendimento infantojuvenil, adulto e idosos",
          "Avaliação para vasectomia",
          "Avaliação para cirurgia bariátrica",
          "Acompanhamento pós-cirurgia bariátrica",
          "Orientação de pais"
        ]
      }
    ]
  },
  {
    "id": "maria-paula",
    "name": "Dra. Maria Paula",
    "area": "Psicologa",
    "photo": "/profissionais/agenda/maria-paula.webp",
    "bio": "Escuta psicológica próxima para apoiar equilíbrio emocional e qualidade de vida.",
    "specialties": [
      {
        "items": [
          "Atendimento infantil e adolescente",
          "Terapeuta ABA",
          "Orientação para pais",
          "Atendimento adulto para mulheres"
        ]
      }
    ]
  },
  {
    "id": "silvania-melo",
    "name": "Dra. Silvania de Melo",
    "area": "Psicopedagoga",
    "photo": "/profissionais/agenda/silvania-melo.webp",
    "bio": "Acompanhamento da aprendizagem com acolhimento e atenção às necessidades individuais.",
    "specialties": [
      {
        "title": "Formação",
        "items": [
          "Pedagoga",
          "Psicopedagoga",
          "Libras/Braille"
        ]
      },
      {
        "title": "Cursando",
        "items": [
          "Neuropsicopedagogia Clínica",
          "Terapia Ocupacional",
          "Intervenção Precoce no Autismo"
        ]
      },
      {
        "title": "Atuação",
        "items": [
          "Transtorno do Espectro Autista",
          "TDAH",
          "Dificuldade de Aprendizagem"
        ]
      }
    ]
  },
  {
    "id": "itala-freire",
    "name": "Dra. Ítala Freire",
    "area": "Nutricionista",
    "photo": "/profissionais/agenda/itala-freire.webp",
    "bio": "Nutrição orientada para escolhas possíveis, equilíbrio e cuidado cotidiano.",
    "specialties": [
      {
        "items": [
          "Plano alimentar individualizado para Emagrecimento, Hipertrofia, Tratamento e Doenças Crônicas",
          "Anamnese Clínica; Avaliação Antropométrica e Bioimpedância",
          "Orientações Nutricionais",
          "Suporte Nutricional pós-consulta",
          "Acompanhamento a todas as faixas etárias"
        ]
      }
    ]
  },
  {
    "id": "joceane-ramos",
    "name": "Joceane Ramos",
    "area": "Procedimentos Esteticos",
    "photo": "/profissionais/agenda/joceane-ramos.webp",
    "bio": "Procedimentos estéticos conduzidos com atenção, cuidado e naturalidade.",
    "specialties": [
      {
        "title": "Procedimentos faciais",
        "items": [
          "Limpeza de Pele Profunda – Método Splendor",
          "Splendor Diamond Glow – dermaplaning, microagulhamento e peeling herbal",
          "Splendor Brows Design – design de sobrancelhas personalizado com henna ou tintura",
          "Splendor Shadow Brows – micropigmentação de sobrancelhas",
          "Splendor Lip Perfection – hidratação profunda, efeito batom e neutralização labial"
        ]
      },
      {
        "title": "Procedimentos corporais",
        "items": [
          "Massagem Tríade – drenagem, modelagem e relaxamento",
          "Hidrolipoclasia Ultrassônica – reduza gordura localizada e modele seu corpo sem cirurgia",
          "Pés de Ouro – desbaste de calosidades, esfoliação e hidratação profunda"
        ]
      },
      {
        "title": "Outros serviços",
        "items": [
          "Epilação",
          "Lash Design – Extensão de Cílios"
        ]
      }
    ]
  },
  {
    "id": "samuel-caetano",
    "name": "MT. Samuel Caetano",
    "area": "Musicoterapeuta",
    "photo": "/profissionais/agenda/samuel-caetano.webp",
    "bio": "A música como caminho de expressão, vínculo e cuidado terapêutico."
  },
  {
    "id": "luiz-eneas",
    "name": "Dr. Luiz Enéas",
    "area": "Cirurgião-dentista · Especialista em Implantodontia",
    "photo": "/dentistry/luiz-eneas.webp",
    "bio": "Especialista em Implantodontia, com atendimento voltado à reabilitação oral por meio de implantes, próteses e procedimentos estéticos.",
    "specialties": [
      {
        "title": "Especialista em Implantodontia",
        "items": [
          "Implante",
          "Prótese fixa",
          "Prótese móvel",
          "Cirurgia oral menor",
          "Estética",
          "Facetas"
        ]
      }
    ]
  },
  {
    "id": "isadora-carvalho",
    "name": "Dra. Isadora Carvalho",
    "area": "Especialista em Endodontia",
    "photo": "/dentistry/isadora-carvalho.webp",
    "bio": "Atendimento especializado em Endodontia, área dedicada ao diagnóstico e tratamento da parte interna dos dentes e à preservação do sorriso.",
    "specialties": [
      {
        "items": [
          "Atendimento adulto e infantil",
          "Teste da linguinha/Frenectomia",
          "Tratamento endodôntico (Canal)",
          "Retratamento endodôntico",
          "Clareamento dentário",
          "Gengivoplastia",
          "Exodontia (extração)",
          "Restaurações",
          "Limpeza e profilaxia"
        ]
      }
    ]
  },
  {
    "id": "vinicius-belfort",
    "name": "Dr. Vinícius Belfort",
    "area": "Cirurgião-dentista · Clínico geral",
    "photo": "/dentistry/vinicius-belfort.webp",
    "bio": "Clínico geral com atendimento em prevenção e estética dental, reunindo limpeza, clareamento e restaurações em um cuidado próximo.",
    "specialties": [
      {
        "items": [
          "Restaurações estéticas em resina",
          "Tratamento dessensibilizante",
          "Clareamento dentário",
          "Revitalização de esmalte",
          "Gengivoplastia",
          "Profilaxia, limpeza e aplicação de flúor"
        ]
      }
    ]
  },
  {
    "id": "bryan-edipo",
    "name": "Dr. Bryan Édipo",
    "area": "Biomedicina estética e terapia",
    "photo": "/profissionais/agenda/bryan-edipo.webp",
    "specialties": [
      {
        "items": [
          "Estética Facial e Corporal",
          "Harmonização Facial e Corporal",
          "Remoção de Sinais, Verruga e Queloide",
          "Perfuração de Brinco e Piercing Humanizado",
          "Loboluplastia",
          "Otomodelação",
          "Micropigmentação Labial e Camuflagem Paramédica",
          "Ultrassom Estético para Fibrose",
          "Taping Pós-Operatório",
          "Endermoterapia",
          "Bumbum Pump Up",
          "Peeling de Diamante",
          "Terapias Relaxantes para Questões Emocionais e Dores"
        ]
      }
    ]
  },
  {
    "id": "debora-cordeiro",
    "name": "Débora Cordeiro",
    "area": "Enfermeira e Estética Avançada",
    "photo": "/profissionais/agenda/debora-cordeiro.webp",
    "specialties": [
      {
        "items": [
          "Botox",
          "Skinbooster",
          "Peelings químicos",
          "Microagulhamento",
          "Preenchimento labial",
          "Limpeza de pele profunda",
          "Tratamento para melasma",
          "Tratamento para acne",
          "Tratamento para estrias",
          "Remoção de sinais e verrugas",
          "Clareamento corporal",
          "PEIM (Tratamento para microvasos)",
          "Hidragloss",
          "Dermaplaning"
        ]
      }
    ]
  },
  {
    "id": "robson-oliveira",
    "name": "Dr. Robson Oliveira",
    "area": "Otorrinolaringologista",
    "photo": "/profissionais/agenda/robson-oliveira.webp",
    "heroPhoto": "/profissionais/hero/robson-oliveira.webp",
    "summary": "Médico especializado no diagnóstico e tratamento, clínico e cirúrgico, das doenças dos ouvidos, nariz, garganta, laringe e pescoço.",
    "specialties": [
      {
        "title": "Atendimento adulto e infantil",
        "items": [
          "Videolaringoscopia",
          "Laringoscopia",
          "Nasofibrolaringoscopia",
          "Lavagem otológica"
        ]
      }
    ]
  },
  {
    "id": "vinicius-alves",
    "name": "Dr. Vinícius Alves",
    "area": "Atendimento médico geral para adultos",
    "photo": "/profissionais/agenda/vinicius-alves.webp",
    "summary": "Consultas humanizadas, com abordagem clínica integral voltada ao diagnóstico, tratamento e acompanhamento de doenças comuns em diferentes áreas da medicina.",
    "specialties": [
      {
        "items": [
          "Avaliação clínica completa",
          "Investigação de sintomas sem diagnóstico",
          "Acompanhamento de condições crônicas",
          "Manejo inicial de questões relacionadas a diversas especialidades",
          "Encaminhamento responsável, quando necessário"
        ]
      }
    ]
  },
  {
    "id": "vinicius-aquino",
    "name": "Dr. Vinícius Aquino",
    "area": "Nutricionista",
    "photo": "/profissionais/agenda/vinicius-aquino.webp",
    "specialties": [
      {
        "title": "Nutrição Clínica e Esportiva",
        "items": [
          "Nutrição no tratamento de doenças",
          "Atletas em geral"
        ]
      },
      {
        "title": "Neuro e Psiquiatria Nutricional",
        "items": [
          "Pacientes com Ansiedade, Depressão, Distúrbios do Sono e Transtornos Alimentares"
        ]
      }
    ]
  },
  {
    "id": "cleobenysson-cruz",
    "name": "Dr. Cleobenysson Cruz",
    "area": "Cardiologista",
    "photo": "/profissionais/agenda/cleobenysson-cruz.webp",
    "specialties": [
      {
        "items": [
          "Ecocardiograma",
          "Eletrocardiograma",
          "Parecer cardiológico"
        ]
      }
    ]
  },
  {
    "id": "vivianne-araujo",
    "name": "Dra. Vivianne Araújo",
    "area": "Atendimento em pediatria",
    "photo": "/profissionais/agenda/vivianne-araujo.webp",
    "specialties": [
      {
        "title": "Atendimento em pediatria",
        "items": [
          "Acompanhamento de rotina",
          "Tratamento e acompanhamento de doenças da infância",
          "Desenvolvimento e crescimento",
          "Atendimento de urgência"
        ]
      }
    ]
  },
  {
    "id": "arielly-ferraz",
    "name": "Dra. Arielly Ferraz",
    "area": "Neurologia Adulta e Neuropediatria",
    "photo": "/profissionais/agenda/arielly-ferraz.webp",
    "specialties": [
      {
        "title": "Neurologia Adulta",
        "items": [
          "Cefaleia e enxaqueca",
          "Tontura e vertigem",
          "Convulsões",
          "Fraqueza e formigamentos",
          "Memória e atenção",
          "Tremores e movimentos",
          "Distúrbios do sono"
        ]
      },
      {
        "title": "Neuropediatria",
        "items": [
          "TEA (Autismo)",
          "TDAH",
          "Atraso no desenvolvimento",
          "Comportamento e linguagem"
        ]
      }
    ]
  },
  {
    "id": "raquel-andrade",
    "name": "Dra. Raquel Andrade",
    "area": "Nutricionista",
    "photo": "/profissionais/agenda/raquel-andrade.webp",
    "specialties": [
      {
        "items": [
          "Emagrecimento",
          "Hipertrofia muscular",
          "Reeducação Alimentar",
          "Avaliação corporal",
          "Anemias",
          "Alergias e Intolerâncias",
          "Diabetes",
          "Hipertensão",
          "Endometriose",
          "Síndrome do Ovário Policístico (SOP)",
          "Doenças Cardiovasculares",
          "Doenças Gastrointestinais",
          "Hipotireoidismo",
          "Hipertireoidismo"
        ]
      }
    ]
  },
  {
    "id": "emiliane-cruz",
    "name": "Emiliane Cruz",
    "area": "Especialista em Harmonização Orofacial",
    "photo": "/profissionais/agenda/emiliane-cruz.webp",
    "specialties": [
      {
        "items": [
          "Botox",
          "Preenchimento labial",
          "Preenchimento full face",
          "Rinomodelação",
          "Lipo enzimática",
          "Emagrecimento facial",
          "Fios de PDO",
          "Bioestimuladores de Colágeno",
          "Skinbooster",
          "Ultraformer MPT",
          "Laser Lavieen"
        ]
      }
    ]
  },
  {
    "id": "nayara-kelly",
    "name": "Nayara Kelly",
    "area": "Psicóloga Bilíngue",
    "photo": "/profissionais/agenda/nayara-kelly.webp",
    "summary": "Pós-graduada em Terapia Cognitivo-Comportamental.",
    "specialties": [
      {
        "title": "Atendimento a",
        "items": [
          "Crianças",
          "Adolescentes",
          "Adultos",
          "Surdos"
        ]
      },
      {
        "title": "Nas modalidades de",
        "items": [
          "Psicoterapia Individual",
          "Avaliações Psicológicas",
          "Avaliação Psicológica Escolar",
          "Avaliação Psicossocial para Assistência Social"
        ]
      },
      {
        "title": "Com expertise em",
        "items": [
          "Psicologia Escolar e Educacional: Pedagogia Científica/Método Montessori",
          "Atuação Psicossocial: Psicologia Social e Histórico-Cultural",
          "Investigação Surda e Sertaneja: Psicologia do Interior"
        ]
      }
    ]
  },
  {
    "id": "caio-alves",
    "name": "Dr. Caio Alves",
    "area": "Atendimento em Cardiologia",
    "photo": "/profissionais/agenda/caio-alves.webp"
  },
  {
    "id": "dhiego-ramalho",
    "name": "Dr. Dhiego Ramalho",
    "area": "Dermatologista e Medicina Estética",
    "photo": "/profissionais/agenda/dhiego-ramalho.webp",
    "heroPhoto": "/profissionais/hero/dhiego-ramalho.webp",
    "specialties": [
      {
        "items": [
          "Avaliação global de pele",
          "Alergias / Alopecia",
          "Harmonização Facial",
          "Dermatites e Eczemas",
          "Congelamento / Estrias",
          "Tratamento de Olheiras",
          "Acne / Rosácea / Melasma",
          "Câncer de pele / Micoses",
          "Otoplastia / Cantoplastia",
          "Microagulhamento Capilar",
          "Peelings / Toxina Botulínica",
          "Psoríase / Queda de Cabelo",
          "Remoção de sinais e pintas",
          "Retirada do código de barra",
          "Rugas estáticas e dinâmicas",
          "Alterações de unha e cabelo",
          "Remoção de cistos e lipomas",
          "Remoção de verrugas e outros",
          "Microagulhamento combinado",
          "Rinomodelação / Bigode Chinês",
          "Correção de cicatrizes e queloide",
          "Intradermoterapia facial e capilar",
          "Terapia combinada para melasma",
          "Clareamento de virilha, axila, buço",
          "Correção de unhas / Escleroterapia",
          "Dermatoscopia / Dermatoses virais",
          "Crescimento e fortalecimento capilar",
          "Blefaroplastia cirúrgica e não cirúrgica",
          "Lifting / Subcisão / Ácido Tranexâmico",
          "Preenchimento de mandíbula e labial",
          "Calosidades em pés, mãos e cotovelos"
        ]
      }
    ]
  },
  {
    "id": "marcelo-amaral",
    "name": "Dr. Marcelo Amaral",
    "area": "Ortopedista / Traumatologista",
    "photo": "/profissionais/agenda/marcelo-amaral.webp",
    "specialties": [
      {
        "items": [
          "Intervenção em dor: infiltração e bloqueios",
          "Acupuntura e eletroacupuntura + auriculoacupuntura",
          "Mesoterapia; terapia neural e intradermoterapia",
          "Dor de cabeça",
          "Síndrome do túnel do carpo",
          "Fraturas vertebrais",
          "Estenose espinhal",
          "Espondilolistese",
          "Escoliose",
          "Espondilose cervical",
          "Hérnia de disco",
          "Lesões ligamentares",
          "Artrite reumatoide, osteoporose e fibromialgia",
          "Fascite plantar",
          "Bursite",
          "Lesões musculares",
          "Tendinite",
          "Osteoartrite (artrose)"
        ]
      }
    ]
  },
  {
    "id": "renata-filgueira",
    "name": "Dra. Renata Filgueira",
    "area": "Psiquiatra",
    "photo": "/profissionais/agenda/renata-filgueira.webp",
    "specialties": [
      {
        "items": [
          "Transtornos alimentares",
          "Transtornos de ansiedade",
          "Transtornos depressivos",
          "Transtornos mentais",
          "Tratamento para vícios (drogas, álcool e tabagismo)",
          "Transtorno bipolar e esquizofrenia",
          "Psiquiatria na adolescência e fase adulta"
        ]
      }
    ]
  },
  {
    "id": "suila-lima",
    "name": "Dra. Suila Lima",
    "area": "Fisioterapeuta",
    "photo": "/profissionais/agenda/suila-lima.webp",
    "summary": "Especializanda em reabilitação da coluna.",
    "specialties": [
      {
        "title": "Áreas de atuação",
        "items": [
          "Ortopédica – pós-operatório, reabilitação de lesões e alívio de dores musculares",
          "Neurológica – cuidados pós-AVC, Parkinson e neuropatias em geral",
          "Geriátrica – promoção da mobilidade, equilíbrio e qualidade de vida para idosos",
          "Gestantes – cuidados fisioterapêuticos durante a gestação, alívio de dores e preparo corporal para o parto",
          "Pilates Terapêutico – fortalecimento muscular e reabilitação funcional"
        ]
      },
      {
        "title": "Terapias complementares",
        "items": [
          "Ventosaterapia",
          "Liberação Miofascial",
          "Bandagem Elástica Funcional"
        ]
      }
    ]
  },
  {
    "id": "bruna-bastos",
    "name": "Dra. Bruna Bastos",
    "area": "Ginecologista/Obstetrícia e Ultrassonografia",
    "photo": "/profissionais/agenda/bruna-bastos.webp",
    "specialties": [
      {
        "items": [
          "Consulta Ginecológica",
          "Consulta Puerperal",
          "Pré-natal Alto e Baixo Risco",
          "Planejamento Familiar",
          "Climatério-Menopausa",
          "Citologia Oncótica",
          "Captura Híbrida",
          "Colposcopia",
          "Inserção de Implanon",
          "Inserção e remoção de DIU",
          "Cauterização de Feridas",
          "Biópsia do Colo do Útero",
          "Aplicação de ATA"
        ]
      },
      {
        "title": "Ultrassonografias",
        "items": [
          "USG Obstétrica",
          "USG Obstétrica com Doppler",
          "USG Obstétrica 3D",
          "USG Transvaginal",
          "USG Pélvica",
          "USG Mama",
          "USG Morfológica"
        ]
      }
    ]
  },
  {
    "id": "gracenilda-moura",
    "name": "Dra. Gracenilda Moura",
    "area": "Psicóloga Clínica / Neuropsicóloga",
    "photo": "/profissionais/agenda/gracenilda-moura.webp",
    "specialties": [
      {
        "items": [
          "Terapia cognitivo-comportamental",
          "Psicologia Infantil",
          "Psicoterapia",
          "Ludoterapia",
          "Capacitação em terapia ABA (Autismo)",
          "Sexologia, anatomia e patologias",
          "Perícia judicial e extrajudicial, laudos, parecer e avaliações psicológicas e neuropsicológicas"
        ]
      }
    ]
  },
  {
    "id": "yara-marques",
    "name": "Dra. Yara Marques",
    "area": "Fisioterapeuta Dermatofuncional",
    "photo": "/profissionais/agenda/yara-marques.webp",
    "specialties": [
      {
        "items": [
          "Botox",
          "Preenchimento Labial",
          "Preenchimento Facial",
          "Bioestimulador de colágeno",
          "Limpeza de Pele",
          "Peeling de Diamante",
          "Peeling Químico",
          "Microagulhamento com PDRN",
          "Drenagem linfática",
          "Pós-operatório de Cirurgias Plásticas Facial e Corporal",
          "Laserterapia",
          "Radiofrequência",
          "Corrente Russa",
          "Lipocavitação",
          "Lipo Enzimática",
          "Enzimas para tratamento de celulite",
          "Criolipólise"
        ]
      }
    ]
  },
  {
    "id": "thais-thesly",
    "name": "Thais Thesly",
    "area": "Podóloga Clínica",
    "photo": "/profissionais/agenda/thais-thesly.webp",
    "specialties": [
      {
        "items": [
          "Especialista em onicocriptose (unha encravada)",
          "Especialista em pé diabético (feridas e curativos avançados)",
          "Habilitada em ácidos (verrugas, sinais e cauterizações em geral)",
          "Especialista em jato de plasma",
          "Onicomicose (fungo)",
          "Onicofose",
          "Órtese ungueal",
          "Calos e calosidades",
          "Fissuras calcâneas",
          "Podopediatria (crianças)",
          "Podogeriatria (idosos)",
          "Patologias e podopatias (doenças dos pés e mãos)"
        ]
      }
    ]
  },
  {
    "id": "eduardo-bastos",
    "name": "Dr. Eduardo Bastos",
    "area": "Psiquiatra",
    "photo": "/profissionais/agenda/eduardo-bastos.webp",
    "specialties": [
      {
        "items": [
          "Transtornos alimentares",
          "Transtornos de ansiedade",
          "Transtornos depressivos",
          "Transtornos mentais",
          "Tratamento para vícios (drogas, álcool e tabagismo)",
          "Transtorno bipolar e esquizofrenia",
          "Psiquiatria na infância e adolescência"
        ]
      }
    ]
  }
];
