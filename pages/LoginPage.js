class LoginPage {

  constructor(page) {

    this.page = page;

    this.email = page.locator('#email');
    this.password = page.locator('#password');

    this.loginBtn = page.locator('button:has-text("Sign In")');
  }

  async login(email, pass) {

    await this.email.fill(email);
    await this.password.fill(pass);
    await this.loginBtn.click();

  }

}

module.exports = LoginPage;
