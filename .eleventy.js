const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
    // Put robots.txt in root
    eleventyConfig.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' });

    eleventyConfig.addPassthroughCopy({ 'src/styles.css': '/css/styles.css' });

    eleventyConfig.addPassthroughCopy({ 'src/app.js': '/js/app.js' });

    eleventyConfig.addPassthroughCopy({ 'src/assets': '/assets' });

    // Convert gmt date to locale string
    eleventyConfig.addFilter('postDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    });

    // Display year
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

	// Input directory: src
	// Output directory: dist
    return {
        dir: {
            input: "src",
            output: "dist",
            layouts: 'includes/layouts',
            includes: "includes",
            data: "data",
        }
    }
};