# Smoothie Delight Project

Smoothie Joy is an interactive Next.js web application for smoothie enthusiasts. The application provides personalized smoothie recommendations and allows users to explore various recipes with fresh ingredients.

## Main Features

- **Personalized Smoothie Recommendations**: Offers users custom smoothie recipes based on their preferences and past selections.
- **Interactive Recipe Exploration**: Users can discover new smoothie recipes and detailed descriptions of how to prepare them.
- **Data Fetching**: Implements `getStaticProps` for efficient data fetching at build time, ensuring fast page loads and SEO-friendly content.
- **Dynamic Routing**: Utilizes `getStaticPaths` with `getStaticProps` to pre-render pages for each smoothie recipe, enabling dynamic creation of content-rich pages for each unique smoothie.
- **Server-Side Rendering (SSR)**: Employs `getServerSideProps` for real-time data fetching, which is ideal for handling user sessions and rendering user-specific data on demand.
- **Custom 404 Page**: Created a user-friendly custom 404 page using Next.js' built-in page support, providing a better experience for users who navigate to a non-existent page within the application.
- **Responsive Image Optimization**: Leverages Next.js' built-in Image component to serve optimized images for different screen sizes, contributing to improved page speed and performance.
- **SEO Optimization**: Custom metadata for each page to improve search engine visibility and user engagement.
- **Deployment and Version Control**: Project is version-controlled using Git and hosted on GitHub, with provisions for deployment to GitHub Pages for static hosting.

## Technologies Used

- **Next.js**: The React framework for production used for building this application, taking advantage of its hybrid static & server rendering capabilities.
- **React**: A JavaScript library for creating user interfaces, forming the basis of the project's front-end.
- **CSS Modules**: For component-scoped styling, ensuring that styles do not conflict across the application.
- **TypeScript**: A superset of JavaScript that adds static type definitions, used to enhance developer productivity and code quality.

## Project Structure

- The project follows the standard Next.js folder structure with pages, components, and public directories.
- The `pages/api` directory holds the mock API routes used for simulating backend data fetching.
- Static assets such as images and styles are located in the `public` and `styles` directories respectively.

---

Feel free to explore the repository and try out the live application.
