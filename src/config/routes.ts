export const routes = {
  apps: () => "/apps",
  login: () => "/login",
  offers: () => "/offers",
  funnels: () => "/funnels",
  editBook: (id: string) => `/book/edit/${id}`,

  accountSettings: () => "/account-settings",
  appearance: () => `${routes.accountSettings()}/appearance`,
  editor: () => "/editor",
  notifications: () => `${routes.accountSettings()}/notifications`,
  general: () => `${routes.brandSettings()}/general`,
  members: () => `${routes.brandSettings()}/members`,

  plans: () => `${routes.brandSettings()}/plans`,
  integrations: () => `${routes.brandSettings()}/integrations`,
  accountBilling: () => `${routes.accountSettings()}/billing`,

  brandSettings: () => "/brand-settings",
  brandBilling: () => `${routes.brandSettings()}/billing`,

  legal: () => "/legal",
  domain: () => "/domain",
  phone: () => "/phone",
  agents: () => "/agents",
  usage: () => "/usage",
  email: () => "/email",
  brandAppearance: () => `${routes.brandSettings()}/appearance`,
};
