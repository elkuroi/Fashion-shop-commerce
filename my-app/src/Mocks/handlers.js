// import { http } from 'msw';

// export const handlers = [
//   http.get('/api/items', (req, res, ctx) => {
//     return res(ctx.json([
//       { id: 1, name: 'Item 1' },
//       { id: 2, name: 'Item 2' },
//       { id: 3, name: 'Item 3' }
//     ]));
//   }),

//   http.get('/api/search', (req, res, ctx) => {
//     try {
//       const query = req.url.searchParams.get('query')?.toLowerCase() || '';
//       console.log('Search query received:', query);  

//       const items = [
//         { id: 1, name: 'Item 1' },
//         { id: 2, name: 'Item 2' },
//         { id: 3, name: 'Item 3' }
//       ];

//       const results = items.filter(item => item.name.toLowerCase().includes(query));
//       return res(ctx.json(results));
//     } catch (error) {
//       console.error('Error handling search request:', error);
//       return res(
//         ctx.status(500),
//         ctx.json({ error: 'Server error: could not process the request' })
//       );
//     }
//   }),

//   http.get('/api/items/:id', (req, res, ctx) => {
//     const { id } = req.params;
//     return res(ctx.json({ id, name: `Item ${id}` }));
//   }),
// ];