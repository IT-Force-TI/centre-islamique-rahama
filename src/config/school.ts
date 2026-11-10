// ============================================================================
//  PROFIL DE L'ÉTABLISSEMENT
//  C'est le fichier à adapter pour décliner le site pour une autre école :
//  identité, coordonnées, tarifs par défaut, textes de l'accueil, cycles, FAQ…
//  Les images référencées se trouvent dans le dossier public/.
//
//  En mode API, les coordonnées et les tarifs (bloc `settings`) sont ensuite
//  remplacés par ceux enregistrés dans l'administration (GET /api/public/settings).
// ============================================================================
import type { Settings } from '../models'

export interface CycleProfile {
  /**
   * Valeur technique du cycle. Doit correspondre aux cycles acceptés par le backend
   * (utils/schemas.js) : Maternelle / Primaire / Collège. N'est pas affichée telle quelle.
   */
  name: string
  /** Libellé affiché sur le site (ex. « Préscolaire » pour la valeur technique « Maternelle »). */
  label: string
  /** Segment d'URL de la page d'admission : /admissions/<slug>. */
  slug: string
  age: string
  text: string
  /** Classes proposées. Doivent correspondre aux classes acceptées par le backend. */
  classes: string[]
  skills: string[]
  programs: { icon: string; title: string; text: string }[]
}

export interface SchoolProfile {
  /** Identifiant technique (sert aussi de clé de stockage des fake data). */
  id: string
  logo: string
  /** Valeurs par défaut des paramètres (affichées avant chargement et utilisées par les fake data). */
  settings: Settings
  footerText: string
  hero: { eyebrow: string; titleLines: string[]; highlight: string; intro: string; images: string[] }
  founder: {
    photo: string
    photoAlt: string
    eyebrow: string
    titleLines: string[]
    greeting: string
    paragraphs: string[]
    signature: string
  }
  history: { title: string; paragraphs: string[]; stats: { value: string; label: string }[] }
  values: { icon: string; title: string; text: string }[]
  faq: { q: string; a: string; link?: { to: string; label: string } }[]
  cycles: CycleProfile[]
  admissions: { documents: string[] }
}

