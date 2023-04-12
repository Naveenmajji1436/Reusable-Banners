import './index.css'

const BannerCard = props => {
  const {bannerCards} = props
  const {headerText, description, className} = bannerCards
  return (
    <li className={className}>
      <h1 className="heading">{headerText}</h1>
      <p className="Para">{description}</p>
      <button className="showButton" type="button">
        Show More
      </button>
    </li>
  )
}

export default BannerCard
