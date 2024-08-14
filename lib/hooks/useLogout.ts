import axios from '@/lib/utils';
import { useRouter } from 'next/navigation';

const useLogout = () => {
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.post('/auth/logout/');
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return logout;
};

export default useLogout;