// ----------------------------------------------------------------------------
//  CENTRE ISLAMIQUE RAHAMA — Koumongou (Nord-Togo)
//  Établissement confessionnel islamique franco-arabe, agréé par l'État, aligné sur les
//  programmes réformés de l'enseignement franco-arabe au Togo.
//  Cycles : Primaire franco-arabe (CEPE) et Collège franco-arabe (BEPC).
//  Données vérifiées : nom, statut, téléphone, localité (pont de Koumongou), cycles, examens.
//  Données FICTIVES / À CONFIRMER : préfecture exacte, présence de la mosquée et de l'espace
//  communautaire, slogan, e-mail, horaires, tarifs, effectifs, nom du directeur.
// ----------------------------------------------------------------------------
export const school: SchoolProfile = {
  id: 'centre-islamique-rahama-koumongou',
  logo: '/rahama-logo.png',
  settings: {
    name: 'Centre Islamique Rahama — Complexe Scolaire Franco-Arabe',
    shortName: 'Centre Islamique Rahama',
    slogan: 'SAVOIR, FOI ET DISCIPLINE',
    address: 'Localité de Koumongou, près du pont de Koumongou — Nord-Togo',
    email: 'contact@centre-rahama.tg',
    phone: '+228 91 68 48 38',
    phone2: '',
    hours: 'Lundi – Jeudi : 7h00 – 17h00 · Vendredi : 7h00 – 12h00',
    annualFee: 50000,
    canteenFee: 300,
    badgeFee: 1000,
    uniformFee: 4000,
    apeFee: 2000,
  },
  footerText:
    'Établissement islamique franco-arabe agréé par l’État togolais, à Koumongou : du CP1 à la 3e, le programme officiel en français et l’enseignement de l’arabe et du Saint Coran, dans l’esprit de la miséricorde.',
  hero: {
    eyebrow: 'PIÉTÉ - DISCIPLINE - EXCELLENCE',
    titleLines: ['Centre Islamique', 'Franco-Arabe'],
    highlight: 'Rahama',
    intro:
      '« Rahama » signifie « miséricorde » en arabe. Au Centre Islamique Rahama de Koumongou, vos enfants apprennent l’arabe et le Saint Coran, ainsi que les mathématiques, le français et les sciences, dans le respect, la piété et la rigueur.',
    images: ['/hero/hero-1.jpg', '/hero/hero-2.jpg', '/hero/hero-3.jpg'],
  },
  founder: {
    photo: '/directeur-general.jpg',
    photoAlt: 'Le directeur du Centre Islamique Rahama',
    eyebrow: 'UN MOT DU DIRECTEUR',
    titleLines: ['La foi et le savoir,', 'main dans la main.'],
    greeting: 'Chers parents, chers élèves,',
    paragraphs: [
      'Notre centre porte le nom de « Rahama », la miséricorde. C’est dans cet esprit que nous accueillons chaque enfant : avec bienveillance, mais aussi avec l’exigence qui permet de grandir et de réussir.',
      'Nous voulons former des jeunes pieux, respectueux et disciplinés, qui maîtrisent la langue arabe et le Saint Coran, et qui réussissent aussi brillamment en mathématiques, en français et en sciences, jusqu’au CEPE et au BEPC.',
    ],
    signature: 'Le Directeur',
  },
  history: {
    title: 'Notre Histoire',
    paragraphs: [
      'Le Centre Islamique Rahama est implanté dans la localité de Koumongou, dans le Nord du Togo, connue pour son grand pont moderne qui relie les axes routiers du nord du pays.',
      'Établissement confessionnel islamique agréé par l’État togolais, il est structuré en complexe scolaire franco-arabe et suit les programmes réformés de l’enseignement franco-arabe : le programme officiel togolais en français, associé à l’enseignement de la langue arabe et des sciences religieuses.',
      'Plus qu’une école, le centre est un lieu de vie pour la communauté : à côté des salles de classe, il réunit une mosquée pour les prières quotidiennes et la prière du vendredi (Jumu’ah), ainsi qu’un espace culturel et d’entraide communautaire.',
    ],
    stats: [
      { value: '2', label: 'Cycles : primaire et collège' },
      { value: '10', label: 'Niveaux, du CP1 à la 3e' },
      { value: '2', label: 'Langues d’enseignement : français et arabe' },
    ],
  },
  values: [
    {
      icon: 'heart',
      title: 'Piété et miséricorde',
      text: 'Une éducation guidée par les valeurs de l’islam et la bienveillance.',
    },
    {
      icon: 'shield',
      title: 'Discipline et respect',
      text: 'Rigueur morale, respect des parents, des maîtres et des camarades.',
    },
    {
      icon: 'book',
      title: 'Arabe et Saint Coran',
      text: 'Lecture, mémorisation et compréhension, avec les sciences religieuses.',
    },
    {
      icon: 'graduation',
      title: 'Excellence générale',
      text: 'Mathématiques, français et sciences, jusqu’au CEPE et au BEPC.',
    },
  ],
  faq: [
    {
      q: 'Que signifie « Rahama » ?',
      a: '« Rahama » signifie « miséricorde » en arabe. Ce nom exprime l’esprit du centre : accueillir chaque enfant avec bienveillance et l’accompagner avec exigence.',
    },
    {
      q: 'Où se trouve le centre ?',
      a: 'Dans la localité de Koumongou, au nord du Togo, près du grand pont de Koumongou. Appelez-nous ou écrivez-nous sur WhatsApp au +228 91 68 48 38 pour être guidé.',
    },
    {
      q: 'Qu’est-ce qu’une école franco-arabe ?',
      a: 'C’est une école qui suit le programme officiel togolais en français (mathématiques, français, sciences…) et qui enseigne en plus la langue arabe, le Saint Coran et les sciences religieuses. Le centre est agréé par l’État et suit les programmes réformés de l’enseignement franco-arabe.',
    },
    {
      q: 'Vos élèves passent-ils les examens officiels ?',
      a: 'Oui. Les élèves de CM2 sont préparés au CEPE, et les élèves de 3e sont préparés et présentés à l’examen national du BEPC.',
      link: { to: '/cycles', label: 'Voir nos cycles' },
    },
    {
      q: 'Le centre dispose-t-il d’une mosquée ?',
      a: 'Oui. Le centre réunit une mosquée pour les prières quotidiennes et la prière du vendredi (Jumu’ah), ainsi qu’un espace culturel et d’entraide communautaire.',
    },
    {
      q: 'À combien s’élèvent les frais de scolarité ?',
      a: 'La scolarité annuelle et les frais annexes sont détaillés sur la page Tarifs et scolarité. Le paiement peut se faire en trois tranches.',
      link: { to: '/tarifs', label: 'Voir les tarifs' },
    },
  ],
  cycles: [
    {
      name: 'Primaire',
      label: 'Primaire franco-arabe',
      slug: 'primaire',
      age: '6 à 12 ans',
      text: 'Du CP1 au CM2, les élèves suivent le programme officiel togolais en français et apprennent en parallèle la langue arabe, la lecture et la mémorisation du Saint Coran et les bases des sciences religieuses. Le cycle prépare à l’examen officiel du CEPE (Certificat d’Études du Premier Cycle).',
      classes: ['CP1', 'CP2', 'CE1', 'CE2', 'CM1', 'CM2'],
      skills: [
        'Lecture, écriture et calcul (programme officiel)',
        'Langue arabe : lecture et écriture',
        'Saint Coran : lecture et mémorisation',
        'Préparation au CEPE en classe de CM2',
      ],
      programs: [
        {
          icon: 'book',
          title: 'Programme officiel',
          text: 'Français, mathématiques, sciences et éducation civique.',
        },
        {
          icon: 'heart',
          title: 'Arabe et Coran',
          text: 'Alphabet, lecture, écriture et mémorisation des sourates.',
        },
        {
          icon: 'graduation',
          title: 'Objectif CEPE',
          text: 'Révisions, devoirs et examens blancs en CM2.',
        },
      ],
    },
    {
      name: 'Collège',
      label: 'Collège franco-arabe',
      slug: 'college',
      age: '11 à 16 ans',
      text: 'De la 6e à la 3e, le collège franco-arabe approfondit les matières générales et l’enseignement de l’arabe et des sciences religieuses. Les élèves sont préparés et présentés à l’examen national du BEPC (Brevet d’Études du Premier Cycle).',
      classes: ['6e', '5e', '4e', '3e'],
      skills: [
        'Mathématiques, français et sciences approfondis',
        'Langue arabe : grammaire, expression et traduction',
        'Sciences religieuses et étude du Saint Coran',
        'Préparation au BEPC en classe de 3e',
      ],
      programs: [
        {
          icon: 'graduation',
          title: 'Objectif BEPC',
          text: 'Suivi renforcé et examens blancs en classe de 3e.',
        },
        {
          icon: 'book',
          title: 'Arabe et sciences religieuses',
          text: 'Langue arabe, fiqh, hadith et étude du Coran.',
        },
        {
          icon: 'users',
          title: 'Vie communautaire',
          text: 'Prière à la mosquée, entraide et activités culturelles.',
        },
      ],
    },
  ],
  admissions: {
    documents: [
      'Un (1) extrait d’acte de naissance',
      'Les bulletins de l’année précédente',
      'Le relevé ou l’attestation de réussite au CEPE (pour une entrée en 6e)',
      'Un certificat de scolarité ou de transfert (pour un élève venant d’une autre école)',
      'Deux (2) photos d’identité récentes',
    ],
  },
}

/** Classes par cycle, dérivées du profil (formulaires, filtres, fake data). */
export const classesByCycle: Record<string, string[]> = Object.fromEntries(
  school.cycles.map((c) => [c.name, c.classes]),
)

/** Libellé affiché d'un cycle à partir de sa valeur technique (ex. « Primaire » → « Primaire franco-arabe »). */
export const cycleLabel = (name: string): string =>
  school.cycles.find((c) => c.name === name)?.label ?? name
