import './tag.scss';

export const Tag = ({name, children}) =>
  <a className={`link ${name}`} href={linkMap[name]} target="_blank" rel="noreferrer">
    {children}
  </a>

const linkMap = {
  'creativity': 'https://creativity.ucsd.edu/',
  'ucsd': 'https://ucsd.edu',
  'masonview': 'https://creativity.ucsd.edu/masonview',
  'masonview-uist23': 'https://programs.sigchi.org/uist/2023/program/content/127104/',
}