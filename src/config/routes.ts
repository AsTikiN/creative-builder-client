export const routes = {
  apps: () => "/apps",
  login: () => "/login",
  offers: () => "/offers",
  funnels: () => "/funnels",
  editBook: (id: string) => `/book/edit/${id}`,

  accountSettings: () => "/account-settings",
  appearance: () => `${routes.accountSettings()}/appearance`,
  accountBilling: () => `${routes.accountSettings()}/billing`,
  notifications: () => `${routes.accountSettings()}/notifications`,

  editor: () => "/editor",

  brandSettings: () => "/brand-settings",
  general: () => `${routes.brandSettings()}/general`,
  members: () => `${routes.brandSettings()}/members`,
  brandBilling: () => `${routes.brandSettings()}/billing`,

  plans: () => "/plans",
  integrations: () => "/integrations",
  legal: () => "/legal",
  domain: () => "/domain",
  phones: () => "/phones",
  agents: () => "/agents",
  usage: () => "/usage",
  emails: () => "/emails",
};
