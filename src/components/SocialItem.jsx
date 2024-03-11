function SocialItem({ name, src }) {
  return (
    <li className='bg-grey md:hover:text-grey md:hover:bg-neonGreen min-w-full cursor-pointer rounded-[8px]  md:transition-all'>
      <a className='block p-[12px]' href={src} target='_blank'>
        {name}
      </a>
    </li>
  );
}

export default SocialItem;
