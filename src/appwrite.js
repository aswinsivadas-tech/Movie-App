import {Client, Databases, ID, Query } from 'appwrite'

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.vite_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

let client;
let database;

try {
    if(PROJECT_ID) {
        client = new Client()
        .setEndpoint('https://fra.cloud.appwrite.io/v1')
        .setProject(PROJECT_ID);

        database = new Databases(client);


        // Diagnostic check for configuration
        if (DATABASE_ID === COLLECTION_ID) {
      console.warn("⚠️ WARNING: VITE_APPWRITE_DATABASE_ID and VITE_APPWRITE_COLLECTION_ID are identical. This is likely a configuration error in your .env file.");
    }
        
    }
} catch (error) {
    console.error("Appwrite initialization failed:", error);
}

export const updatedSearchCount = async (searchTerm, movie ) => {
    if (!database) {
        console.log("Appwrite databbase not initialized.");
        return;
    }

      // 1. Use Appwrite SDK to check if the search term exists in the database
try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
        Query.equal('searchTerm', searchTerm),
    ])
// 2. If it does, update the count
  if(result.documents.length > 0) {
   const doc = result.documents[0];

   await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
    count: doc.count + 1,
   })
  // 3. If it doesn't, create a new document with the search term and count as 1
  } else {
   await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
    searchTerm,
    count: 1,
    movie_id: movie.id,
    poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
   })
  }
 } catch (error) {
  console.error("Error updating search count:", error);
  if (error.code === 404) {
    console.error("Did you create the Database and Collection in Appwrite? Check your .env IDs.");
  }
 }
}

export const getTrendingMovies = async () => {
  if (!database) return [];

 try {
  const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
    Query.limit(5),
    Query.orderDesc("count")
  ])

  return result.documents;
 } catch (error) {
  console.error("Error fetching trending movies:", error);
  return [];
 }
}