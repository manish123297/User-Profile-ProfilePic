const Home = () => {
  return (
    <div style={{margin:"60px" ,backgroundColor:"#80cbc499",padding:"30px"}}>
      <div>
        <h2>This is About How Can We Upload And Retrive Images Of A User(File Handling) </h2>
        <h3 >
          The homepage or home page is the name of the main page of a website
          where visitors can find hyperlinks to other pages on the site. By
          default, the homepage on all web servers is index.html; however, it
          can also be index.htm, index.php, or whatever the developer decides.
        </h3>

        <ul style={{marginTop:"30px"}}>
          <li style={{marginTop:"10px"}}>
            Click the browser home button that should resemble one of the home
            buttons on this page.
          </li>
          <li style={{marginTop:"10px"}}>
            Finally, you can also close your browser and all open tabs. Once
            re-opened, the browser opens the home page.
          </li>
          <li style={{marginTop:"10px"}}>
            Unfortunately, some poorly designed web pages may not give the
            visitor an option to return to the homepage.
          </li>
        </ul>
      <h3>Our Contributors</h3>
      <ol>
      <li><strong>Arun Goril</strong></li>
        <li><strong>Manish Chaudhary</strong></li>
      </ol>
      </div>
    </div>
  );
};

export default Home;
