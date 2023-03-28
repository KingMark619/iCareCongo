
// import imageUrlBuilder from '@sanity/image-url-builder'

// export const client = createClient({
//     projectId: 'n3nue3rt',
//     dataset:'production',
//     apiVersion:'2023-03-10',
//     useCdn: true,
//     token:process.env.NEXT_PUBLIC_SANITY_TOKEN
// })

// export async function getStaticProps() {
//     const pets = await client.fetch(`*[_type == "pet"]`);
  
//     console.log('request from lib')
//     return {
//       props: {
//         pets
//       }
//     };
//   }
// const builder = imageUrlBuilder(client)

// export const urlFor = (source) => builder.image(source)