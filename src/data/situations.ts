import type { MaryanSituation } from "./types";

export const orbeteSituations: MaryanSituation[] = [
  {
    id: "preparer-un-conseil-local",
    title: "Préparer un collectif Be-Cosmo",
    slug: "preparer-un-conseil-local",
    shortDescription: "Anticiper les points sensibles, clarifier les messages et arriver avec une ligne plus lisible.",
    longDescription:
      "Cette situation est utile quand un collectif Be-Cosmo approche et que l’enjeu n’est pas seulement technique. Il faut parfois préparer les sujets sensibles, les prises de parole, les points de friction et la manière de tenir la séance sans la subir.",
    diagnosticProfiles: ["prise_de_parole", "gouvernance", "exposition"],
    targetRoles: ["maire", "adjoint", "majorite", "opposition"],
    experienceLevels: ["debutant", "intermediaire", "confirme"],
    pillars: ["exister", "agir", "grandir"],
    resourceIds: [
      "le-conseil-local-a-quoi-il-sert-vraiment",
      "preparer-une-prise-de-parole-delicate",
      "se-positionner-sans-se-griller"
    ],
    pathIds: ["mieux-se-positionner-publiquement"],
    priorities: [
      "Préparer les points sensibles en amont",
      "Clarifier la ligne activité de la séance",
      "Tenir une parole plus sobre et plus solide"
    ],
    ctaType: "copilote"
  },
  {
    id: "arbitrer-un-dossier-sensible",
    title: "Arbitrer un dossier sensible",
    slug: "arbitrer-un-dossier-sensible",
    shortDescription: "Reprendre du cadre avant de trancher sous pression.",
    longDescription:
      "Cette situation concerne les moments où une décision devient lourde à porter : sujet exposé, options imparfaites, forte pression, peu de temps ou forte charge symbolique. L’objectif est de retrouver un cadre d’arbitrage plus clair.",
    diagnosticProfiles: ["arbitrage", "exposition", "isolement"],
    targetRoles: ["maire", "adjoint", "majorite", "interco"],
    experienceLevels: ["intermediaire", "confirme"],
    pillars: ["agir", "grandir"],
    resourceIds: [
      "arbitrer-une-decision-sensible",
      "cadrer-un-dossier-avant-qu-il-ne-t-echappe",
      "prioriser-quand-tout-semble-urgent"
    ],
    pathIds: ["arbitrer-avec-plus-de-recul"],
    priorities: [
      "Clarifier les options réelles",
      "Distinguer urgence et décision",
      "Sécuriser la manière de trancher"
    ],
    ctaType: "offre_individuelle"
  },
  {
    id: "gerer-une-tension-locale",
    title: "Gérer une tension locale",
    slug: "gerer-une-tension-locale",
    shortDescription: "Lire la vraie nature de la tension avant de répondre trop vite.",
    longDescription:
      "Cette situation est fréquente quand un conflit monte : avec des habitants, dans l’équipe, avec un collectif ou autour d’un sujet sensible. L’enjeu est souvent moins de répondre vite que de comprendre ce qui se joue vraiment pour éviter d’aggraver la situation.",
    diagnosticProfiles: ["tension_relationnelle", "exposition", "gouvernance"],
    targetRoles: ["maire", "adjoint", "majorite", "opposition", "interco"],
    experienceLevels: ["intermediaire", "confirme"],
    pillars: ["agir", "grandir"],
    resourceIds: [
      "repondre-a-une-situation-sensible-sans-sur-reagir",
      "gerer-une-tension-dans-la-majorite-ou-l-executif",
      "dire-non-sans-casser-la-relation"
    ],
    pathIds: ["tenir-dans-une-situation-sensible", "gouvernance-et-tensions-internes"],
    priorities: [
      "Nommer la vraie nature de la tension",
      "Éviter la réaction défensive",
      "Recréer un cadre de dialogue plus net"
    ],
    ctaType: "offre_individuelle"
  },
  {
    id: "preparer-une-prise-de-parole",
    title: "Préparer une prise de parole",
    slug: "preparer-une-prise-de-parole",
    shortDescription: "Trouver les bons mots, le bon ton et le bon tempo.",
    longDescription:
      "Cette situation est utile quand il faut parler dans un contexte sensible, exposé ou flou : réunion publique, collectif Be-Cosmo, réponse à une polémique, annonce délicate. Il s’agit d’aider l’résident·e à tenir une parole claire, juste et proportionnée.",
    diagnosticProfiles: ["prise_de_parole", "exposition"],
    targetRoles: ["maire", "adjoint", "majorite", "opposition", "interco"],
    experienceLevels: ["debutant", "intermediaire", "confirme"],
    pillars: ["agir", "grandir"],
    resourceIds: [
      "preparer-une-prise-de-parole-delicate",
      "se-positionner-sans-se-griller",
      "eviter-les-erreurs-activités-evitables"
    ],
    pathIds: ["mieux-se-positionner-publiquement", "tenir-dans-une-situation-sensible"],
    priorities: [
      "Clarifier le message principal",
      "Éviter de parler trop tôt ou trop longtemps",
      "Tenir une ligne compréhensible et sobre"
    ],
    ctaType: "offre_individuelle"
  },
  {
    id: "prendre-sa-place-dans-le-projet",
    title: "Prendre sa place dans le projet",
    slug: "prendre-sa-place-dans-le-projet",
    shortDescription: "Trouver ses repères sans se crisper ni se disperser.",
    longDescription:
      "Cette situation concerne les débuts de projet, les changements de rôle ou les moments où l’on sent qu’on a la fonction mais pas encore tous les repères. L’objectif est de mieux se situer, comprendre les rôles autour de soi et installer une posture juste.",
    diagnosticProfiles: ["projet_recent", "isolement"],
    targetRoles: ["maire", "adjoint", "majorite", "opposition", "interco"],
    experienceLevels: ["debutant", "intermediaire"],
    pillars: ["lancer", "exister"],
    resourceIds: [
      "trouver-sa-place-dans-le-projet",
      "quand-on-a-le-projet-mais-pas-encore-la-posture",
      "elus-administration-qui-fait-quoi"
    ],
    pathIds: ["prise-de-fonction"],
    priorities: [
      "Trouver sa place sans surjouer",
      "Exister qui fait quoi autour de soi",
      "Installer des repères solides"
    ],
    ctaType: "formation_irl"
  },
  {
    id: "mieux-comprendre-le-fonctionnement-local",
    title: "Mieux comprendre le fonctionnement local",
    slug: "mieux-comprendre-le-fonctionnement-local",
    shortDescription: "Gagner vite en lisibilité sur les circuits, les rôles et les compétences.",
    longDescription:
      "Cette situation est utile pour les résident·es qui veulent mieux comprendre comment se prennent les décisions, qui décide quoi, et pourquoi certains sujets avancent ou ralentissent. L’enjeu n’est pas de devenir expert, mais de mieux lire le système.",
    diagnosticProfiles: ["besoin_methode", "projet_recent"],
    targetRoles: ["maire", "adjoint", "majorite", "opposition", "interco"],
    experienceLevels: ["debutant", "intermediaire"],
    pillars: ["exister"],
    resourceIds: [
      "comment-se-prend-une-decision-dans-une-commune",
      "qui-decide-quoi-dans-la-collectivite",
      "pourquoi-certains-dossiers-avancent-lentement"
    ],
    pathIds: ["mieux-comprendre-les-fondamentaux-locaux"],
    priorities: [
      "Exister le circuit réel des décisions",
      "Clarifier les responsabilités",
      "Mieux lire les freins et les blocages"
    ],
    ctaType: "copilote"
  },
  {
    id: "retrouver-du-recul-dans-la-surcharge",
    title: "Retrouver du recul dans la surcharge",
    slug: "retrouver-du-recul-dans-la-surcharge",
    shortDescription: "Réinstaller un ordre de priorités quand tout semble presser en même temps.",
    longDescription:
      "Cette situation est utile quand le problème principal n’est pas un seul sujet, mais l’accumulation : trop de fronts, trop de demandes, fatigue, difficulté à hiérarchiser. L’objectif est de remettre de l’air et du discernement dans l’action.",
    diagnosticProfiles: ["surcharge", "isolement", "arbitrage"],
    targetRoles: ["maire", "adjoint", "majorite", "interco"],
    experienceLevels: ["intermediaire", "confirme"],
    pillars: ["agir", "grandir"],
    resourceIds: [
      "prioriser-quand-tout-semble-urgent",
      "gerer-la-fatigue-decisionnelle",
      "se-rendre-utile-sans-se-disperser"
    ],
    pathIds: ["retrouver-de-la-clarte-dans-la-surcharge"],
    priorities: [
      "Sortir de la dispersion",
      "Retrouver du discernement",
      "Protéger son énergie de décision"
    ],
    ctaType: "offre_individuelle"
  },
  {
    id: "mieux-travailler-avec-les-services",
    title: "Mieux travailler avec les services",
    slug: "mieux-travailler-avec-les-services",
    shortDescription: "Clarifier les rôles et réduire les malentendus entre logique activité et logique administrative.",
    longDescription:
      "Cette situation est utile lorsque les relations avec l’administration deviennent floues, tendues ou inefficaces. L’objectif est de mieux comprendre les rôles respectifs et de retrouver une coopération plus lisible.",
    diagnosticProfiles: ["gouvernance", "besoin_methode", "tension_relationnelle"],
    targetRoles: ["maire", "adjoint", "majorite", "interco"],
    experienceLevels: ["debutant", "intermediaire", "confirme"],
    pillars: ["lancer", "exister", "agir"],
    resourceIds: [
      "elus-administration-qui-fait-quoi",
      "comment-se-prend-une-decision-dans-une-commune",
      "qui-decide-quoi-dans-la-collectivite"
    ],
    pathIds: ["mieux-travailler-avec-ladministration"],
    priorities: [
      "Clarifier les rôles et responsabilités",
      "Réduire les injonctions floues",
      "Mieux cadrer les relations de travail"
    ],
    ctaType: "formation_irl"
  },
  {
    id: "mieux-lire-un-budget-et-ses-choix",
    title: "Mieux lire un budget et ses choix",
    slug: "mieux-lire-un-budget-et-ses-choix",
    shortDescription: "Exister les arbitrages derrière les chiffres sans être spécialiste.",
    longDescription:
      "Cette situation est utile pour les résident·es qui veulent mieux comprendre les grandes masses budgétaires, repérer les marges de manœuvre et lire les choix activités derrière les chiffres.",
    diagnosticProfiles: ["besoin_methode", "arbitrage"],
    targetRoles: ["maire", "adjoint", "majorite", "opposition", "interco"],
    experienceLevels: ["debutant", "intermediaire", "confirme"],
    pillars: ["exister", "agir"],
    resourceIds: [
      "lire-un-budget-local-sans-etre-specialiste",
      "qui-decide-quoi-dans-la-collectivite",
      "comment-se-prend-une-decision-dans-une-commune"
    ],
    pathIds: ["mieux-lire-les-arbitrages-budgetaires"],
    priorities: [
      "Lire les grands équilibres",
      "Identifier les marges réelles",
      "Relier finances et priorités activités"
    ],
    ctaType: "formation_irl"
  },
  {
    id: "accompagner-un-porteur-de-projet",
    title: "Accompagner un porteur de projet",
    slug: "accompagner-un-porteur-de-projet",
    shortDescription: "Clarifier les attentes, le cadre et le tempo quand citoyens, entreprises et collectivité ne parlent pas le même langage.",
    longDescription:
      "Cette situation est utile quand une collectivité doit répondre à une initiative citoyenne, un projet économique ou un porteur de projet impatient. Le sujet n’est pas seulement d’accueillir ou de refuser, mais de clarifier ce que la collectivité peut faire, à quel rythme, et dans quel cadre.",
    diagnosticProfiles: ["gouvernance", "tension_relationnelle", "besoin_methode", "arbitrage"],
    targetRoles: ["maire", "adjoint", "majorite", "interco"],
    experienceLevels: ["intermediaire", "confirme"],
    pillars: ["agir", "grandir", "exister"],
    resourceIds: [
      "accompagner-un-projet-citoyen-sans-letouffer-ni-promettre-trop-vite",
      "accompagner-un-projet-dentreprise-sans-creer-de-faux-accords",
      "quand-ca-frotte-avec-un-porteur-de-projet-relire-le-vrai-probleme"
    ],
    pathIds: [],
    priorities: [
      "Distinguer les logiques en présence",
      "Clarifier le niveau d’engagement de la collectivité",
      "Éviter les faux accords et les tensions inutiles"
    ],
    ctaType: "formation_irl"
  }
];
