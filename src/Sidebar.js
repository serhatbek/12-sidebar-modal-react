import logo from './logo.svg';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';
import { useAppContext } from './context';

const Sidebar = () => {
  const { isSidebarVisible, closeSidebar } = useAppContext();

  return (
    <aside
      className={`${isSidebarVisible ? 'sidebar show-sidebar' : 'sidebar'}`}
    >
      <div className='sidebar-header'>
        <img src={logo} className='logo' alt='logo' />
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, icon } = link;

          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='social-icons'>
        {social.map((item) => {
          const { id, url, icon } = item;

          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
