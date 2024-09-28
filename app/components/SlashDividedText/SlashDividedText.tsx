import "./styles.css"

interface Props {
  beforeSlash: string;
  afterSlash: string;
}

export function SlashDividedText({beforeSlash, afterSlash} : Props) {
  return (
    <div className="dividedText manrope">
      <p>
        {beforeSlash}
      </p>
      <div className="dividedText__slash"></div>
      <p>
        {afterSlash}
      </p>
    </div>
  )
}