import avatarImage from '../assets/avatar-jessica.jpeg';

function Avatar() {
  return (
    <img className='size-[88px] self-center rounded-[50%]' src={avatarImage} alt='avatar image' />
  );
}

export default Avatar;
