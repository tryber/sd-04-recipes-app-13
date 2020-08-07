export default async function setById(get, set) {
  const pathName = await window.location.pathname.slice(9);
  const id = await pathName.replace(/\D/g, '');
  await get(id).then((data) => set(data[0]));
}
