# **setup/styleguidist**

**Please note:** before running any code from this repository, be sure to run `npm install`.

This repository has been created in order to show how the module **react-styleguidist** works.

## What is React Styleguidist?

React Styleguidist, at its core, is a website which describes a collection of React components within a React project. Whilst there are many other aspects to what Styleguidist offers, this is the most significant and most used feature it offers. It does this by polling pre-configured elements of a project, via it's own configuration file. Some examples of this include:

## PropType defnitions breakdown

Styleguidist can be configured to read certain React component files, either strictly typed or via globbing:

```javascript
sections: [
    components: ['src/components/ErrorCodes/index.jsx'],
    name: 'Errors',
},{
    components: ['src/templates/_Ecommerce/**/index.jsx'],
    name: 'Ecommerce templates',
}]
```

The purpose of this is so that component **PropType** definitions can be parsed, and summarized as part of the styleguidist output. In doing this, it provides a single place whereby a component can be seen running in situ, alongside the props that that given component expects to receive. Because of this, libraries such as Styleguidist are considered an incredibly useful tool for projects which include multiple teams, often where front-end and back-end development may be separated. It provides a platform for the front-end Developers to provide details of how the **contracts** of a specific component are expected to work. A typical output of a components prop type breakdown that Styleguidist can render is shown below:

| Prop name             | Type      | Default   | Description                                                                                                           |
| :-------------------- | :-------: | :-------: | :-------------------------------------------------------------------------------------------------------------------- |
| attemptsRemaining     | number    | -1        | How many attempts are remaining?                                                                                      |
| debugOptions          | shape[]   | []        | Any debug options                                                                                                     |
| errorMessage          | string    | ""        | The radio button error message                                                                                        |
| fallback              | enum      | null      | Does this authenticator have a fallback authenticator if this one can't be completed? One of appSign, eia, smsOtp     |
| form                  | shape[]   | Required  | The contact details object                                                                                            |
| numberType            | enum      | Required  | The type of number One of eia, sms                                                                                    |
| onCancel              | func      | Required  | The cancel action for the page                                                                                        |
| onContinue            | func      | Required  | The continue action for the page                                                                                      |
| onFieldChange         | func      | Required  | The radio field on change function for updating state                                                                 |
| onVerifyADifferentWay | func      | Required  | The function to call when the 'Use a different way to verify yourself' link is clicked                                |
| showDebugOptions      | bool      | false     | Whether or not to show additional options (used only for prototyping)                                                 |

In order for a components PropTypes to be parsable by Styleguidist (and in line with the above table) the format of the PropTypes comments must abide by the following format:

```javascript
COMPONENT.propTypes = {
  /** How many attempts are remaining? */
  attemptsRemaining: PropTypes.number,
  /** Any debug options */
  debugOptions: PropTypes.arrayOf(
    PropTypes.shape({
      ...
    })
  ),
  /** The radio button error message */
  errorMessage: PropTypes.string,
  /** Does this authenticator have a fallback authenticator if this one can't be completed? */
  fallback: PropTypes.oneOf(['appSign', 'eia', 'smsOtp']),
  /** The contact details object */
  form: PropTypes.shape({
    fields: PropTypes.shape({
      phoneNumber: PropTypes.shape({
        error: PropTypes.string,
        options: PropTypes.arrayOf(
          PropTypes.shape({
            ...
            ]).isRequired,
          })
        ).isRequired,
        value: PropTypes.string,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  /** The type of number, either 'sms' or 'eia' */
  numberType: PropTypes.oneOf(['eia', 'sms']).isRequired,
  /** The cancel action for the page */
  onCancel: PropTypes.func.isRequired,
  /** The continue action for the page */
  onContinue: PropTypes.func.isRequired,
  /** The radio field on change function for updating state */
  onFieldChange: PropTypes.func.isRequired,
  /** The function to call when the 'Use a different way to verify yourself' link is clicked */
  onVerifyADifferentWay: PropTypes.func.isRequired,
  /** Whether or not to show additional options (used only for prototyping) */
  showDebugOptions: PropTypes.bool,
};
```

## Component variations

React components by their own nature can receive dynamic props in order to ensure a different rendering based on the props received. The website that Styleguidist generates allows for an unlimited number of component variations to be shown in response to Markdown. Each of the resultant rendered components will be shown one after the other, with each example showing the components props that were passed in. In order to do this, a **readme.MD** file needs to be placed within the same folder as a components index.jsx file. The contents of this file file needs to be in the following format:

```javascript
### Without errors:

<ComponentX
  callInProgress={false}
  errorMessage=""
  forgotDetailsLink="#"
  form={{
    fields: {
      userId: {
        error: '',
        value: '',
      },
      password: {
        error: '',
        value: '',
      },
    },
  }}
  onContinue={e => {
    e.preventDefault();
    alert('onContinue() called');
  }}
  onPasswordChange={() => {}}
  onRememberMeChange={() => {}}
  onUserIdChange={() => {}}
  rememberMe={false}
/>
```

```javascript
### With errors:

<ComponentX
  callInProgress={false}
  errorMessage="Error - ComponentX"
  forgotDetailsLink="#"
  form={{
    fields: {
      userId: {
        error: 'Error - User ID',
        value: '',
      },
      password: {
        error: 'Error - Password',
        value: '',
      },
    },
  }}
  onContinue={e => {
    e.preventDefault();
    alert('onContinue() called');
  }}
  onPasswordChange={() => {}}
  onRememberMeChange={() => {}}
  onUserIdChange={() => {}}
  rememberMe={false}
/>
```

In terms of how the above component would be rendered out within the Styleguidist generated website, the following would be shown:

1. ComponentX PropTypes tabular breakdown
2. ComponentX variation 1 (Without errors) rendered as a normal React component in the browser
3. ComponentX variation 1 (Without errors) props from the readMe markdown file would be shown
4. ComponentX variation 2 (With errors) rendered as a normal React component in the browser
5. ComponentX variation 2 (With errors) props from the readMe markdown file would be shown

## Styleguide config

The documentation of Styleguidist is comprehensive, and available to view [here](https://github.com/styleguidist/react-styleguidist/blob/master/docs/Cookbook.md). A few examples of things that can be specified through configuration are:

- Include specific components within the Styleguidist output
- Exclude specific components from the Styleguidist output
- How to display the source code of a component within the Styleguidist output
- How to customize the look and feel of the Styleguidist website
- How to change syntax highlighting colours within the Styleguidist output
- How to add external files (such as CSS and JavaScript) within the Styleguidist output

## In summary

When Styleguidist is ran on a Development machine, a new server is spun up on its own URL. Styleguidist then looks at its own configuration and builds a website which shows details of a list of configured React components. Depending on the configuration, the website it builds will differ. Typically, Styleguidist is used for creating a website which shows a set number of components within a React project, alongside the props each of those components require in order to render in a specific way. In doing this, it provides a tremendously useful reference for front-end and back-end Developers, so that all concerned are aware of not only how a component should look, but also how it is expected to respond to differing props it receives.