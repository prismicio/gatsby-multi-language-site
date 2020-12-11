import React from 'react'
import {
  EmailSignup,
  FullWidthImage,
  HeadlineWithButton,
  InfoWithImage,
  TextInfo,
} from './slices'

const SliceZone = ({ slices }) => {
  const sliceComponents = {
    headline_with_button: HeadlineWithButton,
    email_signup: EmailSignup,
    full_width_image: FullWidthImage,
    info_with_image: InfoWithImage,
    text_info: TextInfo,
  }

  return slices.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.slice_type]
    if (SliceComponent) {
      return <SliceComponent slice={slice} key={`slice-${index}`} />
    }
    return null
  })
}

export default SliceZone
