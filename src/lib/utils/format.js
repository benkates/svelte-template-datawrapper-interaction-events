/**
 * Adds commas to a number for formatting purposes.
 *
 * @param {number} num - The number to add commas to.
 * @returns {string} The formatted number with commas.
 */
export const comma = (num) => {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
