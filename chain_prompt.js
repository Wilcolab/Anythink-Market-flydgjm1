/**
 * Converts a string to kebab-case with special handling for abbreviations.
 * @param {string} input - The input string to convert.
 * @returns {string} The kebab-case version of the input.
 * @throws {Error} If input is null, undefined, or empty.
 */
function toKebabCase(input) {
    // Step 1: Input validation
    if (input === null || input === undefined || input.trim() === '') {
        throw new Error('Input cannot be null, undefined, or empty.');
    }

    // Step 2: Convert to kebab-case
    // - Replace underscores and spaces with hyphens
    // - Insert hyphens before uppercase letters (except at the start)
    // - Convert to lowercase
    // - Remove non-alphanumeric characters except hyphens

    // Special handling for abbreviations:
    // - If a sequence of 2+ uppercase letters is found, treat as one word (e.g., "APIKey" -> "api-key")
    // - Otherwise, split on uppercase boundaries

    // Replace underscores and spaces with hyphens
    let str = input.replace(/[_\s]+/g, '-');

    // Handle abbreviations and split words
    str = str.replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2'); // APIKey -> API-Key
    str = str.replace(/([a-z\d])([A-Z])/g, '$1-$2');     // myAPI -> my-API

    // Remove non-alphanumeric except hyphens
    str = str.replace(/[^a-zA-Z0-9-]/g, '');

    // Convert to lowercase
    str = str.toLowerCase();

    // Remove multiple consecutive hyphens
    str = str.replace(/-+/g, '-');

    // Trim hyphens from start/end
    str = str.replace(/^-+|-+$/g, '');

    return str;
}

module.exports = { toKebabCase };