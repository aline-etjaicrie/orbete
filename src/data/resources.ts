import type { OrbeteResource } from './types';

export const orbeteResources: OrbeteResource[] = [
  {
    id: "choisir-son-statut-juridique",
    title: "Choisir son statut juridique",
    slug: "choisir-son-statut-juridique",
    pillar: "lancer",
    format: "guide",
    promise: "Auto-entrepreneur, association, société… chaque statut a ses avantages. Voici comment choisir selon ton projet.",
    intro: "Le statut le plus simple pour démarrer seul·e, c'est l'auto-entrepreneur (ou micro-entrepreneur). Tu t'inscris en ligne en 10 minutes, tu ne paies des charges que si tu encaisses de l'argent, et la comptabilité est ultra-simple. C'est le bon point de départ pour tester ton activité.\n\nSi tu travailles à plusieurs, ou si ton projet est collectif et à but non lucratif, l'association loi 1901 est souvent la meilleure option. Tu peux tout de même te verser un salaire et recevoir des subventions.\n\nPour aller plus loin (recruter, lever des fonds, séparer tes finances personnelles et pro), une société (SASU, SAS, SARL) devient pertinente — mais c'est plus de paperasse. À envisager quand ton activité est lancée et stable.",
    understand: [
      "Auto-entrepreneur = le plus rapide, le plus simple, idéal pour démarrer seul·e",
      "Association = pour les projets collectifs ou culturels à but non lucratif",
      "Société (SASU/SARL) = pour les projets qui grandissent ou nécessitent de recruter"
    ],
    commonTrap: "Choisir la société la plus 'sérieuse' dès le départ pour paraître professionnel — au lieu du statut adapté à sa situation réelle.",
    actions: [
      "Évaluer si tu travailles seul·e ou à plusieurs",
      "Estimer ton chiffre d'affaires prévisible la première année",
      "Commencer par l'auto-entrepreneur si tu testes — tu pourras changer de statut plus tard"
    ],
    reflex: "Commence simple. L'auto-entrepreneur est souvent la meilleure façon de tester avant de structurer.",
    usefulLinks: [
      { label: "autoentrepreneur.urssaf.fr", url: "https://www.autoentrepreneur.urssaf.fr" },
      { label: "guichet-entreprises.fr", url: "https://www.guichet-entreprises.fr" },
      { label: "service-public.fr → Professionnels", url: "https://www.service-public.fr/professionnels-entreprises" }
    ],
    targetRoles: ["artisan", "artiste", "entrepreneur_service", "entrepreneur_commerce", "porteur_projet", "association"],
    institutionContexts: ["hermite", "cargo", "montreuil", "externe"],
    experienceLevels: ["debutant"],
    diagnosticProfiles: ["projet_recent", "demarches_admin"],
    useCases: ["création d'activité", "choix du statut juridique", "micro-entrepreneur", "association loi 1901"],
    tags: ["statut", "auto-entrepreneur", "micro-entrepreneur", "SASU", "association", "juridique"],
    ctaType: "copilote",
    irlPotential: true,
    priority: "haute"
  },
  {
    id: "acre-arce-aides-lancement",
    title: "ACRE et ARCE : les aides au lancement",
    slug: "acre-arce-aides-lancement",
    pillar: "lancer",
    format: "fiche",
    promise: "Quand tu crées ton activité, tu peux alléger tes charges et toucher une partie de ton chômage. Beaucoup de résidents y ont droit sans le savoir.",
    intro: "L'ACRE (Aide à la Création ou Reprise d'Entreprise) te permet de payer moins de cotisations sociales pendant ta première année d'activité. Si tu es auto-entrepreneur, l'exonération est automatique — pas besoin de demande spéciale. Pour les autres statuts, il faut en faire la demande à l'Urssaf à la création.\n\nL'ARCE (Aide à la Reprise ou à la Création d'Entreprise) est différente : si tu avais droit à l'allocation chômage (ARE), tu peux demander à recevoir 60% de ce qui te restait à percevoir en deux versements. C'est une option, pas une obligation — certains préfèrent garder l'ARE mensuelle comme filet de sécurité.\n\nLes deux aides sont cumulables si tu remplis les conditions.",
    understand: [
      "ACRE = moins de charges sociales la 1ère année (automatique en auto-entrepreneur)",
      "ARCE = toucher 60% de son chômage restant en capital, en 2 fois",
      "Bien réfléchir avant de choisir l'ARCE : l'ARE mensuelle peut être plus sécurisante"
    ],
    commonTrap: "Ne pas en faire la demande par méconnaissance, et laisser passer des mois d'exonération.",
    actions: [
      "Vérifier ton éligibilité à l'ACRE sur urssaf.fr avant de t'immatriculer",
      "Contacter France Travail avant de créer ton activité pour simuler l'ARCE",
      "Comparer les deux options avec un conseiller avant de choisir"
    ],
    reflex: "Renseigne-toi avant de t'immatriculer — certaines aides ne sont accessibles qu'au moment de la création.",
    usefulLinks: [
      { label: "France Travail → ACRE / ARCE", url: "https://www.francetravail.fr/candidat/mes-droits-aux-aides-et-allocati/les-aides-a-la-creation-ou-repri.html" },
      { label: "urssaf.fr → ACRE", url: "https://www.urssaf.fr/accueil/vous-creer/acre.html" },
      { label: "bpifrance-creation.fr", url: "https://bpifrance-creation.fr" }
    ],
    targetRoles: ["artisan", "artiste", "entrepreneur_service", "entrepreneur_commerce", "porteur_projet"],
    institutionContexts: ["hermite", "cargo", "montreuil", "externe"],
    experienceLevels: ["debutant"],
    diagnosticProfiles: ["projet_recent", "demarches_admin", "gestion_financiere"],
    useCases: ["aides au lancement", "ACRE", "ARCE", "chômage et création", "cotisations sociales"],
    tags: ["ACRE", "ARCE", "aides", "chômage", "ARE", "Urssaf", "lancement"],
    ctaType: "copilote",
    irlPotential: true,
    priority: "haute"
  },
  {
    id: "premieres-demarches-administratives",
    title: "Les premières démarches administratives",
    slug: "premieres-demarches-administratives",
    pillar: "lancer",
    format: "checklist",
    promise: "Immatriculation, SIRET, Urssaf… voici les étapes dans l'ordre, sans se perdre.",
    intro: "1. Immatriculer son activité. Tout se fait maintenant sur le guichet unique formalites.entreprises.gouv.fr — que tu sois auto-entrepreneur, en société ou en association. C'est gratuit et ça prend 10 à 30 minutes.\n\n2. Obtenir son numéro SIRET. Une fois immatriculé·e, tu reçois un numéro SIRET de l'INSEE. C'est ton identifiant officiel : il apparaît sur tes factures, tes devis, tes contrats.\n\n3. Ouvrir un compte bancaire dédié. Ce n'est obligatoire légalement qu'au-delà d'un certain chiffre d'affaires, mais c'est fortement conseillé dès le départ.\n\n4. Déclarer à l'Urssaf. Si tu es auto-entrepreneur, tu devras déclarer ton chiffre d'affaires chaque mois ou trimestre. Même si tu n'as rien gagné, la déclaration est obligatoire (tu mets 0).",
    understand: [
      "Tout s'immatricule sur formalites.entreprises.gouv.fr — c'est le guichet unique officiel",
      "Le SIRET est obligatoire sur toutes tes factures dès le premier euro encaissé",
      "Déclarer à l'Urssaf même à zéro — l'oubli peut entraîner des pénalités"
    ],
    commonTrap: "Se perdre dans la paperasse ou reporter l'immatriculation en attendant d'être 'prêt·e' — alors qu'en auto-entrepreneur, ça prend 10 minutes.",
    actions: [
      "Aller sur formalites.entreprises.gouv.fr et lancer l'immatriculation",
      "Noter son numéro SIRET dès réception et l'indiquer sur toutes ses factures",
      "Configurer ses déclarations Urssaf (mensuelles ou trimestrielles) dans son espace en ligne"
    ],
    reflex: "Immatricule ton activité avant de commencer à facturer — un centime perçu sans SIRET, c'est du travail non déclaré.",
    usefulLinks: [
      { label: "formalites.entreprises.gouv.fr", url: "https://formalites.entreprises.gouv.fr" },
      { label: "autoentrepreneur.urssaf.fr", url: "https://www.autoentrepreneur.urssaf.fr" },
      { label: "annuaire-entreprises.data.gouv.fr", url: "https://annuaire-entreprises.data.gouv.fr" }
    ],
    targetRoles: ["artisan", "artiste", "entrepreneur_service", "entrepreneur_commerce", "porteur_projet", "association", "liberal"],
    institutionContexts: ["hermite", "cargo", "montreuil", "externe"],
    experienceLevels: ["debutant"],
    diagnosticProfiles: ["projet_recent", "demarches_admin"],
    useCases: ["immatriculation", "SIRET", "Urssaf", "guichet unique", "première déclaration"],
    tags: ["SIRET", "immatriculation", "Urssaf", "guichet unique", "formalités", "démarches"],
    ctaType: "copilote",
    irlPotential: true,
    priority: "haute"
  },
  {
    id: "ouvrir-compte-professionnel",
    title: "Ouvrir un compte professionnel",
    slug: "ouvrir-compte-professionnel",
    pillar: "lancer",
    format: "fiche",
    promise: "Séparer ses finances perso et pro dès le départ, c'est la base. Voici les options simples et accessibles.",
    intro: "En auto-entrepreneur, tu n'es pas obligé·e d'avoir un compte professionnel si ton chiffre d'affaires reste sous 10 000€/an pendant 2 ans. Mais c'est vivement conseillé dès le départ.\n\nLes néobanques (Shine, Qonto, Blank, Revolut Business) sont souvent les plus adaptées pour les indépendants et petites structures : ouverture rapide, tarifs abordables (entre 0 et 12€/mois), interfaces simples, et des fonctions utiles comme la facturation intégrée.\n\nLes banques traditionnelles peuvent être plus rassurantes si tu as besoin d'un découvert ou d'un prêt. Mais l'ouverture est plus lente et les frais souvent plus élevés.\n\nPour les associations, certaines banques ont des offres dédiées (Crédit Coopératif, La Banque Postale).",
    understand: [
      "Ouvrir un compte pro dès le départ, même si ce n'est pas encore obligatoire",
      "Les néobanques (Shine, Qonto, Blank) sont souvent les plus simples et accessibles",
      "Ne jamais mélanger dépenses perso et pro — même un euro mal rangé complique tout"
    ],
    commonTrap: "Utiliser son compte perso pour tout — et perdre du temps à retracer les dépenses pro au moment des déclarations.",
    actions: [
      "Comparer les offres des néobanques (Shine, Qonto, Blank) avant d'ouvrir un compte",
      "Ouvrir le compte avant les premiers encaissements",
      "Paramétrer un virement automatique mensuel vers ton compte perso pour te 'payer'"
    ],
    reflex: "Un compte pro séparé, c'est 10 minutes à l'ouverture — et des heures gagnées à chaque déclaration.",
    usefulLinks: [
      { label: "shine.fr", url: "https://www.shine.fr" },
      { label: "qonto.com", url: "https://www.qonto.com/fr" },
      { label: "blank.app", url: "https://www.blank.app" },
      { label: "credit-cooperatif.coop (associations)", url: "https://www.credit-cooperatif.coop" }
    ],
    targetRoles: ["artisan", "artiste", "entrepreneur_service", "entrepreneur_commerce", "porteur_projet", "association", "liberal"],
    institutionContexts: ["hermite", "cargo", "montreuil", "externe"],
    experienceLevels: ["debutant", "intermediaire"],
    diagnosticProfiles: ["projet_recent", "demarches_admin", "gestion_financiere"],
    useCases: ["compte bancaire professionnel", "néobanque", "séparer finances perso pro", "association compte dédié"],
    tags: ["compte pro", "banque", "néobanque", "Shine", "Qonto", "finances", "gestion"],
    ctaType: "copilote",
    irlPotential: false,
    priority: "moyenne"
  }
];
