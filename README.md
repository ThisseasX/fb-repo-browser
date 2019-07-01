# fb-repo-browser
Sample react app, fetching Facebook's Github Repositories and showing Name, Description and Stars.

## Features
* Search with pattern conversion to RegEx to leverage case-insensitivity and swap spaces with `.+` for better searching experience
* Pagination
* Loading
* Collapse
* Sorting

## Design Desicions
### Technical:
* Pure Function Components and Hooks for increased performance and reduced cognitive overhead
* CSS modules for CSS class scoping and modularity
* Custom Hooks implemented when necessary to abstract complex logic (for Pagination)
* All icons are SVGs for increase performance and customization
* Loading Circle SVG was custom-made with HTML5 Canvas, then converted to SVG for faster development

### Technologies used:
* `react-tiny-collapse` used for collapse transitions
* `normalize.css` used for normalizing browser default behaviour
* Sass was used instead of normal CSS to leverage nesting and variables
* `gh-pages` for easy static site deployment

### Non-technical
* Logical Unit grouping into relevantly named folders for high cohesion, and low coupling when applicable
