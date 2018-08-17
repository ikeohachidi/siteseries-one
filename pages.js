const Navbar = Vue.component("Navbar", {
  template: `
    <div class="row">
      <ul>
        <li class="logo"><router-link to="/">Logo</router-link></li>
        <ul class="link">
          <li><router-link to="/">Item</router-link></li>
          <li><router-link to="/">item</router-link></li>
        </ul>

        <li class="login"><router-link to="/login">Login</router-link></li>
        <li class="signup"><router-link to="/signup">Signup</router-link></li>
      </ul>
    </div>
  `
})

const Home = Vue.component("Home", {
  template: `
    <div>
    
      <div class="land container">
        <div class="row">
          <div class="action">
            <h1>Lorem ipsum dolor</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eum molestiae corrupti impedit nobis optio cum repellat maiores, iure quibusdam ratione velit mollitia sit dolor aliquid maxime, reprehenderit animi expedita?</p>
            <button class="button-primary">Call To Action</button>
          </div>
        </div>
      </div>

      <div class="information container">
        <div class="row">
          <div class="info">
              <div>
                <img src="/images/logo.svg">
                <h3>Lorem Ispum</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eum molestiae corrupti impedit nobis optio cum repellat maiores, iure quibusdam ratione velit mollitia</p>
              </div>
              <div>
                <img src="/images/logo.svg">
                <h3>Lorem Ispum</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eum molestiae corrupti impedit nobis optio cum repellat maiores, iure quibusdam ratione velit mollitia</p>
              </div>
              <div>
                <img src="/images/logo.svg">
                <h3>Lorem Ispum</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eum molestiae corrupti impedit nobis optio cum repellat maiores, iure quibusdam ratione velit mollitia</p>
              </div>
            </div>

            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eum molestiae</h1>

            <div class="plans">
              <div>
                <h2>Lorem</h2>
                <p class="price">$10</p>
                <p>ipsum</p>
                <p>nobis</p>
                <p style="text-algin:center">corrupti impedit nobis optio cum repellat maiores</p>
                <button class="button-primary">DO IT!</button>
              </div>
              <div>
                <h2>Lorem</h2>
                <p class="price">$10</p>
                <p>ipsum</p>
                <p>nobis</p>
                <p style="text-algin:center">corrupti impedit nobis optio cum repellat maiores</p>
                <button class="button-primary">DO IT!</button>
              </div>
              <div>
                <h2>Lorem</h2>
                <p class="price">$10</p>
                <p>ipsum</p>
                <p>nobis</p>
                <p>corrupti impedit nobis optio cum repellat maiores</p>
                <button class="button-primary">DO IT!</button>
              </div>
            </div>
        </div>
      </div>

    </div>
  `
})


const Footer = Vue.component("Bottom", {
  template: `
    <div class="footer container">
      <div class="row">
        <p>2018 Ikeoha Chidi &copy;</p>
      </div>
    </div>
  `
})

const Login = Vue.component("Login", {
  template: `
    <div class="form-page container">
      <div class="row">
        <h1>Login</h1>
        <div>
          <form>
            <input type="text" name="email" placeholder="Email"> <br>
            <input type="password" name="password" placeholder="Password"> <br>
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </div>
  `
})

const Signup = Vue.component("Register", {
  template: `
    <div class="form-page container">
      <div class="row">
        <h1>Signup</h1>
        <div>
          <form>
            <input type="text" name="username" placeholder="Username"> <br>
            <input type="text" name="email" placeholder="Email"> <br>
            <input type="password" name="password" placeholder="Password"> <br>
            <input type="password" name="confirm-password" placeholder="Confirm Password"> <br>
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </div>
  `
})


const routes = [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/signup", component: Signup}
];

const router = new VueRouter({
  routes
})

new Vue({
  el: "#app",
  router,
  data: {
    hello: "lorem"
  }
})

// new Vue({
//   el: "#app",
//   data: {
//     hello: "lorem"
//   },
//   component: {
//     "Navbar": Navbar,
//     "Home": Home,
//     "Footer": Footer
//   }
// })