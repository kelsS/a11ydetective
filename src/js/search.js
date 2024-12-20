// Search

import { algoliasearch } from 'algoliasearch';

const client = algoliasearch('55EQEK0SRE', '52b58f5cd0b85f7f739f5dac6a5fa10c');

// Fetch and index objects in Algolia
const processRecords = async () => {
    const datasetRequest = await fetch('https://dashboard.algolia.com/sample_datasets/movie.json');
    const movies = await datasetRequest.json();
    return await client.saveObjects({ indexName: 'movies_index', objects: movies });
};
  
processRecords()
    .then(() => console.log('Successfully indexed objects!'))
    .catch((err) => console.error(err));