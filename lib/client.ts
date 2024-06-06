import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

 const client = createClient({
  projectId: "p7lbnsax",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
export default client

const builder = imageUrlBuilder(client);

export function urlFor(source: any){
  return builder.image(source);
}

