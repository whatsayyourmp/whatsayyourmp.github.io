# How to contribute

*Terima Kasih*\* for wanting to help contribute to this project!

The team currently owning & maintaining this project is very small, so just drop a mail at `sg.parliament.debates.analyst@gmail(dot)com` and we can sync up further offline. Please feel free to reach out, and do not work as a lone wolf since the context may not be clear from existing docs.

## Testing

The rule of thumb is to extract heavy business logic for one page away into their individual `logic.ts` files, and then add unit tests for verifying the edge cases for each function. If these unit tests fail, the GitHub Actions workflow for deploying the website will fail.

Didn't choose to do automated UI testing for now, since this project's relative simplicity has not required it yet.

## Deploying

Deployments are automatically performed once a PR is merged. This is done via the [Deploy Next.js site to Pages workflow](https://github.com/whatsayyourmp/whatsayyourmp.github.io/actions/workflows/deploy.yml).

## Submitting changes

Please send a [GitHub Pull Request to opengovernment](https://github.com/whatsayyourmp/whatsayyourmp.github.io/pull/new/main) with a clear list of what you've done (read more about [pull requests](http://help.github.com/pull-requests/)).

Always write a clear log message for your commits. One-line messages are fine for small changes, but bigger changes should look like this:

    $ git commit -m "A brief summary of the commit
    > 
    > A paragraph describing what changed and its impact."

The commit summaries are enforced by Commitlint with [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) as spec.

## Coding conventions

* Style is enforced by `eslint` as far as possible
* If not familiar, please read up on [Clean Code](https://github.com/ryanmcdermott/clean-code-javascript)

## Misc.

\* *Terima Kasih* - Thank You in Malay for our international friends.
