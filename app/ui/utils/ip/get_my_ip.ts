import 'server-only';

export const get_my_ip = async () => {
  const base_url =
    process.env.NODE_ENV === 'production' ? 'https://www.slowkolot.pl' : 'http://localhost:3000';

  const my_ip_response = await fetch(base_url + '/api/ip');

  const {ip} = await my_ip_response.json();

  return ip as string;
};
