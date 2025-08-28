import { HeroInfoModel } from '@components/hero/models/hero-info.model'
import { SocialLinksModel } from '@components/social-links/models/social-links.model'
import { WorkExperienceModel } from '@sections/experience/models/work-experience.model'

export interface ProfileResponse {
  information: HeroInfoModel
  social: SocialLinksModel
  experience: {
    title: string
    subtitle: string
    positions: WorkExperienceModel[]
  }
}
