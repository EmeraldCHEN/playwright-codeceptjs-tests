export class Base {
  amOnPage(I: CodeceptJS.I, pageUrl: string) {
    I.amOnPage(pageUrl);
  }
}
  
// Create an instance of the page object
const base = new Base();
export default base;