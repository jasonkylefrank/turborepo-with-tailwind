module.exports = {
  reactStrictMode: true,
  // Tells Next.js to automatically transpile dependencies from local packages (like in monorepos),
  //  or from external dependencies (from node_modules), if specified.  See: https://nextjs.org/docs/advanced-features/compiler#module-transpilation
  transpilePackages: ["ui"], // "ui" is my local library within the monorepo.
};
