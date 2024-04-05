const Footer = () => {
  const footerLinks = [
    'About',
    'Download the X app',
    'Help Center',
    'Terms of Service',
    'Privacy Policy',
    'Cookie Policy',
    'Accessibility',
    'Ads Info',
    'Blog',
    'Careers',
    'Brand Resources',
    'Advertising',
    'Marketing',
    'X for Business',
    'Developers',
    'Directory',
    'Settings',
  ];

  return (
    <footer>
      <ul>
        {footerLinks.map((link, index) => (
          <li key={index}>
            <a href='#'>{link}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
