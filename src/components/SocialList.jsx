import SocialItem from './SocialItem';

function SocialList() {
  const socials = [
    { name: 'GitHub', src: 'https://github.com/' },
    { name: 'FrontendMentor', src: 'https://www.frontendmentor.io/' },
    { name: 'LinkedIn', src: 'https://pl.linkedin.com/' },
    { name: 'Twitter', src: 'https://twitter.com/' },
    { name: 'Instagram', src: 'https://www.instagram.com/' },
  ];

  const items = socials.map((social, index) => (
    <SocialItem key={index} name={social.name} src={social.src} />
  ));

  return <ol className='flex list-none flex-col gap-[16px] text-lg'>{items}</ol>;
}

export default SocialList;
