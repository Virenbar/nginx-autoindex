const config = useRuntimeConfig().public;

export default async function (path: string) {
  const url = `${config.json}${path}`;

  const { data, error } = await useFetch<ItemJSON[]>(url);
  if (!data.value || error.value) { return null; }

  return <Item[]>data.value.map(I => ({
    name: I.name,
    type: I.type,
    mtime: new Date(I.mtime),
    url: `${config.storage}${path}${I.name}`,
    size: I.size
  }));
}

interface ItemJSON {
  name: string
  type: "directory" | "file"
  mtime: string
  size?: number
}
