
const apiSchema = {
    UserProfile: {
        type: 'object',
        properties: {
            name: { type: 'string', example: 'Hariom' },
            number: { type: 'string', example: '54335483974' }, // Changed 'contact_number' to 'number'
            work: { type: 'string', example: 'Software Engineer' }, // Added new field 'work'
            position: { type: 'string', example: 'Senior Developer' }, // Added new field 'position'
            address: { type: 'string', example: '123 Main St' },
            nickname: { type: 'string', example: 'Harry' }, // Added new field 'nickname'
            website: { type: 'string', format: 'uri', example: 'https://www.hariom.com' }, // Changed 'profile_url' to 'website'
            birthday: { type: 'string', format: 'date', example: '2000-11-29' }, // Changed 'dob' to 'birthday'
            relationship: { type: 'string', example: 'single' }, // Added new field 'relationship'
            note: { type: 'string', example: 'This is an additional note.' } // Added new field 'note'
        },

        required: ['name', 'number', 'work', 'position', 'address', 'nickname', 'website', 'birthday', 'relationship', 'note'],
    },
    ApiResponse: {
        type: 'object',
        properties: {
            status: { type: 'number', example: 200 },
            message: { type: 'string', example: 'Message' },
            data: { type: 'object' },
        },
    },
    ErrorResponse: {
        type: 'object',
        properties: {
            status: { type: 'number', example: 500 },
            message: { type: 'string', example: 'Profile created successfully' },
            data: { type: 'object' }, // Define if known
        },
    },
}
export default apiSchema;
