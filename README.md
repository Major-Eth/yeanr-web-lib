# yearn-web-lib
Yearn web Lib is a library of standard components used through Yearn's Projects. This library is made for React projects and [Styled-Components](https://styled-components.com/) is used to build the different components. You can check them on the StoryBook.

### Current components
- Typography (`Heading1`, `Heading2`, `Heading3`, `Text`, `Caption`)
- Icons
- Banner
- Buttons (`Filled`, `Oulined`, `Icon`)
- Dropdown
- Spinner


### Pull request and review Conventions
- Each pull request mush have an explaination on why this PR is relevant.
- Commit should be signed.
- After a review, **one commits should fix one issue** at a time.
- All comments should be **resolved by the person who originally created the comment**.
- All comments should be **resolved before merging**.
- Any comments with feedback should be responded to by the author with a comment including the commit hash where the feedback has been resolved, or a reason with why it will not be addressed.
- PRs require one approving review by a contributor with write access before it can be merged.

### @yearn packages
Some packages come from the @yearn library.
In order to use them, you will need to generate a [Github Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token), to create or update the `~/.npmrc` file with the following content:
 ```
registry=https://registry.npmjs.org/
@yearn:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_ACCESS_TOKEN
 ```
 This will link all repo named `@yearn` you will install to the correct Yearn organization
