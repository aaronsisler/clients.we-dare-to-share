# clients.we-dare-to-share

## Technologies

### Dependencies

- CVA - Classnames but better
- Next.js - React Framework
- Radix UI - Accessible Web Components
- Radix Theme - ?? Might use if easier than Tailwind for design system
- React (UI/DOM Framework)
- Tailwind CSS - CSS

### Dev Dependencies

- ES Lint
- PostCSS
- Prettier
- Storybook
- TypeScript

### Plugins/Extensions Needed

- ESLint
- PostCSS Language Support
- Prettier - Code formatter
- Tailwind CSS IntelliSense

## Conventions

- Will use a `src` folder
- `src` will have:
  - common
  - features
  - utils
  - pages
    - api

## Nice To Have

### Coupling Graph

The `coupling-graph` script is a useful tool that helps visualize the coupling and connections between your project's internal modules. It's built using the [Madge](https://github.com/pahen/madge) library. To generate the graph, simply run the following command:

```bash
yarn coupling-graph
```
