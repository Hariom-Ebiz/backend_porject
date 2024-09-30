
const apiRoutes = {
    '/api/getData': {
        get: {
            summary: 'get data',
            description: 'Submit user data ',
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: { $ref: '#/components/schemas/UserProfile' },
                    },
                },
            },
            responses: {
                200: {
                    description: 'data get successfully',
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/ApiResponse' },
                        },
                    },
                },
                400: {
                    description: 'Invalid input',
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/ErrorResponse' },
                        },
                    },
                },
            },
        },
    },
}

export default apiRoutes;





