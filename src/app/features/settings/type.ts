// /app/features/settings/types.ts
import { create } from 'zustand'

export type NotificationType = 'sound' | 'vibration'

export type Profile = {
  name: string
  bio: string
  profilePhoto: string
  notification: NotificationType
  socialLinks: {
    twitter: string
    linkedin: string
  }
}

type Settings = {
  profile: Profile
  updateSettings: (updated: Partial<Profile>) => void
}

export const useSettings = create<Settings>((set) => ({
  profile: {
    name: 'Company XYZ',
    bio: 'We build amazing stuff.',
    profilePhoto: '/next.svg',
    notification: 'sound',
    socialLinks: {
      twitter: 'https://twitter.com/companyxyz',
      linkedin: 'https://linkedin.com/company/companyxyz',
    },
  },
  updateSettings: (updated) =>
    set((state) => ({
      profile: {
        ...state.profile,
        ...updated,
        socialLinks: {
          ...state.profile.socialLinks,
          ...(updated.socialLinks || {}),
        },
      },
    })),
}))
