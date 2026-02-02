<img width="1906" height="841" alt="image" src="https://github.com/user-attachments/assets/8059b82c-adb2-4c14-8726-4018aa4a35f0" />First, run the development server:- npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Below is the attached UI for landing page and here 
<img width="1906" height="841" alt="image" src="https://github.com/user-attachments/assets/b37f1d5a-28af-4be6-8052-a92fba9cde70" />

This project is a Books Library application built with Next.js. It demonstrates the difference and interaction between **Server Components** and **Client Components** in a modern Next.js application.  

- **Server Components**: Fetch and render data on the server for better performance, SEO, and faster initial load.  
- **Client Components**: Handle interactive UI features like filtering and sorting without a full page reload.  

This project shows how you can 
1. Display Books  
   - A list of books with title, author, genre, and rating.
   - Book data is fetched/rendered on the server (Server Component).

2. **Interactive Filter & Sort**  
   - Users can filter books by genre and sort by rating.
   - Filtering and sorting are handled on the client (Client Component) using React `useState`.

3. **Separation of Concerns**  
   - Server Component (`BookList.tsx`) handles data rendering.
   - Client Component (`BookFilter.tsx`) handles UI interactivity.
   
combine server-side data fetching with client-side interactivity, a key feature in Next.js 




