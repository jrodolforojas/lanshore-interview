# Real Estate Lanshore Code Challenge

## How to run? 🤔
Install dependencies (I use pnpm but you can use whatever you want, npm, bun, yarn,...).
```
pnpm install
```

Run the project
```
pnpm run dev
```

## Instructions 📝
[✅] The application will have a header bar with the buttons “New listing” and “Approve listings” on the main page to navigate among “Submit Listings” and “Publish Listings” pages respectively.

[✅] The application will have a header bar with the button “Return” on the “Submit Listings” and “Publish Listings” pages to navigate back home.

[✅] On all pages a “Time on site” label should appear on the header bar, displaying in real time the seconds that the user has been on the website. (the ticker should be synchronized between all pages, meaning that its not the time spent on a particular subpage, but the overall time spent on the app).

[✅] Main page: On the main page only the published listings should be displayed.

[✅] Publish listings page: On this page all listings (published or unpublished) should be displayed, and the user should be able to toggle listings between the published/unpublished status.

[✅] Submit listings page: On this page the user can load a new listing, this listing should be set as “Unpublished” as default. The submit button should be disabled unless the entire form is filled out.

## Strategy
Separate the project in small steps and completed it in order. So with that, I constantly "showing" the app progress to client.

## Why I use it? 🧐
`pnpm` better performance than npm and store the packages in your computer so you just need to install the new ones.

`wouter` light-weight alternative to React Router.

`tailwind` css framework and don't use performance expensive UI Libraries.

`react-hook-form` form validations.

`sonner` light-weight toaster for React.

`react context for timer` because for me React Context you have to use in a small part of your code not to handle an entire context so for that I created a small context just for the timer.