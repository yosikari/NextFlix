<h1>Nextflix - 'Netflix' clone</h1>

<img src='/readme-images/home.png' /> 

Check it out here: https://next-flix-ebon.vercel.app/

## Project Features

- Login \ Sign up \ Guest mod \ Google login - responsive to any device login page.

- Plans - the user have to choose a different plans to subscribe to the app. 

- Home - after subscribing to the app, the user will be moved to the home page, here you can watch all the movies, watch the movies trailer, and add them to your wish list.

- Account - the user will be able to access the account page, which able to see signed Email, chosen plan, and other information, including expiration date, and switch plans feature.

- My List - the user will be able to access the list of accounts wishlist and watch trailers or remove movies from the list.

## Project Admin Features

- Users authentication panel - the admin of the project can access the project users panel, via 'Firebase', view all users, and edit users settings (Reset password, disable account, delete users, and more...).

- Products panel - the admin of the project can access the project products panel, via 'Firebase' and 'Stripe', view all products and active subscribers, produce profit reports, edit products prices and information, add/remove products, and more stripe features...

Note: using server side rendering make live rendering from server side (FirebaseDB including stripe.com), you can edit products from server and it will be rendered automatically.


<h2>Technologies Used</h2>
<b>This project is built using the following technologies:
</b>

The app started with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app),
using tailwind css
[`npm install -D tailwindcss postcss autoprefixer`]
[`npx tailwindcss init -p`] 
https://tailwindcss.com/docs/guides/nextjs .

- TypeScript
- TailwindCSS
- Next.js
- React Hooks (useRef, useState, useEffect)
- React Custom Hooks (useAuth, useList, useSubscription)


<h2>Libraries Used</h2>
<b>This project is using the following libraries:
</b>

<b>Styles:</b>
[`TailwindCSS`](https://tailwindcss.com/docs/guides/nextjs)
[`Material-ui`](https://mui.com/)
[`React-player`](https://www.npmjs.com/package/react-player)

<b>Icons:</b>
[`react-icons`](https://react-icons.github.io/react-icons/search?q=vscar)
[`@hero-icons`](https://heroicons.com/)

<b>Data Base:</b>
[`Firebase`](https://firebase.google.com/?gclid=CjwKCAjw_YShBhAiEiwAMomsEADNo-_EnFiX2rXf_3SXVyBIMEk3iun4mrUeFxXQ9BRzrWi634hRQBoCeY0QAvD_BwE&gclsrc=aw.ds)
- Authentication
- Firestore Database
- Run Payments with Stripe (extension)

<b>State management:</b>
[`Recoil.js`](https://recoiljs.org/)

<b>Flash notifications:</b>
[`React hot toast`](https://react-hot-toast.com/)
[`React toastify`](https://www.npmjs.com/package/react-toastify)

<b>Safe payment</b>
[`Stripe`](https://stripe.com/)

## Demo
To see a live demo of the project, please visit https://next-flix-ebon.vercel.app/

## Installation
To run the project locally, follow these steps:

Clone the repository: 
`git clone https://github.com/yosikari/NextFlix.git`

Install dependencies: 
`npm install`

Start the server: 
`npm run dev`

**The website should be available at** http://localhost:3000/.

## Contact Me
If you have any questions or feedback about the project, please feel free to reach me out at yosikari@gmail.com.

## Gallery

<h4>Login / Sign up / Guest mod</h4>
<img src='/readme-images/login.png' width="600"/> 

<h4>Movies</h4>
<img src='/readme-images/modal.gif' width="600"/> 


<h4>Plans</h4>
<img src='/readme-images/plans.gif' width="600"/> 


<h4>Checkout</h4>
<img src='/readme-images/checkout.gif' width="600"/> 

<h4>Account</h4>
<img src='/readme-images/account.gif' width="600"/> 

<h4>Admin Features</h4>
<h5>Products panel</h5>
<img src='/readme-images/ssr.png' width="600"/> 
<h5>Users panel</h5>
<img src='/readme-images/user.png' width="600"/> 



<h4>Responsive Design</h4>
<h5>Tablet</h5>
<img src='/readme-images/tablet.png' width="600"/> 
<h5>Mobile</h5>
<img src='/readme-images/mobile.png' width="600"/> 




