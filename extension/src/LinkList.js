/* global chrome */

import './LinkList.css'



function SortLinks(links) {
  links.sort((a, b) => b.rating - a.rating)
  return links;
}

export default function LinkList({rawLinks}) {

  const links = SortLinks(rawLinks)

  const handleClick = (link) => {
    if (window.chrome && chrome.runtime && chrome.runtime.id)
      chrome.tabs.create({ url: link.href });
  }

  const mapLinks = () => {
    return links.map((link, index) =>
      <li className="item" onClick={() => handleClick(link)}>
        <span className="item-rating-big">{index+1}:</span>
        <span className="item-link">{link.href}</span>
      </li>)
  }

  return (
    <ul className="list">
      {mapLinks()}
    </ul>
  )
}