export default async function (path: string) {
  const config = useRuntimeConfig().public;
  const url = `${config.api}${path}`;

  const { data, error } = await useFetch<ItemJSON[]>(url);
  if (!data.value || error.value) { return null; }

  return data.value.map(I => ({
    name: I.name,
    type: I.type,
    mtime: new Date(I.mtime),
    url: `${config.files}${I.name}`,
    size: I.size
  }));
}

interface ItemJSON {
  name: string
  type: "directory" | "file"
  mtime: string
  size?: number
}
