// src/utils/validators.js
class Validator {
	static isEmailValid(email) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}

	static isPasswordStrong(password) {
		return password.length >= 8;
	}

	static isPhoneValid(phone) {
		const phoneRegex = /^\d{10}$/;
		return phoneRegex.test(phone);
	}

	static isFullNameValid(fullName) {
		return fullName.length >= 6;
	}

	static isAddressValid(address) {
		return address.length >= 10;
	}

	static isCourseTitleValid(title) {
		return title.length >= 6;
	}

	static isCourseDescriptionValid(description) {
		return description.length >= 10;
	}

	static isCoursePriceValid(price) {
		return price > 0;
	}
}

export default Validator;
