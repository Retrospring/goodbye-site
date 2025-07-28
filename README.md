# Retrospring Goodbye Site

This is the website containing the final shutdown details for Retrospring!

For ease of deployment to **GitHub Pages**, a built copy of the website is
already present in the `_site` directory in this repository.

## Repository Rundown

### Technologies Used

- [Deno](https://deno.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Lume](https://lume.land/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Chart.js](https://www.chartjs.org/)

### Structure

- `_site`: Built version of the website.
- `data`: Contains raw data
- `scripts`: Contains scripts to convert the raw data for the site
- `src`: Source code and assets of the website

## Development

### Prerequisites

- Deno

### Running the Site locally

```shell
$ deno task serve
```

And the site will be accessible at `localhost:3000`.

### Building the Site locally

```shell
$ deno task build
```

And the site will be output in the `_site` directory.

## License

This website is licensed under CC-BY-SA-4.0. It is separately licensed from the
main Retrospring source code due to the non-functional and only informational
nature.

For Retrospring licensing, please view the
[LICENSE file of the main Retrospring repository](https://github.com/Retrospring/retrospring/blob/main/LICENSE).
