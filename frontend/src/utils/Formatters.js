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

    static formatDate(inputDate) {
        const date = new Date(inputDate);

        // Lấy ngày, tháng, năm
        const day = date.getDate();
        const month = date.getMonth() + 1; // Tháng bắt đầu từ 0
        const year = date.getFullYear();

        // Lấy giờ, phút, giây
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        // Định dạng ngày tháng
        const formattedDate = [
            (day < 10 ? '0' : '') + day,
            (month < 10 ? '0' : '') + month,
            year
        ].join('/');

        // Định dạng giờ phút giây
        const formattedTime = [
            (hours < 10 ? '0' : '') + hours,
            (minutes < 10 ? '0' : '') + minutes,
            (seconds < 10 ? '0' : '') + seconds
        ].join(':');

        // Trả về mảng [date, time]
        return [formattedDate, formattedTime];
    };
}