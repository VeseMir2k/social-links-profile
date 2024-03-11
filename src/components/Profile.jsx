import Avatar from './Avatar';
import NameCity from './NameCity';
import Description from './Description';
import SocialList from './SocialList';

function Profile() {
  return (
    <section className='bg-darkGrey flex w-full flex-col gap-[24px] rounded-[12px] p-[24px] text-center text-base text-white md:w-[384px]  md:p-[40px]'>
      <Avatar />
      <NameCity />
      <Description />
      <SocialList />
    </section>
  );
}

export default Profile;
