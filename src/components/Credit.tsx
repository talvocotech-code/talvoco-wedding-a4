import { invite } from '../data/invite'

/** Small "Crafted by Talvoco" watermark at the very bottom of the page; links to talvoco.com. */
export function Credit() {
  const { label, name, url, music } = invite.credit
  return (
    <footer className="credit">
      <span className="credit-note">{label}</span>
      <a className="credit-link" href={url} target="_blank" rel="noopener">
        <span>{name}</span>
      </a>
      <span className="credit-note" style={{ flexBasis: '100%', textAlign: 'center' }}>Music: {music}</span>
    </footer>
  )
}
