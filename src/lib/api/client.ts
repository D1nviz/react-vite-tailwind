import ky from 'ky';

export const apiClient = ky.create({
  prefixUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  credentials: 'include', // Includes cookies in requests
  hooks: {
    beforeRequest: [
      // Add default headers
      (request) => {
        request.headers.set('Accept', 'application/json');
      },
    ],
    // Transform error responses
    // beforeError: [
    //   async (error: HTTPError) => {
    //     const { response } = error;
    //     if (response && response.body) {
    //       try {
    //         const body = (await response.json()) as ApiErrorResponse;
    //         error.name = "ApiError";
    //         error.message = body.message || error.message;
    //         return error;
    //       } catch {
    //         // Use default error message if JSON parsing fails
    //       }
    //     }
    //     return error;
    //   },
    // ],
    // You can transform response here if needed
    // afterResponse: [
    //   // Handle common response scenarios
    //   (_request, _options, response) => {
    //     return response;
    //   },
    // ],
  },
  retry: {
    limit: 2,
    methods: ['get', 'put', 'head', 'delete', 'options', 'trace'],
    statusCodes: [408, 413, 429, 500, 502, 503, 504],
  },
});
