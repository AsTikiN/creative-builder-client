export enum SubRoutes {
  profile = "profile",
  security = "security",
  notifications = "notifications",
  billing = "billing",
  general = "general",
  team = "team",
  plans = "plans",
  integrations = "integrations",
  appearance = "appearance",
  notepad = "notepad",
  webhooks = "webhooks",
  brandedApp = "branded-app",
  details = "details",
  apps = "apps",
  funnels = "funnels",
  offers = "offers",
}

export const routes = {
  apps: () => `/${SubRoutes.apps}`,
  login: () => "/login",
  offers: () => `/${SubRoutes.offers}`,
  funnels: () => `/${SubRoutes.funnels}`,
  editBook: (id: string) => `/book/edit/${id}`,
  bookChapter: (id: string, chapterId: string) =>
    `${routes.editBook(id)}/chapter/${chapterId}`,

  accountSettings: () => "/account-settings",
  accountAppearance: () => `${routes.accountSettings()}/${SubRoutes.profile}`,
  security: () => `${routes.accountSettings()}/${SubRoutes.security}`,

  editor: () => "/editor",
  notifications: () => `${routes.accountSettings()}/${SubRoutes.notifications}`,
  general: () => `${routes.brandSettings()}/${SubRoutes.general}`,
  team: () => `${routes.brandSettings()}/${SubRoutes.team}`,

  plans: () => `${routes.brandSettings()}/${SubRoutes.plans}`,
  integrations: () => `${routes.brandSettings()}/${SubRoutes.integrations}`,
  accountBilling: () => `${routes.accountSettings()}/${SubRoutes.billing}`,

  brandSettings: () => "/brand-settings",
  brandBilling: () => `${routes.brandSettings()}/${SubRoutes.billing}`,

  legal: () => "/legal",
  domain: () => "/domain",
  phone: () => "/phone",
  agents: () => "/agents",
  usage: () => "/usage",
  email: () => "/email",
  profile: () => `${routes.accountSettings()}/${SubRoutes.profile}`,
  brandAppearance: () => `${routes.brandSettings()}/${SubRoutes.appearance}`,

  notepad: () => `${routes.brandSettings()}/${SubRoutes.notepad}`,
  webhooks: () => `${routes.brandSettings()}/${SubRoutes.webhooks}`,

  brandedApp: () => `${routes.brandSettings()}/${SubRoutes.brandedApp}`,
  brandDetails: () => `${routes.brandSettings()}/${SubRoutes.details}`,
};
