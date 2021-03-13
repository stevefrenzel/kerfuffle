import React from 'react'
import { RichText } from 'prismic-reactjs'

const Header = ({ image, headline, description }) => {
  return (
    <div className="home">
      <div className="blog-avatar" style={{ backgroundImage: `url(${image.url})` }} />
      <h1 className="blog-title">{RichText.asText(headline)}</h1>
      <p className="blog-description">{RichText.asText(description)}</p>
    </div>
  )
}

export default Header
