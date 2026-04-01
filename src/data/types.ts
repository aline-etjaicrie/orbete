// ─────────────────────────────────────────────
//  DIAGNOSTIC PROFILES — Be-Cosmo
// ─────────────────────────────────────────────
export type DiagnosticProfile =
  | "projet_recent"       // vient de démarrer ou idée en cours
  | "demarches_admin"     // frein = démarches administratives
  | "visibilite_com"      // frein = visibilité / communication
  | "recherche_clients"   // frein = trouver des clients
  | "gestion_financiere"  // frein = gérer les finances
  | "isolement_reseau"    // frein = isolement
  | "croissance";         // bien installé, veut passer un cap

// ─────────────────────────────────────────────
//  TARGET ROLES — Be-Cosmo
// ─────────────────────────────────────────────
export type TargetRole =
  | "artisan"
  | "artiste"
  | "entrepreneur_service"
  | "entrepreneur_commerce"
  | "porteur_projet"
  | "association"
  | "liberal";

// ─────────────────────────────────────────────
//  INSTITUTION CONTEXTS — Lieux Be-Cosmo
// ─────────────────────────────────────────────
export type InstitutionContext =
  | "hermite"    // Charles Hermite, Paris 18e
  | "cargo"      // Le Cargo, Paris 19e
  | "montreuil"  // Porte de Montreuil, Paris 20e
  | "externe";   // pas encore dans un lieu Be-Cosmo

// ─────────────────────────────────────────────
//  ORBETE RESOURCE
// ─────────────────────────────────────────────
export type OrbeteResource = {
  id: string;
  title: string;
  slug: string;
  pillar: "lancer" | "exister" | "gerer" | "grandir";
  format: "fiche" | "guide" | "checklist" | "repere" | "parcours";
  promise: string;
  intro: string;
  understand: string[];
  commonTrap: string;
  actions: string[];
  reflex: string;
  sensitiveNote?: string;
  usefulLinks?: Array<{ label: string; url: string }>;
  targetRoles: Array<TargetRole>;
  institutionContexts?: Array<InstitutionContext>;
  experienceLevels: Array<"debutant" | "intermediaire" | "confirme">;
  diagnosticProfiles: Array<DiagnosticProfile>;
  useCases: string[];
  tags: string[];
  ctaType: "copilote" | "offre_individuelle" | "offre_collectivite" | "formation_irl";
  irlPotential: boolean;
  priority: "haute" | "moyenne";
};

// ─────────────────────────────────────────────
//  ORBETE PATH
// ─────────────────────────────────────────────
export type MaryanPath = {
  id: string;
  title: string;
  slug: string;
  promise: string;
  description: string;
  diagnosticProfiles: Array<DiagnosticProfile>;
  targetRoles: Array<TargetRole>;
  experienceLevels: Array<"debutant" | "intermediaire" | "confirme">;
  priorities: string[];
  resourceIds: string[];
  ctaType: "copilote" | "offre_individuelle" | "offre_collectivite" | "formation_irl";
  irlPotential: boolean;
};

// ─────────────────────────────────────────────
//  ORBETE SITUATION
// ─────────────────────────────────────────────
export type MaryanSituation = {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  diagnosticProfiles: Array<DiagnosticProfile>;
  targetRoles: Array<TargetRole>;
  experienceLevels: Array<"debutant" | "intermediaire" | "confirme">;
  pillars: Array<"lancer" | "exister" | "gerer" | "grandir">;
  resourceIds: string[];
  pathIds: string[];
  priorities: string[];
  ctaType: "copilote" | "offre_individuelle" | "offre_collectivite" | "formation_irl";
};
