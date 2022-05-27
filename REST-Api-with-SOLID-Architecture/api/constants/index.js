module.exports = {
    defaultServerResponse: {
        status: 400,
        message: '',
        body: {}
    },
    productMessage: {
        PRODUCT_CREATED: 'Product Created Successfully',
        PRODUCT_FETCHER: 'Product fetch successfully',
        PRODUCT_UPDATED: 'Product updated successfully',
        PRODUCT_NOT_FOUND: 'Product Not Found',
        PRODUCT_DELETED: 'Product deleted'
    },
    userMessage: {
        SIGNUP_SUCCESS: 'Signup Success',
        LOGIN_SUCCESS: 'Sign in Success',
        DUPLICATE_EMAIL: 'User already exist, give another email',
        USER_NOT_FOUND: 'User not found',
        INVALID_PASSWORD: 'Incorrect Password'
    },
    requestValidationMessage: {
        BAD_REQUEST: 'Invalid fields',
        TOKEN_MISSING: 'Token missing'
    },
    databaseMessage: {
        INVALID_ID: 'Invalid Id'
    }
}