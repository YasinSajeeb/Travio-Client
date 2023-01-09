import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="collapse w-3/4 mx-auto mb-2">
  <input type="checkbox" className="peer" /> 
  <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
  Difference between SQL and NoSQL
  </div>
  <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
    <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
  </div>
</div>
            <div className="collapse w-3/4 mx-auto mb-2">
  <input type="checkbox" className="peer" /> 
  <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
  What is JWT, and how does it work?
  </div>
  <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
    <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. <br/> When validating a JWT, generally, the current hash value and the original hash value are parsed, or decoded, then compared to verify the token signature is authentic. All of our backend API quickstarts use SDKs that perform JWT validation and parsing for you.
    </p>
  </div>
</div>
            <div className="collapse w-3/4 mx-auto mb-2">
  <input type="checkbox" className="peer" /> 
  <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
  What is the difference between javascript and NodeJS?
  </div>
  <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
    </p>
  </div>
</div>
            <div className="collapse w-3/4 mx-auto mb-2">
  <input type="checkbox" className="peer" /> 
  <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
  How does NodeJS handle multiple requests at the same time?
  </div>
  <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
    </p>
  </div>
</div>
        </div>
    );
};

export default Blogs;