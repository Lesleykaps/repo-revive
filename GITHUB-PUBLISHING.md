# GitHub Publishing

This repository is ready for a public GitHub repository named `repo-revive`.

1. Run `npm test` and `npm run pack:check`.
2. Commit and push the repository.
3. Create a GitHub release/tag for each published version.
4. Authenticate with npm and run `npm publish` only when npm registry publication is intended.

The package uses the unscoped npm name `repo-revive`, verified as available before this package was created. Until it is published, install directly from GitHub with `npm install -g github:Lesleykaps/repo-revive`. If the npm name is claimed before publication, use a scoped name and update the README install command.
