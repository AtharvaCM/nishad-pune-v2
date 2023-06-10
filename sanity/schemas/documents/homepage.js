/* eslint-disable import/no-anonymous-default-export */
import gallery from '../common/gallery'
import hero from '../common/hero'
import heroWithCTA from '../common/heroWithCTA'
import textWithIllustration from '../common/textWithIllustration'

export default {
  name: 'homepage',
  type: 'document',
  title: 'Homepage',
  fields: [gallery, hero, textWithIllustration, heroWithCTA],
}
