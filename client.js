import { createClient } from "next-sanity";

export const client = createClient({
    projectId: 'n3nue3rt',
    dataset:'production',
    apiVersion:'2023-03-10',
    useCdn: true,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN
  })
