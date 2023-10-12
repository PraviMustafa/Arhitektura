/** @type {import('next').NextConfig} */

const nextIntl = require('next-intl/plugin')('./src/i18n/i18n.js');

const nextConfig = {}

module.exports = nextIntl(nextConfig);