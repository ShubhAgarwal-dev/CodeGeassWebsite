import Member from '@/components/Member/Member';
import Admins from '@/components/Member/admins';
import admin_data_val from './admins_data';

export default function Members() {
  return (
    <>
      <Member />
      <Admins heading="Seceretary" team_details={admin_data_val}></Admins>
    </>
  );
}
