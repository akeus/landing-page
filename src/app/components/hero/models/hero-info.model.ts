export interface HeroInfoModel {
  name: string
  title: string
  description: string
  photo: HeroPhotoModel
}

export interface HeroPhotoModel {
  url: string
  alt: string
}
