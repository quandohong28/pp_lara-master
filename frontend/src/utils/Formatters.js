export class Formatter {
    static capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    static formatError(error) {
        return error.response.data.message;
    }

    static formatSuccess(success) {
        return success.data.message;
    }

    static formatSlug(slug) {
        return slug.split('-').join(' ');
    }

    static formatDate(date) {
        return new Date(date).toLocaleDateString();
    };
}